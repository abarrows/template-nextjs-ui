---
description: Enrich and create pull request
auto_execution_mode: 1
---

# Workflow: Raise Autofilled Pull Request

## Description

This workflow is intended to quickly raise a pull request, ideally without my intervention. The goal is to run this single workflow and upon completion, I see a link to the fully informed pull request. The pull request will be raised via the github cli. The values passed into the command will be enriched by you after carefully examining the changes. You will respond with permission to execute the command and display the information for my review below the command.

---

## Instructions

1. You must first determine which branch I am currently on. If the branch is set as the default branch, move this step to the last step before creating the PR. Use this naming format: feature/WR-XXXX-<pull-request-title-hyphenated> whereas you will make a 4-8 word title describing the changes. That downcased and hyphenated title will replace this: <pull-request-title-hyphenated> in my format example.

### Exceptions

- If I mention a different target branch to raise the pull request against, take note and when raising the pull request, do so.

- If a ticket number is mentioned in my prompt, you will replace the WR-XXXX in hotfix/WR-XXXX-<pull-request-title-hyphenated>

- If a hotfix is mentioned in my prompt the format would be: hotfix/WR-XXXX-<pull-request-title-hyphenated>

- If a release branch is mentioned in my prompt the format would be: release/WR-XXXX-<pull-request-title-hyphenated>

2. Carefully analyze the changed files, the commit messages, and the contributors so you can summarize these changes into a pull request description. One to two paragraphs and/or a bullet list of changes is expected. Leave out any changes with mundane details like `updating props` or `fixing state`. Find the repository name of the branch provided.

3. Populate the pull request description and any other relevant information where I ask for your input in an html comment.

// turbo 4. Execute the following command to create the pull request:

```bash
gh pr create --repo <!-- The repository name you identified in step 2 --> --base <!-- Check for the default branch in this order: main, develop, or master --> --head <!-- The feature branch I provided you in step 1 --> --title "<!-- The feature branch I provided you in step 1 -->" --body "<!-- The pull request description you crafted from step 2 -->" --assignee <!-- The assignee you identified in step 1 or default to: abarrows --> --reviewer gisanchez --reviewer dominicp21 <!-- And any other reviewers you identified in step 2. -->
```

5. If for some reason, I'm in a private repo and the reviewers that I've specified are not available the first time, retry raising the PR again but omit the reviewers the second time. Just let me know in the post summary. Confirm the pull request was created successfully and then run the github mcp command that adds Copilot as a reviewer.

6. Respond with a link to the newly created PR. Also verify that Copilot was successfully added as a reviewer. If for any reason the assignees are not assignable or Copilot is not assignable or found, continue without responding. Create the pull request and let me know after the fact in your PR summary and response.
