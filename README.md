# AppName

[![Production](https://github.com/abarrows/template-nextjs-ui/actions/workflows/deployment.yml/badge.svg?event=release)](https://github.com/abarrows/template-nextjs-ui/actions/workflows/deployment.yml)
[![Staging](https://github.com/abarrows/template-nextjs-ui/actions/workflows/deployment.yml/badge.svg?event=prerelease)](https://github.com/abarrows/template-nextjs-ui/actions/workflows/deployment.yml)
[![Development](https://github.com/abarrows/template-nextjs-ui/actions/workflows/deployment.yml/badge.svg?event=push&branch=main)](https://github.com/abarrows/template-nextjs-ui/actions/workflows/deployment.yml)

App responsible for all appname related data.

## Setting up your repository

<!-- You can use this guide to figure out how to update your application using the template: [Creating a new repository from a template](https://COMPANY_NAME.atlassian.net/wiki/spaces/TD/pages/3419832336/Creating+a+New+GitHub+Repository#Creating-a-new-repository-from-a-template) -->
Upon cloning, fill in the values for the .env.example and save this as a new .env in the root directory.  Run the following:

<!-- TODO: Retrieve my document from DevOps and publish on personal site or my github profile. -->
<!-- TODO: Port over npm run setup script to work with AWS Secrets Manager. -->

## Related links

- Deploy Environments
  - [Development](https://NEXT_PUBLIC_DEPLOY_ENV.APPLICATION_DOMAIN.com/)
  - [Staging](https://NEXT_PUBLIC_DEPLOY_ENV.APPLICATION_DOMAIN.com/)
  - [Production](https://NEXT_PUBLIC_DEPLOY_ENV.APPLICATION_DOMAIN.com/)
- Swagger docs for the back-end service
  - [Development](https://NEXT_PUBLIC_DEPLOY_ENV.service.SERVICE_ORCHESTRATOR_URL.com/swagger/index.html)
  - [Production](https://NEXT_PUBLIC_DEPLOY_ENV.service.SERVICE_ORCHESTRATOR_URL.com/swagger/index.html)
- [Storybook](<https://www.chromatic.com/library?appId=TODO: ONBOARDING - input-storybook-instance>)
- [Jira Project](<https://COMPANY_NAME.atlassian.net/browse/TODO:ONBOARDING - input-jira-instance>)
- [Confluence Space](<https://COMPANY_NAME.atlassian.net/l/c/TODO:ONBOARDING - input-confluence-space>)
- [Sentry Error Reporting](<https://sentry.io/organizations/COMPANY_NAME/issues/?project=TODO:ONBOARDING - input-sentry-project-id>)

---

## Getting Started

```bash
git clone https://github.com/abarrows/template-nextjs-ui
```

### Prerequisites

You will need:

- An OS package manager
  - MacOS: [Homebrew](https://brew.sh/)
  - Windows: [Chocolatey](https://chocolatey.org/install)
- [NVM & Node](https://github.com/creationix/nvm)
  - Install the same Node version listed in the .nvmrc file
- [NPM](https://www.npmjs.com/)
  - Comes with Node installation
- [Docker](https://www.docker.com/)
  - MacOS: `brew cask install docker`
  - Windows: `choco install docker-desktop`
- [Powershell](https://docs.microsoft.com/en-us/powershell)
  - MacOS: `brew install --cask powershell`
  - Windows: `choco install powershell-core`

<!-- More notes on other helpful tools you can use in this project, here: [Basic Workstation Setup](https://COMPANY_NAME.atlassian.net/wiki/spaces/DEVOps/pages/3114369037/Basic+Workstation+Setup) -->
<!-- TODO: Retrieve my document from DevOps and publish on personal site or my github profile. -->

---

## Building the Project

<!-- We use Docker to build and deploy this project. You can read up more on some tips on how to use Docker, here: <https://COMPANY_NAME.atlassian.net/wiki/spaces/DEVOps/pages/3399024641/Tips+for+Using+Docker> -->
<!-- TODO: Retrieve my document from DevOps and publish on personal site or my github profile. -->

To start the app locally:

1. Retrieve the `.env` file by running one of the commands in the [Retrieving Environment Variables](#retrieving-environment-variables) section
1. From the root project directory, run
   - `npm run dev` to start a development server with hot reloading
   - `npm run build && npm start` to build and start a production server without hot reloading
   - `docker compose up --build` to build and start the application using Docker
1. Open app in browser: <http://localhost:3000>

---

## Environment Variables

The environment variables for this project were previously sourced from Azure Key Vault Secrets.  WIP: I will create a branch soon to update this process so that it sources from either AWS Secret Manager.  Until then, simply replace the values with you personal situation's values..

<!-- > :white_check_mark: Read about [Application Environment Variables](https://COMPANY_NAME.atlassian.net/l/cp/z7HWk0Ah) for information on how to use and edit environment variables in an application **before proceeding**. -->
<!-- TODO: Retrieve my document from DevOps and publish on personal site or my github profile. -->

### Retrieving Environment Variables

You have options when generating a local `.env` file:

- To generate a `.env` file for a specific environment: In a PowerShell session, run `./Get-Secrets.ps1 -Environment [ENVIRONMENT]`. If no environment is provided, the script defaults to the "development" environment.
- To generate a `.env` file for a specific key vault: In a PowerShell session, run `./Get-Secrets.ps1 -KeyVaultName [KEY VAULT NAME]`. You can find the available key vaults for this project below.
- To generate a `.env` file for a specific environment: In a shell session, run `npm run setup [ENVIRONMENT]` (also runs `npm install`). If no environment is provided, the script defaults to the "development" environment.

Here are the available Azure Key Vault names for this project:

- `template-ui-development`
- `template-ui-staging`
- `template-ui-production`

### Using Environment Variables

These files are where you can find and manage environment variables:

- `Secrets-example.json` - sample variables for each Key Vault
- `Secrets.json` - secrets config file for each Key Vault
  - Generate and edit with `npm run keys:edit` or `./Edit-Secrets.ps1`
  - Save and apply changes with `npm run keys:save` or `./Set-Secrets.ps1`
- `.env` - variables for the selected Key Vault
  - Generated by `npm run setup` and `npm run keys:get`
- `.env.development` - override **non-secret** values from .env while developing the project locally
- `.env.production` - override **non-secret** values from .env while building the project locally
- `.env*.local` - override **secret** values for **local use** only
  - This file is optional and should only be used for advanced configuration

---

<!-- ## Updating the Node Version

Whenever we update our Node version, it needs to be updated to the same version within both the `Dockerfile` and `.nvmrc`. Typically the `Dockerfile`'s Node version is updated by [Dependabot](https://app.dependabot.com/accounts/GITHUB_ORGANIZATION). When a pull request is created, pull down the branch, and update the listed version in `.nvmrc` to match it. -->

<!-- TODO: Bring over the dynamic node version that analyzes the .nvmrc version and uses it during the provisioning of containers. -->

## Onboarding A New UI Product

1. Review `.env.example`,
2. _TODO: ONBOARDING:_ Review all instances of this and follow the TODO
   instructions for the new product.
3. Once all is finished, run the `npm run validate` or the `npm run validate:ci` command which executes all setup scripts,
   tests, linting, etc. to ensure that everything works correctly without errors:

```javascript
npm run validate
```

4. _GITHUB_USER_NAME_ Update with the repo's owner name.
5. _GITHUB_USER_EMAIL_ Update with the repo's owner email.

---

## Development Essentials

<!-- ### Components -->

<!-- Read about [React Component Composition](https://TODO: ONBOARDING:input-component-composition-url) for information on how to build components in the UI. -->
<!-- TODO: Post composition to personal website or my github profile. -->

### Hooks

Our ESLint config is set up to validate hooks, including `useEffect` dependency arrays. Before disabling a warning because you believe something doesn't belong in deps, read through [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/) and try to find another solution. It's OK to disable a linter if you have good reason (leave a comment explaining why if that reason isn't immediately obvious), but that particular rule should never be disabled.

### State Management

We use hooks for local state and React Context for wider (but non-global) state. For global state we use [Zustand](https://zustand-demo.pmnd.rs/).

### Styling

We use SCSS Modules to style components. SCSS Modules are CSS Modules, but with all the power of SCSS (nesting, variables, etc). SCSS Modules scope styles to just that component, as opposed to making them globally available. Our entrypoint for global styles is in `src/styles/index.scss.

#### BEM

[BEM](http://getbem.com/naming/) is our preferred naming convention, which is slightly modified for convenience. This allows us to more easily access classes within JSX, like `styles.blockName` instead of `styles['block-name']`.

```scss
// Original BEM
.block-name
.block-name--modifier-name
.block-name__element-name
.block-name__element-name--modifier-name

// ACB BEM, uses camelCase and replaces -- with _
.blockName
.blockName_modifierName
.blockName__elementName
.blockName__elementName_modifierName
```

---

## Testing

Test files should be stored in the same location as the original file they are testing, with the exception of Playwright tests (see below).

We run tests automatically with GitHub Actions on every Pull Request, failing tests will need to be addressed before a PR can be merged.

### Jest & React Testing Library

We use [Jest](https://jestjs.io/en/) for helper function tests. For more information about working with Jest, this is a [useful guide](https://flaviocopes.com/jest).

We use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for component tests that simulate how a user would interact with the component. There are several available [queries](https://testing-library.com/docs/queries/about/#types-of-queries) for selecting the element you need to test.

Debugging Tools:

- The [screen](https://testing-library.com/docs/queries/about/#screen) object allows us to interact with the component we have rendered and find elements. Screen provides a [debug](https://testing-library.com/docs/queries/about/#screendebug) method that will print the document or specified elements.
- Screen provides another method called [logTestingPlaygroundURL](https://testing-library.com/docs/queries/about/#screenlogtestingplaygroundurl). This method will print a url in your terminal for you to copy and paste in your browser where you can further test the entire document or an element.

Run unit tests with `npm run test:unit`.

### Playwright

We use [Playwright](https://playwright.dev/) as our end-to-end testing framework. All Playwright tests are contained in `playwright/integration` directory as `.spec.js` files.

Debugging Tools:

- We recommend the [VSCode extension for Playwright](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) for easier debugging

Run integration tests with `npm run test:integration`.

---

## Storybook

We use [Storybook](https://storybook.js.org/) for component documentation and style guides. It can be run locally with `npm run storybook:dev`.

---

## Deployments & Releases tom did you move this stuff bud

We use GitHub Actions to deploy this project. More information on how to deploy using GitHub Actions here: [GitHub Action Deployments](TODO: ONBOARDING:github-action-deployments-url)

## Onboarding A New UI Product

1. _APPLICATION_NAME_ Find and replace all references of this with the real
   product's name.
2. _TODO: ONBOARDING:_ Review all instances of this and follow the TODO
   instructions for the new product.
3. Once all is finished, run the **preflight** command which executes all setup scripts, tests, linting, etc. to ensure that everything works correctly without errors:

```javascript
npm run validate
```
