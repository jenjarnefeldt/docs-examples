const data = {{ transformReleaseNotesToArray.value }}
const prevVersion = {{ prevVersion.value }}
const filterByVersionRange = (arr, lowerBound, upperBound) => {
  const parseVersion = (version) => {
    const [major, minor, patch] = version.split('.').map(Number);
    return { major, minor, patch };
  };

  const isWithinRange = (obj, lower, upper) => {
    const { major, minor, patch } = parseVersion(`${obj.version}.${obj.patch}`);
    const lowerVersion = parseVersion(lower);
    const upperVersion = parseVersion(upper);

    if (major < lowerVersion.major || major > upperVersion.major) return false;
    if (major === lowerVersion.major && minor < lowerVersion.minor) return false;
    if (major === upperVersion.major && minor > upperVersion.minor) return false;

    if (major === lowerVersion.major && minor === lowerVersion.minor && patch < lowerVersion.patch) return false;
    if (major === upperVersion.major && minor === upperVersion.minor && patch > upperVersion.patch) return false;

    return true;
  };

  return arr.filter(item => isWithinRange(item, lowerBound, upperBound));
};

const lowerBound = {{ prevVersion.value }}; // Example: "3.75.9"
const upperBound = {{ latestVersion.value }}; // Example: "3.75.10"

const filteredArray = filterByVersionRange(data, lowerBound, upperBound);

return filteredArray.filter(item => item.version.concat('.' + item.patch) != prevVersion );