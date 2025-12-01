const data = {{ consolidateChanges.value }}

return _.uniq(data.map(item => item.version))