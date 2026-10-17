/**
 * RiRi–Mariah handoff gateway.
 *
 * The saved Cursor automation remains the only paid pickup: a new comment
 * from King72315 that contains the assignment keyword. This module records
 * the cycle, publishes RiRi's review packet, and routes at most two in-scope
 * follow-ups. It never emits that keyword, so it cannot start another agent.
 */

export const FOLLOW_UP_LIMIT = 2
export const ASSIGNMENT_KEYWORD = "riri-assign"
export const HANDOFF_REPOSITORY = "King72315/chatgpt-and-cursor-handoff"

export const STATES = [
  "AUTHORIZED",
  "ASSIGNED",
  "ACKNOWLEDGED",
  "WORKING",
  "REPORT_RECEIVED",
  "REVIEWED",
  "COMPLETED",
  "BLOCKED",
  "AWAITING_OWNER_APPROVAL",
  "FAILED",
]

const RISKS = [
  { id: "deploy", pattern: /\bdeploy(?:ment|ing)?\b/i },
  { id: "destructive", pattern: /\b(destroy|wipe|drop database|delete production|force-push|force push)\b/i },
  { id: "billing", pattern: /\b(billing|on-demand spending|subscription|spend money|spending)\b/i },
  { id: "scope", pattern: /\b(expand(?:ed)? scope|new scope|different project|unrelated repository)\b/i },
]

const RANK = {
  AUTHORIZED: 1,
  ASSIGNED: 2,
  ACKNOWLEDGED: 3,
  WORKING: 4,
  REPORT_RECEIVED: 5,
  REVIEWED: 6,
  BLOCKED: 6,
  AWAITING_OWNER_APPROVAL: 7,
  COMPLETED: 8,
  FAILED: 8,
}

export function emptyLedger() {
  return {
    version: 1,
    activatedAt: null,
    deliveries: {},
    issues: {},
  }
}

export function containsAssignmentKeyword(text) {
  return new RegExp(`\\b${ASSIGNMENT_KEYWORD}\\b`, "i").test(String(text || ""))
}

export function sanitizeOutbound(text) {
  return String(text || "").replace(new RegExp(`\\b${ASSIGNMENT_KEYWORD}\\b`, "gi"), "[assignment keyword]")
}

export function higherRiskIds(text) {
  const source = String(text || "")
  return RISKS.filter((risk) => risk.pattern.test(source)).map((risk) => risk.id)
}

export function findProjectRepository(text, explicit) {
  if (explicit) return explicit
  const labeled = /(?:actual application repository|project repository|application repository)\s*[:#-]?\s*`?(King72315\/[A-Za-z0-9_.-]+)`?/i.exec(text || "")
  if (labeled) return labeled[1].replace(/[.,;:)]+$/g, "")
  const matches = [...String(text || "").matchAll(/King72315\/([A-Za-z0-9_.-]+)/g)]
    .map((match) => `King72315/${match[1]}`.replace(/[.,;:)]+$/g, ""))
  return matches.find((repo) => repo !== HANDOFF_REPOSITORY) || matches[0] || null
}

export function parseReport(body) {
  const sections = {}
  let current = null
  const headings = {
    "work completed": "workCompleted",
    "tests and evidence": "tests",
    blockers: "blockers",
    "changes made": "changes",
    "deployment status": "deployment",
    "owner decision required": "ownerDecision",
    "project repository": "projectRepository",
    "assigned issue": "assignedIssue",
  }
  for (const line of String(body || "").split(/\r?\n/)) {
    const heading = /^#{1,3}\s+(.+?)\s*$/.exec(line)
    if (heading) {
      current = headings[heading[1].trim().toLowerCase()] || null
      if (current && sections[current] == null) sections[current] = ""
      continue
    }
    if (current) sections[current] += `${sections[current] ? "\n" : ""}${line}`
  }
  for (const key of Object.keys(sections)) sections[key] = sections[key].trim()
  return sections
}

export function normalizeGithubIssueComment(payload) {
  if (!payload?.comment || !payload?.issue || payload.issue.pull_request) return null
  return {
    deliveryId: `issue_comment:${payload.comment.id}`,
    kind: "issue_comment",
    actor: payload.comment.user?.login || "unknown",
    actorIsBot: isBot(payload.comment.user),
    issueNumber: payload.issue.number,
    commentId: String(payload.comment.id),
    title: payload.issue.title || "",
    body: payload.comment.body || "",
    createdAt: payload.comment.created_at,
    htmlUrl: payload.comment.html_url || "",
    simulated: false,
    forceAssignment: false,
  }
}

