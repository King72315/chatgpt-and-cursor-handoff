import assert from "node:assert/strict"
import test from "node:test"
import {
  applyEvent,
  applySimulatedAssignment,
  containsAssignmentKeyword,
  emptyLedger,
  normalizeGithubIssueComment,
  normalizeGithubPullRequest,
  recoverEvents,
} from "../protocol.mjs"

const SCOPE = "Harmless communication test. Do not modify an application. Do not deploy. Do not spend money."
const PROJECT = "King72315/chatgpt-and-cursor-handoff"

function at(minutes) {
  return `2026-10-17T12:${String(minutes).padStart(2, "0")}:00Z`
}

function assignment(body = `${"riri-assign"}\n\nAudit ${PROJECT}. ${SCOPE}`) {
  return {
    deliveryId: "issue_comment:1",
    kind: "issue_comment",
    actor: "King72315",
    actorIsBot: false,
    issueNumber: 80,
    commentId: "1",
    title: "Harmless gateway test",
    body,
    createdAt: at(1),
    htmlUrl: "https://github.com/King72315/chatgpt-and-cursor-handoff/issues/80#issuecomment-1",
    simulated: false,
    forceAssignment: false,
  }
}

function report(id, extra = "") {
  return {
    deliveryId: `issue_comment:${id}`,
    kind: "issue_comment",
    actor: "King72315",
    actorIsBot: false,
    issueNumber: 80,
    commentId: String(id),
    title: "Harmless gateway test",
    body: `## Work completed
Recorded the gateway cycle for issue #80.

## Tests and evidence
node --test gateway/test/protocol.test.mjs

## Blockers
None

## Changes made
gateway/protocol.mjs

## Deployment status
Not deployed

## Owner decision required
No

## Project repository
${PROJECT}
${extra}`,
    createdAt: at(id),
    htmlUrl: `https://github.com/King72315/chatgpt-and-cursor-handoff/issues/80#issuecomment-${id}`,
    simulated: false,
    forceAssignment: false,
  }
}

function followUp(id, text) {
  return {
    deliveryId: `issue_comment:${id}`,
    kind: "issue_comment",
    actor: "King72315",
    actorIsBot: false,
    issueNumber: 80,
    commentId: String(id),
    title: "Harmless gateway test",
    body: `## Follow-up\n${text}`,
    createdAt: at(id),
    htmlUrl: `https://github.com/King72315/chatgpt-and-cursor-handoff/issues/80#issuecomment-${id}`,
    simulated: false,
    forceAssignment: false,
  }
}

function openCycle() {
  const applied = applyEvent(emptyLedger(), assignment())
  assert.equal(applied.result.reason, "assigned")
  return applied.ledger
}

test("1. an approved assignment is recorded once and does not echo the trigger", () => {
  const applied = applyEvent(emptyLedger(), assignment())
  const issue = applied.ledger.issues["80"]
  assert.equal(issue.state, "ASSIGNED")
  assert.deepEqual(issue.history.map((item) => item.to), ["AUTHORIZED", "ASSIGNED"])
  assert.equal(issue.projectRepository, PROJECT)
  assert.equal(issue.executionTrigger, "issue_comment:1")
  assert.equal(applied.result.outbound.length, 1)
  assert.equal(containsAssignmentKeyword(applied.result.outbound[0].body), false)
  assert.match(applied.result.outbound[0].body, /Gateway state: ASSIGNED/)
})

