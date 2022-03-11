# AppName

Welcome to AppName! Game files are stored in `./AppNameGame`.

Detailed information about how to prepare an app to deploy to K8s is here: (https://amuniversal.atlassian.net/l/c/AV1H0Sbf)

## Install

git clone <https://github.com/Andrews-McMeel-Universal/AppName_game.git>:
• Homebrew
• Docker: brew cask install docker

## Local Development

To start the service locally:

1. From the root project directory, run docker-compose up
   The game can be seen at <https://localhost:3000>

## Contributing

### Issue per Branch

For any code changes in this repo, we ask that you create a branch per Jira Issue. This is a general best practice and promotes smaller/incremental changes that are easily deployed and debugged. Our default branch naming pattern for this is the following:

```
jiraIssueType/JIRA-1234/hyphenated-issue-summary
```

To illustrate this, if a simple copy change was raised by the product owner in JIRA. The issueType would be "maintenance" and we will use the example issue key: CAN-1234

### Smart Commits

There are certainly instances where the product owner may raise several very small issues and creating a seperate branch for each is not exactly feasible. As a fallback, you can still trigger our automation by using what are called [smart commits](https://confluence.atlassian.com/fisheye/using-smart-commits-960155400.html).

JIRA Smart commits automagically (a github integration) sends information back to the JIRA project that the product owner is working on. We have setup our workflows to automatically update the status for you on the ticket and provide development information in the ticket. All that is required is when you commit changes, you include the Jira issue key in this exact format:

```
[CAN-1234]
```

To illustrate this, Say you had a single commit for four seperate issues. Your commit message would appear like this:

```
[CAN-1234], [CAN-1235], [CAN-1236], [PUZSOC-1111] Knocked out the 4 copy edits needed within the game instructions.
```

### Semantic Versioning

Within this application, there are three locations that are updated to denote what the current version is. These three values should always match each other:

```
/package.json
/NameGame/package.json
/deployments/charts/Chart.yaml
```

### Pull Requests

Once you have committed your effort in a seperate branch, you will need to raise a pull request in github. **Please** follow the pull request template format and write a brief description of any technical details that should be known. Below are relevant links that give you an opportunity to include all JIRA issues that are contained within the PR. The recommended title for the pull request is typically just the branch name. Again, if a single issue per branch is not feasible, including a brief title of the effort is acceptable.

To illustrate this, here would be the complete PR template filled out (based on our above examples):

#### Pull Request Title

jiraIssueType/JIRA-1234/hyphenated-issue-summary

#### Description

Completed the 4 copy edits needed within the game instructions

#### Relevant Links

- [CAN-1234]
- [CAN-1235]
- [CAN-1236]
- [PUZSOC-1111]

### Reviewers and Supportive information

You do not need to fill in the reviewers or assignees. Our CODEOWNERS automation takes care of who will need to review it. As long as a AMU software engineer reviews it and the other checks pass, we will take care of merging the pull request into staging and production.

### Deployment to Staging

Once approved and an AMU software engineer has merged this pull request in, the following will happen within our CI.

1. Your branch will be merged into staging
2. All jira tickets you have included in the branch names or commits will have their statuses automatically updated to **In QA Review**. This communicates to the product owner that it is QA testing.
3. Once the product owner has reviewed these issues and marked each of their statuses as **Approved**, we will begin preparing a production release.

### Deployment to Production

1. When the product owner has all issues marked as approve, the AMU software engineer will take note of the package.json version in this repo's staging branch.
2. Using this version, he/she will update the JIRA release to that noted version. IE: AppName_game_1.0.2
3. A pull request from staging to production will be raised with the following information.

### Pull Request Title

1.0.2

### Description

_AMU software engineer will copy over the JIRA release notes._

### Relevant Links

Jira Release: <https://amuniversal.atlassian.net/projects/CAN/versions/12711/tab/release-report-all-issues>

### Creating an Official Release

Once a pull request is merged into _production_ from _staging_ the AMU software engineer **must** create a tagged version. Navigate to the [product releases in github](https://github.com/Andrews-McMeel-Universal/AppName_game/releases) Click the button for "Draft a New Release" and then click "Auto-generated Release Notes". _NOTE: We do not use the vx.x.x pattern for version naming. We simply have the semantic release version number like this: x.x.x_

### Template References

There are a few commented references to take note of.
- _TODO-ONBOARDING:_ This denotes a todo task which should be done after a new UI repo has been created.  _IE: Create sentry project and paste in token value._
- _REVIEW:_ This denotes that the front-end engineering team as a group should discuss and decide to keep the scaffold, make it optional, or remove it.
- _"amuproduct"_ This string should be globally searched and replaced with the real product.