export function normalizeGithubPullRequest(payload) {
  const pull = payload?.pull_request
  if (!pull) return null
  const issueNumber = issueNumberFromText(pull.title, pull.body)
  return {
    deliveryId: `pull_request:${pull.number}:opened`,
    kind: "pull_request",
    actor: pull.user?.login || "unknown",
    actorIsBot: isBot(pull.user),
    issueNumber,
    commentId: null,
    pullRequestNumber: pull.number,
    title: pull.title || "",
    body: pull.body || "",
    createdAt: pull.created_at,
    htmlUrl: pull.html_url || "",
    simulated: false,
    forceAssignment: false,
  }
}

export function applySimulatedAssignment(ledger, input) {
  return applyEvent(ledger, {
    deliveryId: input.deliveryId || `simulated-assignment:${input.issueNumber}`,
    kind: "issue_comment",
    actor: "King72315",
    actorIsBot: false,
    issueNumber: Number(input.issueNumber),
    commentId: input.deliveryId || `simulated-assignment:${input.issueNumber}`,
    title: input.title || "",
    body: input.scope || "",
    createdAt: input.createdAt,
    htmlUrl: input.htmlUrl || "",
    simulated: true,
    forceAssignment: true,
    projectRepository: input.projectRepository || null,
    allowBeforeActivation: true,
  })
}

export function recoverEvents(ledger, events) {
  const ordered = [...events].sort(compareEvents)
  const results = []
  let current = ledger
  for (const event of ordered) {
    const applied = applyEvent(current, event)
    current = applied.ledger
    results.push(applied.result)
  }
  return { ledger: current, results }
}

export function applyEvent(ledger, event) {
  const next = clone(ledger)
  const result = {
    ignored: true,
    reason: "unhandled",
    duplicate: false,
    issueNumber: event.issueNumber ?? null,
    from: null,
    to: null,
    outbound: [],
    simulated: Boolean(event.simulated),
  }

  if (!event?.deliveryId) {
    result.reason = "missing-delivery"
    return { ledger: next, result }
  }
  if (next.deliveries[event.deliveryId]) {
    result.reason = "duplicate-delivery"
    result.duplicate = true
    result.issueNumber = next.deliveries[event.deliveryId].issueNumber ?? result.issueNumber
    result.to = result.issueNumber ? next.issues[String(result.issueNumber)]?.state ?? null : null
    return { ledger: next, result }
  }
  if (isGatewayMessage(event.body)) {
    remember(next, event, "gateway-message")
    result.reason = "gateway-message"
    return { ledger: next, result }
  }
  if (event.kind === "issue_comment" && event.actorIsBot) {
    remember(next, event, "bot-comment")
    result.reason = "bot-comment"
    return { ledger: next, result }
  }
  if (!event.allowBeforeActivation && next.activatedAt && event.createdAt && event.createdAt < next.activatedAt) {
    remember(next, event, "before-activation")
    result.reason = "before-activation"
    return { ledger: next, result }
  }
  if (!next.activatedAt) next.activatedAt = event.createdAt || null

  const key = event.issueNumber == null ? null : String(event.issueNumber)
  const record = key ? next.issues[key] : null

  if (event.forceAssignment || containsAssignmentKeyword(event.body)) {
    openOrRejectAssignment(next, result, event)
    return { ledger: next, result }
  }

  if (!record) {
    if (event.kind === "pull_request" && isCompletion(event)) {
      const created = ensureRecord(next, event)
      receiveReport(next, result, created, event)
      return { ledger: next, result }
    }
    result.reason = "not-a-cycle-event"
    return { ledger: next, result }
  }

  result.from = record.state
  if (isClose(event.body) && event.actor === "King72315") {
    move(record, "COMPLETED", event, "owner accepted the review")
    result.ignored = false
    result.reason = "completed"
    result.to = record.state
    result.outbound.push(comment(record, event, completionNotice(record, event)))
    remember(next, event, result.reason)
    return { ledger: next, result }
  }

  const risks = unauthorizedRisks(event.body, record.approvedScope)
  if (risks.length && !isReport(event)) {
    if (record.state !== "AWAITING_OWNER_APPROVAL") {
      record.ownerDecisionRequired = true
      move(record, "AWAITING_OWNER_APPROVAL", event, `higher-risk request: ${risks.join(", ")}`)
      result.outbound.push(comment(record, event, stopNotice(record, event, `The comment asks for ${risks.join(", ")} outside the approved scope.`)))
    } else {
      record.history.push(entry(record, record.state, event, `higher-risk request while waiting: ${risks.join(", ")}`))
    }
    result.ignored = false
    result.reason = "awaiting-owner"
    result.to = record.state
    remember(next, event, result.reason)
    return { ledger: next, result }
  }

  if (isAcknowledgement(event) && RANK[record.state] < RANK.ACKNOWLEDGED) {
    move(record, "ACKNOWLEDGED", event, "pickup acknowledged")
    record.agentRuns.push(runOf(event, "acknowledgment"))
    result.ignored = false
    result.reason = "acknowledged"
    result.to = record.state
    result.outbound.push(comment(record, event, stateNotice(record, event, "Gateway acknowledgment", "Mariah's pickup was captured.")))
    remember(next, event, result.reason)
    return { ledger: next, result }
  }

  if (isProgress(event.body) && RANK[record.state] < RANK.WORKING) {
    move(record, "WORKING", event, "progress reported")
    result.ignored = false
    result.reason = "working"
    result.to = record.state
    result.outbound.push(comment(record, event, stateNotice(record, event, "Gateway progress", "Work is in progress inside the approved scope.")))
    remember(next, event, result.reason)
    return { ledger: next, result }
  }

  if (isReport(event)) {
    receiveReport(next, result, record, event)
    return { ledger: next, result }
  }

  if (isFollowUp(event.body)) {
    routeFollowUp(next, result, record, event)
    return { ledger: next, result }
  }

  result.reason = "not-a-cycle-event"
  result.from = record.state
  result.to = record.state
  return { ledger: next, result }
}

