const staging = {{ stagingEdge.value }}
const prod = {{ getEdgeData.data }}
const dataMode = {{ dataMode.value }}
const data = dataMode ? prod : staging

return data