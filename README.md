# AppName

[![Production](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/aks-deployment.yml/badge.svg?event=release)](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/aks-deployment.yml)
[![Staging](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/aks-deployment.yml/badge.svg?event=prerelease)](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/aks-deployment.yml)
[![Development](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/aks-deployment.yml/badge.svg?event=push&branch=main)](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/aks-deployment.yml)

App responsible for all appname related data.

## Setting up your repository

You can use this guide to figure out how to update your application using the template: [Creating a new repository from a template](https://amuniversal.atlassian.net/wiki/spaces/TD/pages/3419832336/Creating+a+New+GitHub+Repository#Creating-a-new-repository-from-a-template)

## Related links

- Deploy Environments
  - [Development](https://development.appname.com/)
  - [Staging](https://staging.appname.com/)
  - [Production](https://www.appname.com/)
- Swagger docs for the back-end service
  - [Development](https://development.service.appname.com/swagger/index.html)
  - [Staging](https://staging.service.appname.com/swagger/index.html)
  - [Production](https://service.appname.com/swagger/index.html)
- Strapi CMS Login
  - [Staging](https://staging.appname-cms.amuniversal.com/admin/auth/login)
  - [Production](https://appname-cms.amuniversal.com/admin/auth/login)
- [Storybook](https://www.chromatic.com/library?appId=TODO-ONBOARDING:input-storybook-instance)
- [Jira Project](https://amuniversal.atlassian.net/browse/TODO-ONBOARDING:input-jira-instance)
- [Confluence Space](https://amuniversal.atlassian.net/l/c/TODO-ONBOARDING:input-confluence-space)
- [Sharepoint Group](https://amutechnology.sharepoint.com/sites/TODO-ONBOARDING:sharepoint-group)
- [Sentry Error Reporting](https://sentry.io/organizations/andrews-mcmeel-universal/issues/?project=TODO-ONBOARDING:input-sentry-project-id)

---

## Getting Started

```bash
git clone https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template
```

### Prerequisites

You will need:

- An OS package manager
  - MacOS: [Homebrew](https://brew.sh/)
  - Windows: [Chocolatey](https://chocolatey.org/install)
- [NVM & Node](https://github.com/creationix/nvm)
  - Install the same Node version listed in the .nvmrc file
- [Yarn](https://yarnpkg.com/)
  - MacOS: `brew install yarn`
  - Windows: `choco install yarn`
- [Docker](https://www.docker.com/)
  - MacOS: `brew cask install docker`
  - Windows: `choco install docker-desktop`
- [Powershell](https://docs.microsoft.com/en-us/powershell)
  - MacOS: `brew install --cask powershell`
  - Windows: `choco install powershell-core`

More notes on other helpful tools you can use in this project, here: [Basic Workstation Setup](https://amuniversal.atlassian.net/wiki/spaces/DEVOps/pages/3114369037/Basic+Workstation+Setup)

---

## Building the Project

We use Docker to build and deploy this project. You can read up more on some tips on how to use Docker, here: <https://amuniversal.atlassian.net/wiki/spaces/DEVOps/pages/3399024641/Tips+for+Using+Docker>

To start the app locally:

1. Retrieve the `.env` file by running one of the commands in the [Retrieving Environment Variables](#retrieving-environment-variables) section
1. From the root project directory, run
   - `yarn dev` to start a development server with hot reloading
   - `yarn build && yarn start` to build and start a production server without hot reloading
   - `docker compose up --build` to build and start the application using Docker
1. Open app in browser: <http://localhost:3000>

---

## Environment Variables

The environment variables for this project are sourced from Azure Key Vault Secrets.

> :white_check_mark: Read about [Application Environment Variables](https://amuniversal.atlassian.net/l/cp/z7HWk0Ah) for information on how to use and edit environment variables in an application **before proceeding**.

### Retrieving Environment Variables

You have options when generating a local `.env` file:

- To generate a `.env` file for a specific environment: In a PowerShell session, run `./Get-Secrets.ps1 -Environment [ENVIRONMENT]`. If no environment is provided, the script defaults to the "development" environment.
- To generate a `.env` file for a specific key vault: In a PowerShell session, run `./Get-Secrets.ps1 -KeyVaultName [KEY VAULT NAME]`. You can find the available key vaults for this project below.
- To generate a `.env` file for a specific environment: In a shell session, run `yarn setup [ENVIRONMENT]` (also runs `yarn install`). If no environment is provided, the script defaults to the "development" environment.

Here are the available Azure Key Vault names for this project:

- `template-ui-development`
- `template-ui-staging`
- `template-ui-production`

### Using Environment Variables

These files are where you can find and manage environment variables:

- `Secrets-example.json` - sample variables for each Key Vault
- `Secrets.json` - secrets config file for each Key Vault
  - Generate and edit with `yarn keys:edit` or `./Edit-Secrets.ps1`
  - Save and apply changes with `yarn keys:save` or `./Set-Secrets.ps1`
- `.env` - variables for the selected Key Vault
  - Generated by `yarn setup` and `yarn keys:get`
- `.env.development` - override **non-secret** values from .env while developing the project locally
- `.env.production` - override **non-secret** values from .env while building the project locally
- `.env*.local` - override **secret** values for **local use** only
  - This file is optional and should only be used for advanced configuration

---

## Updating the Node Version

Whenever we update our Node version, it needs to be updated to the same version within both the `Dockerfile` and `.nvmrc`. Typically the `Dockerfile`'s Node version is updated by [Dependabot](https://app.dependabot.com/accounts/Andrews-McMeel-Universal). When a pull request is created, pull down the branch, and update the listed version in `.nvmrc` to match it.

---

## Development Essentials

### Components

Read about [React Component Composition](https://amuniversal.atlassian.net/l/cp/Z1Hx13R1) for information on how to build components in the UI.

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

// AMU BEM, uses camelCase and replaces -- with _
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

Run unit tests with `yarn test:unit`.

### Playwright

We use [Playwright](https://playwright.dev/) as our end-to-end testing framework. All Playwright tests are contained in `playwright/integration` directory as `.spec.js` files.

Debugging Tools:

- We recommend the [VSCode extension for Playwright](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) for easier debugging

Run integration tests with `yarn test:integration`.

---

## Storybook

We use [Storybook](https://storybook.js.org/) for component documentation and style guides. It can be run locally with `yarn storybook:dev`.

---

## Deployments & Releases

We use GitHub Actions to deploy this project. More information on how to deploy using GitHub Actions here: [GitHub Action Deployments](https://amuniversal.atlassian.net/wiki/spaces/TD/pages/3445784596/Deploying+a+New+Application#GitHub-Action-Deployments)
