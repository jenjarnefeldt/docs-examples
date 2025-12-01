const edgeReleases = {{ edgeData.value }}

const latestStableRelease = {{ getTags.data.version.filter(item => item.includes('-edge'))[0] }}
const latestMajorMinorStable = latestStableRelease.split('.')[0] + '.' + latestStableRelease.split('.')[1];
let stableAndLegacy = Object.keys(edgeReleases);

stableAndLegacy.push(latestMajorMinorStable)

return stableAndLegacy