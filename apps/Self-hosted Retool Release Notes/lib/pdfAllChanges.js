const whatsNew = filterImportant.value
  .map((note) => {
    const { url } = note;
    const item = url
      ? getChangelogFeed.data.items.find((item) => item.url === url)
      : null;

    const converter = new showdown.Converter();
    const content = item?.summary
      ? converter.makeMarkdown(
          item.summary        )
      : '';

    const title = item?.title || ''; 
    return `# ${title}\n\n${content}\n`;
  })
  .join("\n\n"); // Add an extra newline between entries

const newMarkdownData = whatsNew + "\n\n---\n\n";

const seen = new Set();
const changelog = sortBySemver.value.reduce((acc, note) => {
  const { type, description } = note;
  if (seen.has(description)) return acc;
  seen.add(description);

  if (!acc[type]) {
    acc[type] = [];
  }
  const content = descriptions.data[description]?.summary;
  if (!content) return acc;
  acc[type].push(`- ${content}`);
  return acc;
}, {});

const listOfChanges = Object.entries(changelog)
  .map(([type, items]) => `### ${_.startCase(type)}\n\n${items.join("\n")}\n`)
  .join("\n");

const markdownData = "# Changes and improvements\n\n" + listOfChanges;

const introText =
  "Consolidated release notes of changes to self-hosted Retool from " +
  prevVersion.value +
  " to " +
  latestVersion.value +
  ".\n\n";

const isNewRelease = latestVersion.value.split('.')[1] != prevVersion.value.split('.')[1] ? true : false

if (isNewRelease) {
  return introText + newMarkdownData + "\n\n" + markdownData;
} else {
  return introText + "\n\n" + markdownData;
}