function openOrRejectAssignment(ledger, result, event) {
  const record = event.issueNumber == null ? null : ledger.issues[String(event.issueNumber)]
  if (!record) {
    const created = ensureRecord(ledger, event)
    created.simulatedAssignment = Boolean(event.simulated)
    created.approvedScope = event.body || ""
    created.projectRepository = findProjectRepository(`${event.title}\n${event.body}`, event.projectRepository)
    created.authorizationCommentId = event.commentId || event.deliveryId
    created.executionTrigger = event.deliveryId
    move(created, "AUTHORIZED", event, event.simulated ? "simulated authorization" : "authorization comment")
    move(created, "ASSIGNED", event, "assignment recorded")
    result.ignored = false
    result.reason = "assigned"
    result.from = null
    result.to = "ASSIGNED"
    result.outbound.push(comment(created, event, assignmentNotice(created, event)))
    remember(ledger, event, result.reason)
    return
  }

  result.from = record.state
  if (!record.authorizationCommentId) {
    record.authorizationCommentId = event.commentId || event.deliveryId
    record.executionTrigger = record.executionTrigger || event.deliveryId
    if (!record.approvedScope) record.approvedScope = event.body || ""
    if (!record.projectRepository) record.projectRepository = findProjectRepository(`${event.title}\n${event.body}`, event.projectRepository)
    record.history.push(entry(record, record.state, event, "authorization attached to the open cycle"))
    result.ignored = false
    result.reason = "authorization-attached"
    result.to = record.state
    remember(ledger, event, result.reason)
    return
  }

  if (record.state === "AWAITING_OWNER_APPROVAL" || record.state === "COMPLETED" || record.state === "FAILED") {
    record.previousCycles = record.previousCycles || []
    record.previousCycles.push({
      generation: record.generation || 1,
      state: record.state,
      followUpCount: record.followUpCount,
      authorizationCommentId: record.authorizationCommentId,
      executionTrigger: record.executionTrigger,
      history: record.history,
    })
    record.generation = (record.generation || 1) + 1
    record.followUpCount = 0
    record.ownerDecisionRequired = false
    record.simulatedAssignment = Boolean(event.simulated)
    record.approvedScope = event.body || ""
    record.projectRepository = findProjectRepository(`${event.title}\n${event.body}`, event.projectRepository || record.projectRepository)
    record.authorizationCommentId = event.commentId || event.deliveryId
    record.executionTrigger = event.deliveryId
    record.history = []
    move(record, "AUTHORIZED", event, "fresh owner authorization")
    move(record, "ASSIGNED", event, "new generation assigned")
    result.ignored = false
    result.reason = "fresh-authorization"
    result.to = "ASSIGNED"
    result.outbound.push(comment(record, event, assignmentNotice(createdFresh(record), event)))
    remember(ledger, event, result.reason)
    return
  }

  record.duplicateTriggerIds = record.duplicateTriggerIds || []
  record.duplicateTriggerIds.push(event.deliveryId)
  record.history.push(entry(record, record.state, event, "duplicate assignment trigger ignored"))
  result.ignored = false
  result.duplicate = true
  result.reason = "duplicate-trigger"
  result.to = record.state
  result.outbound.push(comment(record, event, duplicateNotice(record, event)))
  remember(ledger, event, result.reason)
}

