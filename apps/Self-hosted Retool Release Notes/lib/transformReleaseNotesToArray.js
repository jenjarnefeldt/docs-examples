// Transform release notes data into array

const stableReleases = {{ stableData.value }};
const edgeReleases = {{ edgeData.value }};
const channelSelect = {{ channelSelect.value }};
const allEdgeReleases = {{ getEdgeReleases.value }};
const stableAndLegacy = {{ getStableMajorReleases.value }};
const allReleases = channelSelect === 'edge' ? allEdgeReleases : stableAndLegacy;
const fromRelease = allReleases.length -1;
const toRelease = 0;
const releases = channelSelect === 'edge' ? edgeReleases : stableReleases;
const allVersions = allReleases.slice(toRelease, fromRelease);
const descriptions = {{ descriptions.data }};

let diff = [];

// Get patch notes for Stable releases.
allVersions.forEach((version) => {
  const patches = releases[version].versions;
  if (patches) {
    patches.forEach((patch) => {
      const updatedPatch = { ...patch, version };
      diff.push(updatedPatch);
    });
  }
});

let reshapedReleaseNotes = diff.flatMap((note) => {
  const changes = [];
  
  Object.keys(note).forEach((key) => {
    if (key !== "patch" && key !== "date" && key !== "version" && key !== "digest" && key !== "disabled" && key !== "reasonUrl") {
      const arrayValue = note[key];
      
      // Ensure that note[key] is an array before using forEach
      if (Array.isArray(arrayValue)) {
        arrayValue.forEach((description) => {
          let changeType = key;
          
          // If this is an edge "changelog" entry, look up the type from descriptions
          
          const descData = descriptions[description];
          if (descData && descData.type) {
            changeType = descData.type;
          }
          
          changes.push({
            patch: note.patch,
            date: note.date,
            type: changeType,
            description,
            version: note.version,
            disabled: note.disabled
          });
        });
      }
    }
  });
  
  return changes;
});

return reshapedReleaseNotes;