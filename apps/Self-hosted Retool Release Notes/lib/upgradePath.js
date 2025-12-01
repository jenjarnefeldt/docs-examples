const stableData = {{stableData.value}};
const stableMajorReleases = {{  getStableMajorReleases.value}};
const prevVersionStr = {{prevVersion.value}};
const prevVersionNum = {{prevVersion.selectedItem.version}};
const latestVersionNum = {{  latestVersion.selectedItem.version}};
const latestPrevVersionStr = {{ prevVersion.selectedItem.version + '.' + (getStableData.data[prevVersion.selectedItem.version].versions)[0].patch }}


// Ensure prevVersion is included as the first item
let releases = [{ value: latestPrevVersionStr, label: latestPrevVersionStr }];

// Find indexes for slicing the upgrade path
const prevIndex = stableMajorReleases.indexOf(prevVersionNum);
const latestIndex = stableMajorReleases.indexOf(latestVersionNum);

// Ensure we're slicing correctly and include versions in between
if (prevIndex > latestIndex) {
  const upgradePath = stableMajorReleases.slice(latestIndex, prevIndex).reverse();

  // Map upgrade path to major.minor.patch format
  releases = releases.concat(
    upgradePath.map(release => ({
      value: release,
      label: `${release}.${stableData[release]?.versions?.[0]?.patch}`
    }))
  );
}

return [...[{"value": prevVersionStr, "label": prevVersionStr}], ...releases]