function receiveReport(ledger, result, record, event) {
  const sections = parseReport(event.body)
  result.from = record.state
  if (!record.projectRepository) {
    record.projectRepository = findProjectRepository(`${event.title}\n${event.body}\n${sections.projectRepository || ""}`, event.projectRepository)
  }
  const decision = ownerDecisionRequested(sections.ownerDecision, event.body)
  record.ownerDecisionRequired = decision
  record.reports.push({
    deliveryId: event.deliveryId,
    url: event.htmlUrl || "",
    actor: event.actor,
    sections,
    at: event.createdAt || null,
  })
  record.agentRuns.push(runOf(event, "report"))
  move(record, "REPORT_RECEIVED", event, "report captured")
  let reason = "reviewed"
  if (isFailed(event.body)) {
    move(record, "FAILED", event, "report marked the task failed")
    reason = "failed"
  } else if (decision) {
    move(record, "AWAITING_OWNER_APPROVAL", event, "report requested an owner decision")
    reason = "awaiting-owner"
  } else if (hasBlocker(sections, event.body)) {
    move(record, "BLOCKED", event, "report included a blocker")
    reason = "blocked"
  } else {
    move(record, "REVIEWED", event, "review packet published")
  }
  record.reviews.push({ deliveryId: event.deliveryId, at: event.createdAt || null, state: record.state })
  result.ignored = false
  result.reason = reason
  result.to = record.state
  result.outbound.push(comment(record, event, reviewPacket(record, sections, event)))
  remember(ledger, event, reason)
}

function routeFollowUp(ledger, result, record, event) {
  result.from = record.state
  if (record.state === "AWAITING_OWNER_APPROVAL" || record.state === "COMPLETED" || record.state === "FAILED") {
    record.history.push(entry(record, record.state, event, "follow-up not routed"))
    result.ignored = false
    result.reason = record.state === "AWAITING_OWNER_APPROVAL" ? "awaiting-owner" : "closed"
    result.to = record.state
    remember(ledger, event, result.reason)
    return
  }
  if (record.reports.length === 0) {
    record.history.push(entry(record, record.state, event, "follow-up parked until a report is reviewed"))
    result.ignored = false
    result.reason = "follow-up-parked"
    result.to = record.state
    result.outbound.push(comment(record, event, stateNotice(record, event, "Follow-up parked", "This follow-up was not counted. The gateway routes it after a report is available for review.")))
    remember(ledger, event, result.reason)
    return
  }
  if (record.followUpCount >= FOLLOW_UP_LIMIT) {
    record.ownerDecisionRequired = true
    move(record, "AWAITING_OWNER_APPROVAL", event, "follow-up limit reached")
    result.ignored = false
    result.reason = "follow-up-limit"
    result.to = record.state
    result.outbound.push(comment(record, event, stopNotice(record, event, `This authorization already used ${FOLLOW_UP_LIMIT} follow-ups. Another follow-up needs a fresh owner authorization.`)))
    remember(ledger, event, result.reason)
    return
  }
  record.followUpCount += 1
  move(record, "ASSIGNED", event, `in-scope follow-up ${record.followUpCount} routed`)
  result.ignored = false
  result.reason = "follow-up"
  result.to = record.state
  result.outbound.push(comment(record, event, followUpNotice(record, event)))
  remember(ledger, event, result.reason)
}

function ensureRecord(ledger, event) {
  const key = String(event.issueNumber)
  if (!ledger.issues[key]) {
    ledger.issues[key] = {
      issueNumber: event.issueNumber,
      generation: 1,
      state: null,
      simulatedAssignment: false,
      projectRepository: null,
      approvedScope: "",
      authorizationCommentId: null,
      executionTrigger: null,
      followUpCount: 0,
      followUpLimit: FOLLOW_UP_LIMIT,
      ownerDecisionRequired: false,
      duplicateTriggerIds: [],
      agentRuns: [],
      reports: [],
      reviews: [],
      previousCycles: [],
      history: [],
      updatedAt: event.createdAt || null,
    }
  }
  return ledger.issues[key]
}

