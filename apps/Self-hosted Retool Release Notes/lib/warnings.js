return [
  {
    "issue": "Workflows",
    "severity": "error",
    "description": `Retool discovered a bug in certain versions of self-hosted Retool that can cause workflows which use custom JavaScript libraries to fail. This issue has been resolved in a subsequent version.

If you have a self-hosted deployment with an affected version currently installed, upgrade to a later version to avoid further disruption to workflows.`,
    "affectedVersions": [
      "3.114.0",
      "3.114.1",
      "3.114.2",
      "3.114.3",
      "3.114.4",
      "3.114.5",
      "3.114.6",
      "3.114.7",
      "3.114.8",
      "3.120.0",
      "3.123.0",
      "3.127.0",
      "3.130.0",
      "3.131.0",
      "3.135.0",
      "3.136.0",
      "3.139.0",
      "3.144.0"
    ],
    "url": 'https://docs.retool.com/changelog/workflows-js-libraries-bug-self-hosted'
  }
]