test("2-4. a report is captured and a review packet is published", () => {
  const applied = applyEvent(openCycle(), report(2))
  const issue = applied.ledger.issues["80"]
  assert.equal(applied.result.reason, "reviewed")
  assert.equal(issue.reports.length, 1)
  assert.equal(issue.reviews.length, 1)
  assert.equal(issue.state, "REVIEWED")
  assert.match(applied.result.outbound[0].body, /## RiRi review packet/)
  assert.match(applied.result.outbound[0].body, /Project repository: King72315\/chatgpt-and-cursor-handoff/)
  assert.match(applied.result.outbound[0].body, /node --test gateway\/test\/protocol\.test\.mjs/)
  assert.equal(containsAssignmentKeyword(applied.result.outbound[0].body), false)
  assert.equal(issue.history.some((item) => item.to === "REPORT_RECEIVED"), true)
  assert.equal(issue.history.some((item) => item.to === "REVIEWED"), true)
})

test("5. one in-scope follow-up is routed on the same issue", () => {
  const reviewed = applyEvent(openCycle(), report(2)).ledger
  const applied = applyEvent(reviewed, followUp(3, "Please confirm the test note. Stay inside the communication test."))
  const issue = applied.ledger.issues["80"]
  assert.equal(applied.result.reason, "follow-up")
  assert.equal(issue.followUpCount, 1)
  assert.equal(issue.state, "ASSIGNED")
  assert.match(applied.result.outbound[0].body, /Mariah follow-up 1 of 2/)
  assert.equal(containsAssignmentKeyword(applied.result.outbound[0].body), false)
})

test("6. the same GitHub event does not launch a second cycle", () => {
  const first = applyEvent(emptyLedger(), assignment())
  const second = applyEvent(first.ledger, assignment())
  assert.equal(second.result.reason, "duplicate-delivery")
  assert.equal(second.result.duplicate, true)
  assert.equal(second.result.outbound.length, 0)
  assert.equal(second.ledger.issues["80"].state, "ASSIGNED")
  assert.equal(second.ledger.issues["80"].history.length, first.ledger.issues["80"].history.length)

  const extra = applyEvent(first.ledger, { ...assignment(), deliveryId: "issue_comment:9", commentId: "9", createdAt: at(9) })
  assert.equal(extra.result.reason, "duplicate-trigger")
  assert.equal(extra.ledger.issues["80"].state, "ASSIGNED")
  assert.equal(extra.ledger.issues["80"].generation || 1, 1)
  assert.equal(containsAssignmentKeyword(extra.result.outbound[0].body), false)
})

test("7. the third follow-up stops for the owner", () => {
  let ledger = applyEvent(openCycle(), report(2)).ledger
  ledger = applyEvent(ledger, followUp(3, "First in-scope note.")).ledger
  ledger = applyEvent(ledger, followUp(4, "Second in-scope note.")).ledger
  const third = applyEvent(ledger, followUp(5, "Third note, still inside the communication test."))
  assert.equal(third.ledger.issues["80"].followUpCount, 2)
  assert.equal(third.result.reason, "follow-up-limit")
  assert.equal(third.ledger.issues["80"].state, "AWAITING_OWNER_APPROVAL")
  assert.match(third.result.outbound[0].body, /Owner approval required/)
})

test("8. a deployment request outside the approved scope stops", () => {
  const reviewed = applyEvent(openCycle(), report(2)).ledger
  const applied = applyEvent(reviewed, followUp(3, "Please deploy this gateway to production."))
  assert.equal(applied.result.reason, "awaiting-owner")
  assert.equal(applied.ledger.issues["80"].followUpCount, 0)
  assert.equal(applied.ledger.issues["80"].state, "AWAITING_OWNER_APPROVAL")
  assert.match(applied.result.outbound[0].body, /deploy/)
})

test("a deployment named in the original scope is not a new approval", () => {
  const scoped = assignment("riri-assign\n\nKing authorizes deployment of the tested gateway record. Do not spend money.")
  const opened = applyEvent(emptyLedger(), scoped)
  const reviewed = applyEvent(opened.ledger, report(2)).ledger
  const applied = applyEvent(reviewed, followUp(3, "Please deploy the tested gateway record."))
  assert.equal(applied.result.reason, "follow-up")
  assert.equal(applied.ledger.issues["80"].state, "ASSIGNED")
})

test("9. hourly recovery applies a missed report once", () => {
  const ledger = openCycle()
  const missed = report(2)
  const first = recoverEvents(ledger, [missed])
  assert.equal(first.results[0].reason, "reviewed")
  const second = recoverEvents(first.ledger, [missed])
  assert.equal(second.results[0].reason, "duplicate-delivery")
  assert.equal(second.results[0].outbound.length, 0)
  assert.equal(JSON.stringify(second.ledger.issues), JSON.stringify(first.ledger.issues))
})

test("10. the issue record keeps the trigger, report, review, and follow-up", () => {
  let ledger = applyEvent(openCycle(), report(2)).ledger
  ledger = applyEvent(ledger, followUp(3, "Please confirm the record is complete.")).ledger
  const issue = ledger.issues["80"]
  assert.equal(issue.executionTrigger, "issue_comment:1")
  assert.equal(issue.reports.length, 1)
  assert.equal(issue.reviews.length, 1)
  assert.equal(issue.followUpCount, 1)
  assert.equal(issue.history.some((item) => item.note === "review packet published"), true)
  assert.equal(issue.history.some((item) => item.note === "in-scope follow-up 1 routed"), true)
})

test("a simulated assignment is labeled and does not require the trigger keyword", () => {
  const applied = applySimulatedAssignment(emptyLedger(), {
    issueNumber: 81,
    createdAt: at(1),
    scope: SCOPE,
    projectRepository: PROJECT,
  })
  assert.equal(applied.ledger.issues["81"].simulatedAssignment, true)
  assert.equal(applied.ledger.issues["81"].state, "ASSIGNED")
  assert.match(applied.result.outbound[0].body, /SIMULATED/)
  assert.equal(containsAssignmentKeyword(applied.result.outbound[0].body), false)
})

test("a bot comment cannot open an assignment", () => {
  const applied = applyEvent(emptyLedger(), { ...assignment(), actor: "github-actions[bot]", actorIsBot: true })
  assert.equal(applied.result.reason, "bot-comment")
  assert.equal(applied.ledger.issues["80"], undefined)
})

test("a completion pull request from the cloud agent becomes the review packet", () => {
  const opened = applyEvent(emptyLedger(), assignment())
  const applied = applyEvent(opened.ledger, {
    deliveryId: "pull_request:90:opened",
    kind: "pull_request",
    actor: "cursor[bot]",
    actorIsBot: true,
    issueNumber: 80,
    commentId: null,
    pullRequestNumber: 90,
    title: "Issue 80: completion report",
    body: report(2).body,
    createdAt: at(8),
    htmlUrl: "https://github.com/King72315/chatgpt-and-cursor-handoff/pull/90",
    simulated: false,
    forceAssignment: false,
  })
  assert.equal(applied.result.reason, "reviewed")
  assert.equal(applied.ledger.issues["80"].agentRuns.some((run) => run.role === "report"), true)
})

test("a missed completion pull request can open the review without a stored assignment", () => {
  const normalized = normalizeGithubPullRequest({
    pull_request: {
      number: 91,
      title: "Issue 81: completion report",
      body: "Source issue: #81\n\n## Work completed\nCloud report only.\n\n## Blockers\nNone\n\n## Owner decision required\nNo",
      created_at: at(9),
      html_url: "https://github.com/King72315/chatgpt-and-cursor-handoff/pull/91",
      user: { login: "cursor[bot]", type: "Bot" },
    },
  })
  const applied = applyEvent(emptyLedger(), normalized)
  assert.equal(normalized.issueNumber, 81)
  assert.equal(applied.ledger.issues["81"].state, "REVIEWED")
})

test("github issue comments on pull requests are not a second channel", () => {
  const normalized = normalizeGithubIssueComment({
    issue: { number: 90, pull_request: { url: "https://api.github.com/pulls/90" } },
    comment: { id: 5, body: "riri-assign", user: { login: "King72315", type: "User" }, created_at: at(5) },
  })
  assert.equal(normalized, null)
})

test("a blocker report stays blocked and still publishes the packet", () => {
  const blocked = report(2).body.replace("## Blockers\nNone", "## Blockers\nLocal source is not mounted.")
  const applied = applyEvent(openCycle(), { ...report(2), body: blocked })
  assert.equal(applied.result.reason, "blocked")
  assert.equal(applied.ledger.issues["80"].state, "BLOCKED")
  assert.match(applied.result.outbound[0].body, /RiRi review packet/)
})

test("an owner decision in the report waits instead of routing more work", () => {
  const asking = report(2).body.replace("## Owner decision required\nNo", "## Owner decision required\nYes. Choose the production window.")
  const applied = applyEvent(openCycle(), { ...report(2), body: asking })
  assert.equal(applied.result.reason, "awaiting-owner")
  assert.equal(applied.ledger.issues["80"].state, "AWAITING_OWNER_APPROVAL")
})

test("a fresh authorization after the limit starts a new generation", () => {
  let ledger = applyEvent(openCycle(), report(2)).ledger
  ledger = applyEvent(ledger, followUp(3, "First in-scope note.")).ledger
  ledger = applyEvent(ledger, followUp(4, "Second in-scope note.")).ledger
  ledger = applyEvent(ledger, followUp(5, "Third note.")).ledger
  const fresh = applyEvent(ledger, { ...assignment(), deliveryId: "issue_comment:10", commentId: "10", createdAt: at(10) })
  assert.equal(fresh.result.reason, "fresh-authorization")
  assert.equal(fresh.ledger.issues["80"].generation, 2)
  assert.equal(fresh.ledger.issues["80"].followUpCount, 0)
  assert.equal(fresh.ledger.issues["80"].state, "ASSIGNED")
  assert.equal(fresh.ledger.issues["80"].previousCycles.length, 1)
})
