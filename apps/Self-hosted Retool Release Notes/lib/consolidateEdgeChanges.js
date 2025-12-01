const patches = {{ sortBySemver.value }}
const channel = {{ channelSelect.value }}
const changeTypes = {{ changeTypes.value }}
const importantFeatures = {{ filterImportant.value }}
const changelogFeed = {{ getChangelogFeed.data.items }}
const latestVersion = {{ latestVersion.value }}
const prevVersions = {{ prevVersion.values }}
const prevVersion = {{ prevVersion.value }}
const prevVersionIndex = prevVersions.indexOf(prevVersion) - 1

const features = channel === 'stable'
  ? importantFeatures.sort(
      (a, b) =>
        changeTypes.findIndex(p => p.value === a.type) -
        changeTypes.findIndex(p => p.value === b.type)
    )
  : null;

// Determine actual first patch for the latest release
const latestVersionPrefix = latestVersion.split('.').slice(0, 2).join('.');
const releasePatches = patches.filter(p => p.version === latestVersionPrefix);
const firstPatch = releasePatches.reduce((min, curr) =>
  parseInt(curr.patch) < parseInt(min.patch) ? curr : min
).patch;

const firstPatchVersion = `${latestVersionPrefix}.${firstPatch}`;
const prevPatch = prevVersion.split('.').slice(0, 2).join('.') + '.1';
const prevPatchIndex = prevVersions.indexOf(prevPatch);
const isFirstPatchIncluded = prevVersions.indexOf(firstPatchVersion) < prevPatchIndex;

const importantEntries = channel === 'stable' &&
  features?.map(item => {
    const summary = changelogFeed.find(change => change.url === item.url)?.summary || null;
    return {
      description: item.summary || summary,
      id: md5((item.title || '') + summary),
      patch: firstPatch,
      type: item.type || null,
      version: item.release || null,
      url: item.url || null,
      summary,
      majorChange: true,
      beta: item.beta || null,
      release: `${item.release}.${firstPatch}`
    };
  }) || [];

const patchNotes = patches.map(item => ({
  title: null,
  id: md5(item.version + item.patch + item.description),
  description: item.description || null,
  patch: item.patch || null,
  type: item.type || null,
  version: item.version || null,
  url: null,
  summary: null,
  beta: null,
  majorChange: false,
  release: `${item.version}.${item.patch}`
}));

let consolidated = channel === 'stable'
  ? isFirstPatchIncluded
    ? [...importantEntries, ...patchNotes]
    : [...patchNotes]
  : patchNotes;

consolidated = consolidated.filter(item => {
  const itemIndex = prevVersions.indexOf(item.release);
  return itemIndex !== -1 && itemIndex <= prevVersionIndex;
});

return consolidated;