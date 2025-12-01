
const selectedChannel = {{ channelSelect.value }};
const stableChanges = {{ stableData.value }};
const edgeChanges = {{ edgeData.value }};
const releases = selectedChannel === 'edge' ? edgeChanges : stableChanges;

const fromIndex = Math.min({{ prevVersion.selectedIndex }}, {{ latestVersion.selectedIndex }});
const toIndex = Math.max({{ prevVersion.selectedIndex }}, {{ latestVersion.selectedIndex }});
const allPatchVersions = {{ prevVersion.values }};

const selectedPatchRange = allPatchVersions.slice(fromIndex, toIndex + 1);

// Get the corresponding major version keys
const majorKeysInRange = Array.from(
  new Set(selectedPatchRange.map(v => v.split('.').slice(0, 2).join('.')))
);

// Now get all important entries from those major keys
let diff = [];

majorKeysInRange.forEach((major) => {
  const important = releases[major]?.important || [];
  important.forEach((msg) => {
    diff.push({
      ...msg,
      release: major,
    });
  });
});

const typeOrder = ["warning", "new", "beta"];
return diff.sort((a, b) => typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type));

