const patches = {{ sortBySemver.value }}
const channel = {{ channelSelect.value }}
const changeTypes = {{ changeTypes.value }}
const importantFeatures = {{ filterImportant.value }}
const changelogFeed = {{ getChangelogFeed.data.items }}
const latestVersion = {{ latestVersion.value }}
const prevVersions = {{ prevVersion.values }}
const prevVersion = {{ prevVersion.value }}
const prevVersionIndex = prevVersions.indexOf(prevVersion)
const stableData = {{ stableData.value }}

// Sort and prepare important entries
const features = channel === 'stable'
  ? importantFeatures.sort(
      (a, b) =>
        changeTypes.findIndex(p => p.value === a.type) -
        changeTypes.findIndex(p => p.value === b.type)
    )
  : null;

// Identify major release patches using the date check logic
const isMajorRelease = (patch) =>
  patch.date === _.last(stableData[patch.version]?.versions || []).date;

// Identify the major release patch for the selected version
const latestVersionPrefix = latestVersion.split('.').slice(0, 2).join('.');
const currentMajorPatch = patches.find(
  (p) => p.version === latestVersionPrefix && isMajorRelease(p)
);
const currentMajorPatchRelease = currentMajorPatch
  ? `${currentMajorPatch.version}.${currentMajorPatch.patch}`
  : null;

// Determine if the selected range includes the major release
const includeMajorChanges =
  currentMajorPatchRelease &&
  prevVersions.includes(currentMajorPatchRelease) &&
  prevVersions.indexOf(currentMajorPatchRelease) <= prevVersionIndex;

// Build the list of important (major) changes
const importantEntries = channel === 'stable' && includeMajorChanges
  ? features
      ?.filter(item => item.release === latestVersionPrefix)
      .map(item => {
        const summary = changelogFeed.find(change => change.url === item.url)?.summary || null;
        return {
          description: item.summary || summary,
          patch: currentMajorPatch?.patch || '0',
          type: item.type || null,
          version: item.release || null,
          url: item.url || null,
          summary: item.summary || null,
          majorChange: true,
          beta: item.beta || null,
          release: `${item.release}.${currentMajorPatch?.patch || '0'}`
        };
      }) || []
  : [];

// Build all patch notes
const patchNotes = patches.map(item => {
  const release = `${item.version}.${item.patch}`;
  const majorRelease = isMajorRelease(item);
  return {
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
    release,
    isMajorRelease: majorRelease
  };
});

// Consolidate and filter by selected version range
let consolidated = [...importantEntries, ...patchNotes].filter(item => {
  const itemIndex = prevVersions.indexOf(item.release);
  return itemIndex !== -1 && itemIndex <= prevVersionIndex;
});

return consolidated;