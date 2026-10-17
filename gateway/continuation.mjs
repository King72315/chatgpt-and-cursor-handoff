/**
 * Resume one existing Cursor cloud agent.
 * POST /v1/agents/{id}/runs keeps the conversation and starts a new billed run.
 */

export async function createContinuationRun({ apiKey, agentId, text, fetchImpl = fetch }) {
  const response = await fetchImpl(`https://api.cursor.com/v1/agents/${encodeURIComponent(agentId)}/runs`, {
    method: "POST",
    headers: {
      Authorization: basic(apiKey),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: { text } }),
  })
  const body = await response.json().catch(() => ({}))
  if (!response.ok || !body.run?.id) {
    throw new Error(`Cursor continuation ${response.status}`)
  }
  return body.run
}

export async function fetchRunUsage({ apiKey, agentId, runId, fetchImpl = fetch }) {
  const response = await fetchImpl(
    `https://api.cursor.com/v1/agents/${encodeURIComponent(agentId)}/usage?runId=${encodeURIComponent(runId)}`,
    { headers: { Authorization: basic(apiKey) } },
  )
  if (!response.ok) return null
  const body = await response.json().catch(() => ({}))
  return body.runs?.find((run) => run.id === runId)?.usage || null
}

function basic(apiKey) {
  return `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`
}
