import assert from "node:assert/strict"
import test from "node:test"
import {
  applyEvent,
  applySimulatedAssignment,
  commitContinuation,
  containsAssignmentKeyword,
  emptyLedger,
  estimateContinuationCents,
  normalizeGithubIssueComment,
  normalizeGithubPullRequest,
  recoverEvents,
  settleContinuationUsage,
  CONTINUATION_RUN_RESERVE_CENTS,
  CONTINUATION_SPEND_LIMIT_CENTS,
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

function completionPullRequest(body = report(2).body) {
  return {
    deliveryId: "pull_request:90:opened",
    kind: "pull_request",
    actor: "cursor[bot]",
    actorIsBot: true,
    issueNumber: 80,
    commentId: null,
    pullRequestNumber: 90,
    title: "Issue 80: completion report",
    body: `${body}\n\nReview trigger: handoff-review\nAgent: https://cursor.com/agents/bc-test-agent-80\nA correction resumes this agent with a new billed run.`,
    createdAt: at(8),
    htmlUrl: "https://github.com/King72315/chatgpt-and-cursor-handoff/pull/90",
    simulated: false,
    forceAssignment: false,
  }
}

function correction(id, text = "Correct the note inside the approved communication test.") {
  return {
    deliveryId: `pull_request_comment:${id}`,
    kind: "pull_request_comment",
    actor: "King72315",
    actorIsBot: false,
    issueNumber: 80,
    commentId: String(id),
    pullRequestNumber: 90,
    title: "Issue 80: completion report",
    body: `## RiRi review\n\nAssigned issue: #80\n\n## Follow-up\n${text}`,
    createdAt: at(id),
    htmlUrl: `https://github.com/King72315/chatgpt-and-cursor-handoff/pull/90#issuecomment-${id}`,
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

test("2-4. an issue comment waits, and the completion pull request is the review trigger", () => {
  const commentReport = applyEvent(openCycle(), report(2))
  assert.equal(commentReport.result.reason, "report-needs-completion-pr")
  assert.equal(commentReport.ledger.issues["80"].state, "REPORT_RECEIVED")
  assert.equal(commentReport.ledger.issues["80"].reviews.length, 0)
  assert.doesNotMatch(commentReport.result.outbound[0].body, /RiRi review packet/)
  assert.match(commentReport.result.outbound[0].body, /handoff-review/)

  const opened = applyEvent(openCycle(), completionPullRequest())
  const issue = opened.ledger.issues["80"]
  assert.equal(opened.result.reason, "completion-pr")
  assert.equal(issue.state, "REPORT_RECEIVED")
  assert.equal(issue.reports.length, 1)
  assert.equal(issue.reviews.length, 0)
  assert.equal(issue.agentId, "bc-test-agent-80")
  assert.equal(issue.completionPullRequest, 90)
  assert.match(opened.result.outbound[0].body, /did not review it/)
  assert.match(opened.result.outbound[0].body, /node --test gateway\/test\/protocol\.test\.mjs/)
  assert.equal(containsAssignmentKeyword(opened.result.outbound[0].body), false)
})

test("5. one authorized correction resumes the same agent without counting until it is sent", () => {
  const ready = applyEvent(openCycle(), completionPullRequest()).ledger
  const applied = applyEvent(ready, correction(3))
  const issue = applied.ledger.issues["80"]
  assert.equal(applied.result.reason, "continuation-authorized")
  assert.equal(issue.followUpCount, 0)
  assert.equal(issue.reviews.length, 1)
  assert.equal(applied.result.continuation.agentId, "bc-test-agent-80")
  assert.equal(containsAssignmentKeyword(applied.result.continuation.prompt), false)
  assert.match(applied.result.continuation.prompt, /billed run/)
  const sent = commitContinuation(applied.ledger, 80, { ok: true, runId: "run-test-1" })
  assert.equal(sent.followUpCount, 1)
  assert.equal(sent.state, "ASSIGNED")
  assert.equal(sent.continuationSpendCents, CONTINUATION_RUN_RESERVE_CENTS)
  assert.equal(sent.continuations[0].runId, "run-test-1")
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
  let ledger = applyEvent(openCycle(), completionPullRequest()).ledger
  ledger = applyEvent(ledger, correction(3, "First in-scope note.")).ledger
  commitContinuation(ledger, 80, { ok: true, runId: "run-1" })
  ledger = applyEvent(ledger, correction(4, "Second in-scope note.")).ledger
  commitContinuation(ledger, 80, { ok: true, runId: "run-2" })
  const third = applyEvent(ledger, correction(5, "Third note, still inside the communication test."))
  assert.equal(third.ledger.issues["80"].followUpCount, 2)
  assert.equal(third.result.reason, "follow-up-limit")
  assert.equal(third.ledger.issues["80"].state, "AWAITING_OWNER_APPROVAL")
  assert.match(third.result.outbound[0].body, /Owner approval required/)
  assert.equal(third.result.continuation, undefined)
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
  const ready = applyEvent(opened.ledger, completionPullRequest()).ledger
  const applied = applyEvent(ready, followUp(3, "Please deploy the tested gateway record."))
  assert.equal(applied.result.reason, "continuation-authorized")
  assert.equal(applied.ledger.issues["80"].followUpCount, 0)
})

test("9. hourly recovery applies a missed completion pull request once", () => {
  const ledger = openCycle()
  const missed = completionPullRequest()
  const first = recoverEvents(ledger, [missed])
  assert.equal(first.results[0].reason, "completion-pr")
  const second = recoverEvents(first.ledger, [missed])
  assert.equal(second.results[0].reason, "duplicate-delivery")
  assert.equal(second.results[0].outbound.length, 0)
  assert.equal(JSON.stringify(second.ledger.issues), JSON.stringify(first.ledger.issues))
})

test("10. the issue record keeps the trigger, pull request, review, and continuation", () => {
  let ledger = applyEvent(openCycle(), completionPullRequest()).ledger
  ledger = applyEvent(ledger, correction(3, "Please confirm the record is complete.")).ledger
  commitContinuation(ledger, 80, { ok: true, runId: "run-test-1" })
  const issue = ledger.issues["80"]
  assert.equal(issue.executionTrigger, "issue_comment:1")
  assert.equal(issue.reports.length, 1)
  assert.equal(issue.reviews.length, 1)
  assert.equal(issue.followUpCount, 1)
  assert.equal(issue.history.some((item) => item.note === "completion pull request captured"), true)
  assert.equal(issue.history.some((item) => item.note === "billed continuation 1 sent"), true)
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

test("a completion pull request from the cloud agent stays waiting for review", () => {
  const opened = applyEvent(emptyLedger(), assignment())
  const applied = applyEvent(opened.ledger, completionPullRequest())
  assert.equal(applied.result.reason, "completion-pr")
  assert.equal(applied.ledger.issues["80"].state, "REPORT_RECEIVED")
  assert.equal(applied.ledger.issues["80"].agentRuns.some((run) => run.role === "report" && run.agentId === "bc-test-agent-80"), true)
})

test("a missed completion pull request can open the cycle without a stored assignment", () => {
  const normalized = normalizeGithubPullRequest({
    pull_request: {
      number: 91,
      title: "Issue 81: completion report",
      body: "Source issue: #81\n\nReview trigger: handoff-review\n\n## Work completed\nCloud report only.\n\n## Blockers\nNone\n\n## Owner decision required\nNo",
      created_at: at(9),
      html_url: "https://github.com/King72315/chatgpt-and-cursor-handoff/pull/91",
      user: { login: "cursor[bot]", type: "Bot" },
    },
  })
  const applied = applyEvent(emptyLedger(), normalized)
  assert.equal(normalized.issueNumber, 81)
  assert.equal(applied.ledger.issues["81"].state, "REPORT_RECEIVED")
  assert.equal(applied.result.reason, "completion-pr")
})

test("github issue comments on ordinary pull requests are not a second channel", () => {
  const normalized = normalizeGithubIssueComment({
    issue: { number: 90, title: "Issue 70: completion report", pull_request: { url: "https://api.github.com/pulls/90" } },
    comment: { id: 5, body: "note", user: { login: "King72315", type: "User" }, created_at: at(5) },
  })
  assert.equal(normalized, null)
})

test("a review comment on a matching completion pull request reaches the source issue", () => {
  const normalized = normalizeGithubIssueComment({
    issue: {
      number: 90,
      title: "Issue 80: completion report",
      body: "Review trigger: handoff-review",
      pull_request: { url: "https://api.github.com/pulls/90" },
    },
    comment: { id: 5, body: "## RiRi review\n\nReview complete", user: { login: "King72315", type: "User" }, created_at: at(9), html_url: "https://github.com/example/pull/90#issuecomment-5" },
  })
  assert.equal(normalized.issueNumber, 80)
  assert.equal(normalized.kind, "pull_request_comment")
  const applied = applyEvent(applyEvent(emptyLedger(), completionPullRequest()).ledger, normalized)
  assert.equal(applied.result.reason, "completed")
  assert.equal(applied.ledger.issues["80"].state, "COMPLETED")
})

test("a blocker report stays blocked and is not called a review", () => {
  const blocked = report(2).body.replace("## Blockers\nNone", "## Blockers\nLocal source is not mounted.")
  const applied = applyEvent(openCycle(), completionPullRequest(blocked))
  assert.equal(applied.result.reason, "blocked")
  assert.equal(applied.ledger.issues["80"].state, "BLOCKED")
  assert.doesNotMatch(applied.result.outbound[0].body, /RiRi review packet/)
})

test("an owner decision in the report waits instead of routing more work", () => {
  const asking = report(2).body.replace("## Owner decision required\nNo", "## Owner decision required\nYes. Choose the production window.")
  const applied = applyEvent(openCycle(), completionPullRequest(asking))
  assert.equal(applied.result.reason, "awaiting-owner")
  assert.equal(applied.ledger.issues["80"].state, "AWAITING_OWNER_APPROVAL")
})

test("a fresh authorization after the limit starts a new generation", () => {
  let ledger = applyEvent(openCycle(), completionPullRequest()).ledger
  ledger = applyEvent(ledger, correction(3, "First in-scope note.")).ledger
  commitContinuation(ledger, 80, { ok: true, runId: "run-1" })
  ledger = applyEvent(ledger, correction(4, "Second in-scope note.")).ledger
  commitContinuation(ledger, 80, { ok: true, runId: "run-2" })
  ledger = applyEvent(ledger, correction(5, "Third note.")).ledger
  const fresh = applyEvent(ledger, { ...assignment(), deliveryId: "issue_comment:10", commentId: "10", createdAt: at(10) })
  assert.equal(fresh.result.reason, "fresh-authorization")
  assert.equal(fresh.ledger.issues["80"].generation, 2)
  assert.equal(fresh.ledger.issues["80"].followUpCount, 0)
  assert.equal(fresh.ledger.issues["80"].state, "ASSIGNED")
  assert.equal(fresh.ledger.issues["80"].previousCycles.length, 1)
})

test("the estimated continuation cost stops the next run before the count is used up", () => {
  let ledger = applyEvent(openCycle(), completionPullRequest()).ledger
  ledger = applyEvent(ledger, correction(3, "First in-scope note.")).ledger
  commitContinuation(ledger, 80, { ok: true, runId: "run-1" })
  assert.equal(settleContinuationUsage(ledger, 80, "run-1", { inputTokens: 400_000, outputTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0 }), true)
  assert.equal(ledger.issues["80"].continuationSpendCents, 160)
  const second = applyEvent(ledger, correction(4, "Second in-scope note."))
  assert.equal(second.result.reason, "continuation-spend")
  assert.equal(second.ledger.issues["80"].followUpCount, 1)
  assert.equal(second.ledger.issues["80"].state, "AWAITING_OWNER_APPROVAL")
  assert.ok(ledger.issues["80"].continuationSpendCents + CONTINUATION_RUN_RESERVE_CENTS > CONTINUATION_SPEND_LIMIT_CENTS)
})

test("a correction without an agent id is not counted", () => {
  const body = report(2).body
  const opened = applyEvent(openCycle(), { ...completionPullRequest(), body: `${body}\n\nReview trigger: handoff-review` })
  const applied = applyEvent(opened.ledger, correction(3))
  assert.equal(applied.result.reason, "continuation-missing-agent")
  assert.equal(applied.ledger.issues["80"].followUpCount, 0)
  assert.equal(applied.result.continuation, undefined)
})

test("a failed continuation send does not consume a follow-up", () => {
  const ready = applyEvent(openCycle(), completionPullRequest()).ledger
  const applied = applyEvent(ready, correction(3))
  const record = commitContinuation(applied.ledger, 80, { ok: false, error: "CURSOR_API_KEY is not set" })
  assert.equal(record.followUpCount, 0)
  assert.equal(record.pendingContinuation, null)
  assert.match(record.continuationError, /CURSOR_API_KEY/)
})

test("continuation cost uses the saved fast token rates", () => {
  assert.equal(estimateContinuationCents({ inputTokens: 1_000_000, outputTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0 }), 400)
  assert.equal(estimateContinuationCents({ inputTokens: 0, outputTokens: 1_000_000, cacheReadTokens: 0, cacheWriteTokens: 0 }), 1200)
  assert.equal(estimateContinuationCents({ inputTokens: 0, outputTokens: 0, cacheReadTokens: 500_000, cacheWriteTokens: 500_000 }), 100)
  assert.equal(estimateContinuationCents({}), 0)
})
