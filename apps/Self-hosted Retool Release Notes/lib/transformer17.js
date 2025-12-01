// Transform release notes data into array

const stableReleases = {{ stableData.value }};
const allReleases = Object.keys(stableReleases);
const fromRelease = allReleases.length -1;
const toRelease = 0;
const releases = stableReleases;
const allVersions = allReleases.slice(toRelease, fromRelease);

let diff = [];

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
    if (key !== "patch" && key !== "date" && key !== "version") {
      const type = key;
      
      if (Array.isArray(note[key])) {
        note[key].forEach((description) => {
          changes.push({
            patch: note.patch,
            date: note.date,
            type,
            description,
            version: note.version          });
        });
      }
    }
  });
  
  return changes;
});

return reshapedReleaseNotes;