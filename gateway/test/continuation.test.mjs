import assert from "node:assert/strict"
import test from "node:test"
import { createContinuationRun, fetchRunUsage } from "../continuation.mjs"

test("a continuation posts one run to the same cloud agent", async () => {
  const calls = []
  const fetchImpl = async (url, options) => {
    calls.push({ url, options })
    return {
      ok: true,
      status: 200,
      json: async () => ({ run: { id: "run-live", agentId: "bc-test-agent-80", status: "CREATING" } }),
    }
  }
  const run = await createContinuationRun({
    apiKey: "test-key",
    agentId: "bc-test-agent-80",
    text: "Apply the correction.",
    fetchImpl,
  })
  assert.equal(run.id, "run-live")
  assert.equal(calls.length, 1)
  assert.equal(calls[0].url, "https://api.cursor.com/v1/agents/bc-test-agent-80/runs")
  assert.equal(calls[0].options.method, "POST")
  const body = JSON.parse(calls[0].options.body)
  assert.equal(body.prompt.text, "Apply the correction.")
  assert.equal(calls[0].options.headers.Authorization.startsWith("Basic "), true)
  assert.equal(calls[0].options.headers.Authorization.includes("test-key"), false)
})

test("a rejected continuation does not return a run", async () => {
  const fetchImpl = async () => ({ ok: false, status: 401, json: async () => ({}) })
  await assert.rejects(
    () => createContinuationRun({ apiKey: "test-key", agentId: "bc-test-agent-80", text: "Again.", fetchImpl }),
    /Cursor continuation 401/,
  )
})

test("usage is read for the continuation run only", async () => {
  const fetchImpl = async (url) => {
    assert.match(url, /usage\?runId=run-live$/)
    return {
      ok: true,
      status: 200,
      json: async () => ({
        totalUsage: { inputTokens: 10, outputTokens: 10, cacheReadTokens: 0, cacheWriteTokens: 0, totalTokens: 20 },
        runs: [{ id: "run-live", usage: { inputTokens: 3, outputTokens: 4, cacheReadTokens: 0, cacheWriteTokens: 0, totalTokens: 7 } }],
      }),
    }
  }
  const usage = await fetchRunUsage({ apiKey: "test-key", agentId: "bc-test-agent-80", runId: "run-live", fetchImpl })
  assert.equal(usage.inputTokens, 3)
  assert.equal(usage.outputTokens, 4)
})
