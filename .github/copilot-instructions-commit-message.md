# instructions

You must follow the conventional commit message format. Use the JIRA issue key
as a prefix to each commit. Prefer verbose commit types that match JIRA default
issue types like story, bugfix, hotfix, maintenance. Always try to add an
optional scope for the different aspects of the application like: storybook,
tests, api, devops, devex, ci, styling, dependencies, etc. When a breaking
change is identified, Use the more verbose commit message with both ! and
BREAKING CHANGE footer. Here is an example of committing a new feature:
story(collections): [YZ-1234] Introduced new collection feature. Here is an
example of committing a bug fix: bugfix(collections): [YZ-1234] Fixed the
collection feature. Here is an example of committing a breaking change:
story(collections): [YZ-1234] Introduced new collection feature. ! BREAKING
CHANGE: The collection feature now requires a user to be logged in."
