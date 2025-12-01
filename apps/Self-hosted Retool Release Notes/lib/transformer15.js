const data = {{ transformReleaseNotesToArray.value }}

return Array.from(
  new Map(data.map(item => [`${item.patch}-${item.version}`, item])).values()
)