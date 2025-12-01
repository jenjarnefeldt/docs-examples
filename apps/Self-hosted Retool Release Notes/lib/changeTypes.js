const added = {
  "value": "added", 
  "label": "Added", 
  "color": {{ theme.success }},
"caption": "A patch change that introduces a new feature or functionality.",
  "major": false,
  "sort": 3
}

const fixed = {
  "value": "fixed", 
  "label": "Fixed", 
  "color": {{ theme.automatic[0] }},
"caption": "A patch change that resolves a bug or issue.",
   "major": false,
  "sort": 4
}

const improved = {
  "value": "improved", 
  "label": "Improved", 
    "caption": "A patch change that enhances performance, usability, or clarity.",
  "color": '#8b867f',
   "major": false,
  "sort": 5
}

const improvement = {
  "value": "improvement", 
  "label": "Improvement",
  "major": true,
      "caption": "Enhances performance, usability, or clarity in this release.",

  "color": 'rgba(45, 76, 113, 1)',
  "sort": 5
}

const changed = {
  "value": "changed", 
  "label": "Changed", 
  "caption": "A patch change existing functionality or behavior.",
  "color": 'rgb(81, 141, 210)',
   "major": false,
  "sort": 6
}

const deprecated = {
  "value": "deprecated", 
  "label": "Deprecated",
  "color": {{ theme.warning }},
 "major": false,
"caption": "A patch change that marks a feature no longer supported in this patch; alternatives are recommended.",
  "sort": 2
}

const deprecation = {
  "value": "deprecation", 
  "label": "Deprecation", 
   "major": true,
  "caption": "Announces a feature that will no longer be supported in a future release; alternatives are recommended.",
  "color": 'rgb(161, 91, 34)',
  "sort": 2
}

const removed = {
  "value": "removed", 
  "label": "Removed", 
   "major": false,
  "color": {{ theme.danger }},
"caption": "A patch change that removes a feature or functionality.",
  "sort": 7
}

const removal = {
  "value": "removal", 
  "label": "Removal", 
  "major": true,
  "color": 'rgba(121, 51, 37, 1)',
  "caption": "Removes a major feature or functionality from this release.",
  "sort": 7
}

const patched = {
  "value": "security-fix", 
  "label": "Security Fix", 
   "major": false,
  "color": {{ theme.automatic[3]}},
"caption": "A patch change that addresses a vulnerability to improve system security.",
  "sort": 8
}

const securityFix = patched;

const important = {
  "value": "important", 
  "label": "Important", 
    "major": true,
  "caption": "Critical update or change requiring user attention for this release.",
  "color": 'rgba(121, 51, 37, 1)',
  "sort": 0
}

const newType = {
  "value": "new", 
  "label": "New", 
    "major": true,
    "caption": "New feature or significant addition in this release.",
  "color": 'rgba(24, 88, 73, 1)',
  "sort": 1
}

const beta = {
  "value": "beta", 
  "label": "Beta", 
    "major": true,
  "caption": "New feature or functionality that is available in beta.",
  "color": {{ theme.automatic[4]}},
  "sort": 9
}

return [important, newType, improvement, removal, deprecation, beta, added, fixed, improved, changed, deprecated, removed, patched, securityFix]