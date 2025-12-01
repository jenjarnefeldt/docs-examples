const stableReleases = {{ stableData.value }}
const latestStableRelease = {{ getTags.data.version.filter(item => item.includes('-stable'))[0] }}
const latestMajorMinorStable = latestStableRelease.split('.')[0] + '.' + latestStableRelease.split('.')[1];
let stableAndLegacy = Object.keys(stableReleases);

stableAndLegacy.push(latestMajorMinorStable)

return stableAndLegacy