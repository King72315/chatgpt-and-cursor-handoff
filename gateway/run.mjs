/**
 * Apply one GitHub event, recover events since activation, or record a
 * simulated assignment. Outbound text is posted only when GATEWAY_POST=1.
 * The assignment keyword is never posted.
 */
import fs from "node:fs"
import path from "node:path"
import {
  applyEvent,
  applySimulatedAssignment,
  containsAssignmentKeyword,
  emptyLedger,
  normalizeGithubIssueComment,
  normalizeGithubPullRequest,
  recoverEvents,
} from "./protocol.mjs"

const ledgerPath = path.resolve(process.env.GATEWAY_LEDGER || "gateway/ledger.json")
const repository = process.env.GITHUB_REPOSITORY || "King72315/chatgpt-and-cursor-handoff"
const postEnabled = process.env.GATEWAY_POST === "1"

const result = await run()
writeSummary(result)
if (result.changed) writeLedger(result.ledger)
console.log(JSON.stringify({
  mode: result.mode,
  changed: result.changed,
  posted: result.posted,
  skipped: result.skipped,
  results: result.results.map((item) => ({
    reason: item.reason,
    issue: item.issueNumber,
    from: item.from,
    to: item.to,
    outbound: item.outbound.length,
    duplicate: item.duplicate,
  })),
}, null, 2))

async function run() {
  const ledger = readLedger()
  const mode = chooseMode()
  if (mode === "seed") return seed(ledger)
  if (mode === "event") return oneEvent(ledger)
  return recover(ledger)
}

function chooseMode() {
  const eventName = process.env.GITHUB_EVENT_NAME || ""
  if (eventName === "issue_comment" || eventName === "pull_request") return "event"
  if (eventName === "schedule") return "recover"
  if (eventName === "workflow_dispatch") return process.env.INPUT_MODE || "recover"
  if (process.argv.includes("--seed")) return "seed"
  if (process.argv.includes("--event")) return "event"
  return "recover"
}

async function oneEvent(ledger) {
  const payload = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, "utf8"))
  const eventName = process.env.GITHUB_EVENT_NAME
  const event = eventName === "pull_request"
    ? normalizeGithubPullRequest(payload)
    : normalizeGithubIssueComment(payload)
  if (!event) return finish("event", ledger, [], false)
  const applied = applyEvent(ledger, event)
  const posted = await publish(applied.result.outbound)
  return finish("event", applied.ledger, [applied.result], changed(ledger, applied.ledger), posted)
}

async function recover(ledger) {
  const working = clone(ledger)
  let changedActivation = false
  if (!working.activatedAt) {
    working.activatedAt = new Date().toISOString()
    changedActivation = true
  }
  const events = postEnabled || process.env.GATEWAY_RECOVER_FETCH === "1"
    ? await fetchEvents(working.activatedAt)
    : []
  const recovered = recoverEvents(working, events)
  const outbound = recovered.results.flatMap((item) => item.outbound)
  const posted = await publish(outbound)
  return finish("recover", recovered.ledger, recovered.results, changedActivation || changed(working, recovered.ledger) || changed(ledger, working), posted)
}

async function seed(ledger) {
  const issueNumber = Number(process.env.INPUT_ISSUE_NUMBER || 0)
  if (!issueNumber) throw new Error("seed mode needs an issue number")
  const applied = applySimulatedAssignment(ledger, {
    issueNumber,
    createdAt: new Date().toISOString(),
    scope: process.env.INPUT_SCOPE || "Harmless communication test. Do not modify an application. Do not deploy. Do not spend money.",
    projectRepository: process.env.INPUT_PROJECT_REPOSITORY || repository,
    htmlUrl: `https://github.com/${repository}/issues/${issueNumber}`,
  })
  const posted = await publish(applied.result.outbound)
  return finish("seed", applied.ledger, [applied.result], changed(ledger, applied.ledger), posted)
}

async function publish(outbound) {
  if (!postEnabled || outbound.length === 0) return []
  const posted = []
  for (const item of outbound) {
    if (containsAssignmentKeyword(item.body)) {
      throw new Error(`refusing to post assignment keyword on issue ${item.issueNumber}`)
    }
    const seen = await postedDeliveries(item.issueNumber)
    if (seen.has(item.deliveryId)) {
      posted.push({ issueNumber: item.issueNumber, deliveryId: item.deliveryId, skipped: true })
      continue
    }
    await github(`/repos/${repository}/issues/${item.issueNumber}/comments`, {
      method: "POST",
      body: JSON.stringify({ body: item.body }),
    })
    posted.push({ issueNumber: item.issueNumber, deliveryId: item.deliveryId, skipped: false })
  }
  return posted
}

