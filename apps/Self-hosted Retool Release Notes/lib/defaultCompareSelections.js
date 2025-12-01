const releases = {{ stableData.value }}

const latestRelease = Object.keys(releases)[0];
const previousRelease = Object.keys(releases)[1];

const latestReleasePatch = releases[latestRelease].versions[0].patch

const previousReleasePatch = releases[previousRelease].versions[0].patch

const latestReleaseVersion = `${latestRelease}.${latestReleasePatch}`

const previousReleaseVersion = `${previousRelease}.${previousReleasePatch}`

const defaultSelections = { latest: latestReleaseVersion, previous: previousReleaseVersion }
return defaultSelections