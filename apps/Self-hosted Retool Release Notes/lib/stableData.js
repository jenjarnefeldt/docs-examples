const staging = {{ stablePreview.data }}
const prod = {{ getStableData.data }}
const dataMode = {{ dataMode.value }}
const data = dataMode ? prod : staging

return data