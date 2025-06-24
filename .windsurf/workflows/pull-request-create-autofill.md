---
description: This workflow is intended to quickly raise a pull request with all major fields filled out
---

# Workflow: Raise Autofilled Pull Request

## Description

This workflow is intended to quickly raise a pull request. The pull request will be raised via the github cli. The values passed into the command will be enriched by you after carefully examining the changes. You will respond with permission to execute the command and display the information for my review below the command.

---

## Instructions

I will provide the branch for you to raise the pull request from. You must always adhere to the branch naming format defaulting to: feature/WR-XXXX-<pull-request-title-hyphenated>

If a hotfix is mentioned in my prompt the format would be: hotfix/WR-XXXX-<pull-request-title-hyphenated>

If a release is mentioned in my prompt the format would be: release/WR-XXXX-<pull-request-title-hyphenated>

1. Take note of the <pull-request-title-hyphenated> which should hint to you what the pull request and branch are focused on.
2. Carefully analyze the changed files, the commit messages, and the contributors so you can summarize these changes into a pull request description. One to two paragraphs and/or a bullet list of changes is expected. Leave out any changes with mundane details like `updating props` or `fixing state`. Find the repository name of the branch provided.
3. Populate the pull request description and any other relevant information where I ask for your input in an html comment.
4. Execute the following script and provide me with your output so I can review it. You must not use \n for hard returns. The description will render as plain text in the pull request description so format it nicely using markdown. The h1 heading should same `# Summary` and then the h2 heading should say `## Changelog`.  Below is the cli command you must fill out:

   ```bash
   gh pr create

   --repo <!-- The repository name you identified in step 2 -->
   --base develop
   --head <!-- The feature branch I provided you in step 1 -->
   --title "<!-- The feature branch I provided you in step 1 -->"
   --body "<!-- The pull request description you crafted from step 1 -->"
   --assignee <!-- The assignee you identified in step 1 -->
   --reviewers gisanchez, dominicp21, <!-- And any other reviewers you identified in step 2. -->"

   ```

5. Confirm the pull request was created successfully by checking the returned PR number or URL.