async function fetchEvents(since) {
  const issues = await githubList(`/repos/${repository}/issues?state=all&since=${encodeURIComponent(since)}&per_page=50`)
  const events = []
  for (const issue of issues) {
    if (issue.pull_request) {
      if (!/Issue\s+#?\d+:\s*(acknowledgment|completion report)/i.test(issue.title || "")) continue
      const event = normalizeGithubPullRequest({
        pull_request: {
          number: issue.number,
          title: issue.title,
          body: issue.body,
          created_at: issue.created_at,
          html_url: issue.html_url,
          user: issue.user,
        },
      })
      if (event) events.push(event)
      continue
    }
    const comments = await githubList(`/repos/${repository}/issues/${issue.number}/comments?since=${encodeURIComponent(since)}&per_page=100`)
    for (const comment of comments) {
      const event = normalizeGithubIssueComment({ issue, comment })
      if (event) events.push(event)
    }
  }
  return events
}

async function postedDeliveries(issueNumber) {
  const comments = await githubList(`/repos/${repository}/issues/${issueNumber}/comments?per_page=100`)
  const ids = new Set()
  for (const comment of comments) {
    for (const match of String(comment.body || "").matchAll(/<!-- gateway:(\{.*?\}) -->/g)) {
      try {
        ids.add(JSON.parse(match[1]).delivery)
      } catch {
        // Ignore a malformed marker. The delivery id is the idempotency key.
      }
    }
  }
  return ids
}

async function githubList(pathname) {
  const rows = []
  let next = `https://api.github.com${pathname}`
  while (next) {
    const response = await githubRequest(next)
    const body = await response.json()
    if (Array.isArray(body)) rows.push(...body)
    else return body
    next = nextLink(response.headers.get("link"))
  }
  return rows
}

async function github(pathname, options) {
  const response = await githubRequest(`https://api.github.com${pathname}`, options)
  if (options?.method === "POST") return response.json()
  return response.json()
}

async function githubRequest(url, options = {}) {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN
  if (!token) throw new Error("GitHub token is not set")
  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "User-Agent": "riri-mariah-gateway",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...options.headers,
    },
  })
  if (!response.ok) {
    const detail = await response.text()
    throw new Error(`GitHub ${response.status} ${url} ${detail.slice(0, 300)}`)
  }
  return response
}

function nextLink(header) {
  const match = header && /<([^>]+)>;\s*rel="next"/.exec(header)
  return match ? match[1] : ""
}

function readLedger() {
  if (!fs.existsSync(ledgerPath)) return emptyLedger()
  return JSON.parse(fs.readFileSync(ledgerPath, "utf8"))
}

function writeLedger(ledger) {
  fs.mkdirSync(path.dirname(ledgerPath), { recursive: true })
  const temporary = `${ledgerPath}.tmp`
  fs.writeFileSync(temporary, `${JSON.stringify(ledger, null, 2)}\n`)
  fs.renameSync(temporary, ledgerPath)
}

function finish(mode, ledger, results, didChange, posted = []) {
  return {
    mode,
    ledger,
    results,
    changed: Boolean(didChange),
    posted,
    skipped: posted.filter((item) => item.skipped).length,
  }
}

function changed(before, after) {
  return JSON.stringify(before) !== JSON.stringify(after)
}

function writeSummary(result) {
  const lines = [
    `## Handoff gateway ${result.mode}`,
    "",
    `Changed ledger: ${result.changed ? "yes" : "no"}`,
    `Comments posted: ${result.posted.filter((item) => !item.skipped).length}`,
    `Duplicate comments skipped: ${result.skipped}`,
    "",
  ]
  for (const item of result.results) {
    lines.push(`- issue ${item.issueNumber ?? "-"}: ${item.reason} ${item.from || "-"} -> ${item.to || "-"}`)
  }
  const text = `${lines.join("\n")}\n`
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, text)
}

function clone(value) {
  return JSON.parse(JSON.stringify(value))
}