function move(record, to, event, note) {
  record.history.push(entry(record, to, event, note))
  record.state = to
  record.updatedAt = event.createdAt || record.updatedAt
}

function entry(record, to, event, note) {
  return {
    at: event.createdAt || null,
    deliveryId: event.deliveryId,
    from: record.state,
    to,
    actor: event.actor,
    kind: event.kind,
    note,
  }
}

function remember(ledger, event, reason) {
  ledger.deliveries[event.deliveryId] = {
    issueNumber: event.issueNumber ?? null,
    reason,
    at: event.createdAt || null,
  }
}

function comment(record, event, body) {
  const safe = sanitizeOutbound(body)
  if (containsAssignmentKeyword(safe)) {
    throw new Error("gateway outbound still contains the assignment keyword")
  }
  return { issueNumber: record.issueNumber, deliveryId: event.deliveryId, body: safe }
}

function marker(payload) {
  return `<!-- gateway:${JSON.stringify(payload)} -->`
}

function assignmentNotice(record, event) {
  const simulated = record.simulatedAssignment
    ? "SIMULATED. The gateway recorded this assignment. It did not start a cloud agent.\n\n"
    : ""
  return `${simulated}## Gateway assignment

Assigned issue: #${record.issueNumber}
Project repository: ${record.projectRepository || "not stated"}
Gateway state: ASSIGNED
Follow-ups used: ${record.followUpCount} of ${record.followUpLimit}
Execution trigger: ${record.executionTrigger || "not recorded"}

The approved scope covers investigation, implementation, tests, and in-scope answers. A separate owner decision is required for a deployment, destructive action, spending or billing change, or expanded scope that the original authorization did not allow.

${marker({ v: 1, issue: record.issueNumber, state: "ASSIGNED", delivery: event.deliveryId, kind: "assignment", simulated: Boolean(record.simulatedAssignment) })}`
}

function reviewPacket(record, sections, event) {
  const simulated = record.simulatedAssignment
    ? "SIMULATED assignment. The gateway did not start a cloud agent for that assignment.\n\n"
    : ""
  return `${simulated}## RiRi review packet

Assigned issue: #${record.issueNumber}
Project repository: ${record.projectRepository || "not stated"}
Gateway state: ${record.state}
Follow-ups used: ${record.followUpCount} of ${record.followUpLimit}
Execution trigger: ${record.executionTrigger || "not recorded"}
Generation: ${record.generation || 1}

### Work completed
${clip(sections.workCompleted) || "not stated"}

### Tests and evidence
${clip(sections.tests) || "not stated"}

### Blockers
${clip(sections.blockers) || "not stated"}

### Changes made
${clip(sections.changes) || "not stated"}

### Deployment status
${clip(sections.deployment) || "not stated"}

### Owner decision required
${record.ownerDecisionRequired ? "yes" : "no"}

Source: ${event.htmlUrl || "not stated"}

${marker({ v: 1, issue: record.issueNumber, state: record.state, delivery: event.deliveryId, kind: "review", simulated: Boolean(record.simulatedAssignment) })}`
}

function followUpNotice(record, event) {
  return `## Mariah follow-up ${record.followUpCount} of ${record.followUpLimit}

Assigned issue: #${record.issueNumber}
Project repository: ${record.projectRepository || "not stated"}
Gateway state: ASSIGNED

This is an in-scope continuation of the original authorization. It does not start a cloud agent and it does not use a new assignment trigger.

### Request
${clip(event.body)}

${marker({ v: 1, issue: record.issueNumber, state: "ASSIGNED", delivery: event.deliveryId, kind: "follow-up", followUps: record.followUpCount })}`
}

function stopNotice(record, event, reason) {
  return `## Owner approval required

Assigned issue: #${record.issueNumber}
Project repository: ${record.projectRepository || "not stated"}
Gateway state: AWAITING_OWNER_APPROVAL
Follow-ups used: ${record.followUpCount} of ${record.followUpLimit}

${reason}

The gateway did not route this request and did not start an agent.

${marker({ v: 1, issue: record.issueNumber, state: "AWAITING_OWNER_APPROVAL", delivery: event.deliveryId, kind: "stop" })}`
}

function duplicateNotice(record, event) {
  return `## Duplicate assignment ignored

Assigned issue: #${record.issueNumber}
Gateway state: ${record.state}
Follow-ups used: ${record.followUpCount} of ${record.followUpLimit}

An assignment is already open. This event did not create another one and did not start an agent.

${marker({ v: 1, issue: record.issueNumber, state: record.state, delivery: event.deliveryId, kind: "duplicate" })}`
}

