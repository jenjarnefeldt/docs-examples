const channel = {{ channelSelect.value }}
const edge = {{ consolidateEdgeChanges.value }}
const stable = {{ consolidateStableChanges.value }}

const data = channel === 'edge' ? edge : stable

return data