function stateNotice(record, event, title, sentence) {
  return `## ${title}

Assigned issue: #${record.issueNumber}
Project repository: ${record.projectRepository || "not stated"}
Gateway state: ${record.state}

${sentence}

${marker({ v: 1, issue: record.issueNumber, state: record.state, delivery: event.deliveryId, kind: "state" })}`
}

function completionNotice(record, event) {
  return `## Gateway completed

Assigned issue: #${record.issueNumber}
Project repository: ${record.projectRepository || "not stated"}
Gateway state: COMPLETED
Follow-ups used: ${record.followUpCount} of ${record.followUpLimit}

${marker({ v: 1, issue: record.issueNumber, state: "COMPLETED", delivery: event.deliveryId, kind: "completed" })}`
}

function createdFresh(record) {
  return record
}

function unauthorizedRisks(body, approvedScope) {
  const allowed = new Set(affirmedRiskIds(approvedScope))
  return affirmedRiskIds(body).filter((id) => !allowed.has(id))
}

function affirmedRiskIds(text) {
  const sentences = String(text || "").split(/[\n.]/)
  return RISKS.filter((risk) => sentences.some((sentence) => risk.pattern.test(sentence) && !isNegated(sentence))).map((risk) => risk.id)
}

function isNegated(sentence) {
  return /\b(do not|don't|dont|cannot|can't|cant|never|without|must not|not authorized|not|no)\b/i.test(sentence)
}

function ownerDecisionRequested(section, body) {
  const text = String(section || "").trim()
  if (/^(yes|required|true)\b/i.test(text)) return true
  if (/^(no|false|none)\b/i.test(text)) return false
  return /\banother owner decision is required\b/i.test(body || "") && !/\bno owner decision\b/i.test(body || "")
}

function hasBlocker(sections, body) {
  if (/\bState:\s*BLOCKED\b/.test(body || "")) return true
  const blockers = String(sections.blockers || "").trim()
  if (!blockers) return false
  return !/^(none|no|no blockers?)\b/i.test(blockers)
}

function isReport(event) {
  return isCompletion(event) || /^## Work completed\b/im.test(event.body || "")
}

function isCompletion(event) {
  return /completion report/i.test(event.title || "") || /^## Work completed\b/im.test(event.body || "")
}

function isAcknowledgement(event) {
  return /acknowledgment/i.test(event.title || "") || /^automatic handoff pickup confirmed\b/i.test(event.body || "") || /^assignment received\b/i.test(event.body || "")
}

function isProgress(body) {
  return /^## Progress\b/im.test(body || "")
}

function isFollowUp(body) {
  return /^## Follow-up\b/im.test(body || "") || /\bin-scope follow-up\b/i.test(body || "")
}

function isClose(body) {
  return /^## Review complete\b/im.test(body || "") || /^review complete\b/im.test(body || "")
}

function isFailed(body) {
  return /^## Failed\b/im.test(body || "") || /\bState:\s*FAILED\b/.test(body || "")
}

function isGatewayMessage(body) {
  return /<!-- gateway:/.test(body || "")
}

function isBot(user) {
  if (!user) return false
  return user.type === "Bot" || /\[bot\]$/i.test(user.login || "")
}

function issueNumberFromText(title, body) {
  const fromTitle = /Issue\s+#?(\d+)/i.exec(title || "")
  if (fromTitle) return Number(fromTitle[1])
  const fromBody = /Source issue:\s*#(\d+)/i.exec(body || "")
  return fromBody ? Number(fromBody[1]) : null
}

function runOf(event, role) {
  const agent = /cursor\.com\/agents\/(bc-[a-z0-9-]+)/i.exec(`${event.body || ""}\n${event.htmlUrl || ""}`)
  return {
    role,
    actor: event.actor,
    url: event.htmlUrl || "",
    agentId: agent ? agent[1] : null,
    deliveryId: event.deliveryId,
  }
}

function clip(text) {
  const value = String(text || "").trim()
  if (!value) return ""
  return value.length > 3000 ? `${value.slice(0, 3000)}\n\n[truncated]` : value
}

function compareEvents(a, b) {
  const time = String(a.createdAt || "").localeCompare(String(b.createdAt || ""))
  if (time) return time
  return String(a.deliveryId).localeCompare(String(b.deliveryId))
}

function clone(value) {
  return JSON.parse(JSON.stringify(value))
}
