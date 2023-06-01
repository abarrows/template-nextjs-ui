![Production](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/aks-deploy.yml/badge.svg?event=release)
![Staging](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/aks-deploy.yml/badge.svg?event=prerelease)
![Development](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/aks-deploy.yml/badge.svg?event=push&branch=main)
![Application CI](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/application-ci.yml/badge.svg)

# AppName

App responsible for all appname related data.

## Setting up your repository

This template repository serves as a boilerplate/blueprint for any "New World" application for our department. All product string references have been agnosticized with detailed onboarding instructions in the README. This template repo will evolve and mature.

The goal of maintaining this is to two fold, decrease the time it takes to build new SPA UI's and increase uniformity across our front-end ecosystem. As it matures, more and more configuration, utilities, and logic which embodies what our application specific "standards" are as a team.

### Template References

There are a few repeated commented slugs repeated throughout the application.
Below are the intended uses for them.

- _TODO-ONBOARDING:_ This denotes a todo task which should be done after a new UI repository has been created. _IE: Create sentry project and paste in token value._
- _TODO-REVIEW:_ This denotes a sidebar discussion topic for frontend
  engineering team. All scaffolded items which need to be discussed as a group
  have this comment slug. To remove the comment, a consensus needs to be formed
  around whether the scaffolded item is kept, made optional, or removed.
- _Brand_ Across the templated UI, there are several references where the type
  of product was used. IE: game or comic As we move away from the feature /
  feature*item architecture, the generalized term \_brand* has been used to
  signify any reference to this parent level terminology. It is adviseable to
  globally search for all references of "brand" and replace as needed to a more
  specific word.

### Onboarding A New AMU Product

1. _k8sapp_ui_template_ Find and replace all references of the template repository name and replace with the real product's name.
2. _amuproduct_ Find and replace all references of **BOTH** (turn on match capitalization filter) "amuproduct" and "AmuProduct" with the real product's name, making sure to match the case.
3. OPTIONAL: _:3000_ Find and replace all default port numbers for app with unique one. _IE: 3001_
4. _AMUPRODUCT_ Find and replace all references of this with the real JIRA project key.
5. _TODO-ONBOARDING:_ Review all instances of this and follow the TODO instructions for the new product. If there is significant effort involved, change the TODO-SPECIFIC: label so it can be addressed later on. \_NOTE: Remove the TODO\'s as you complete them
6. _DOTENV:_ Review the dotenv variables across all environments to ensure they are properly valued.
7. Once all is finished, run the **preflight** command which executes all setup scripts,
   tests, linting, etc. to ensure that everything works correctly without errors: `yarn preflight`
8. Upgrade and update nvmrc (Node version) and all other dependencies/packages that are used out of the box within the project.

## Related links

- Deploy Environments
  - [Development](https://development.appname.com/)
  - [Staging](https://staging.appname.com/)
  - [Production](https://www.appname.com/)
- Swagger docs for AppName Service
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
- [Docker](https://www.docker.com/)
  - MacOS: `brew cask install docker`
  - Windows: `choco install docker-desktop`
- [Powershell](https://docs.microsoft.com/en-us/powershell)
  - MacOS: `brew install --cask powershell`
  - Windows: `choco install powershell-core`

More notes on other helpful tools you can use in this project, here: [Basic Workstation Setup](https://amuniversal.atlassian.net/wiki/spaces/DEVOps/pages/3114369037/Basic+Workstation+Setup)

---

## Local Development

We use Docker compose to build this project. You can read up more on some tips on how to use Docker, here: <https://amuniversal.atlassian.net/wiki/spaces/DEVOps/pages/3399024641/Tips+for+Using+Docker>

To start the service locally:

1. Install dependencies and retrieve the `.env` file by running: `yarn setup`
   > _OPTIONAL:_ Append this command with the environment of your choosing: `yarn setup staging` This will retrieve all the staging secrets and override what is currently in your .env file.
1. Start app for development, `yarn dev`, or start app for production, `yarn build && yarn start`
1. Open app in browser: <http://localhost:3000>
1. Run Jest tests: `yarn test:unit`

---

## Environment Variables

The environment variables for this project are sourced from Azure Key Vault Secrets.

> :white_check_mark: Read about [Application Environment Variables](https://amuniversal.atlassian.net/l/cp/z7HWk0Ah) for information on how to use and edit environment variables in an application **before proceeding**.

### Retrieving Environment Variables

You can use the Yarn scripts provided by the `package.json` file:

```bash
yarn setup [ENVIRONMENT]
```

Runs `yarn install` and generates the `.env` file. Optionally, you can specify the environment for the first argument (defaults to the `development` environment).

```bash
yarn keys:get [ENVIRONMENT]
```

Generates the `.env` file. Optionally, you can specify the environment for the first argument (defaults to the `development` environment).

### Using Environment Variables

These files are where you can find and manage environment variables.

- `Secrets-example.json` - sample variables for each Key Vault
- `Secrets.json` - secrets config file for each Key Vault
  - generate and edit with `yarn keys:edit` and `Edit-Secrets.ps1`
  - save and apply changes with `yarn keys:save` and `Set-Secrets.ps1`
- `.env` - variables for the selected Key Vault
  - generated by `yarn setup` and `yarn keys:get`
- `.env.development` - override **non-secret** values from .env while developing the project locally
- `.env.production` - override **non-secret** values from .env while building the project locally
- `.env*.local` - override **secret** values for **local use** only

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

Detailed information about how to prepare an app to deploy to K8s is here: (<https://amuniversal.atlassian.net/l/c/AV1H0Sbf>)

Jira Release: <https://amuniversal.atlassian.net/projects/PUZSOC?selectedItem=com.atlassian.jira.jira-projects-plugin%3Arelease-page>

### Semantic Versioning

Within this application, there are files that need to be updated to denote what the current version is. These values should always match each other:

- `/package.json` (update `version`)
- `/deployments/development-charts/Chart.yaml` (update `appVersion`)
- `/deployments/staging-charts/Chart.yaml` (update `appVersion`)
- `/deployments/production-charts/Chart.yaml` (update `appVersion`)

You can use the `bump-versions.yml` workflow to automatically increment the version number in any related files. To run the workflow:

1. Go to the Actions tab in this repository.
1. Select the "Bump Versions" action on the left hand side
1. On the right side on the "Bump Versions" action page, click "Run workflow" and specify how you would want to increment the version number.
1. Click "Run workflow".

This will create a PR with the changes that should already be approved.

### Deploying to Staging

Once the "development" branch has been updated, it will be ready for a staging deployment.

1. Create a pull request to merge the "development" branch into the "main" branch.
1. Once the pull request is approved and merged in, it'll trigger a staging deployment.

### Deploying to Production

Once a pull request is merged into _main_, it passes all CI checks and passes QA, it will be ready for a production deployment.

> The AMU software engineer **must** create a tagged version.

1. The AMU software engineer will take note of the `./deployments/charts/Chart.yaml` version in this repo's main branch.
1. They will update the necessary files (see "Semantic Versioning") and JIRA release to that version.
1. Navigate to the [Releases](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/releases) tab
1. Click the button for "Draft a New Release" and then .
1. Click "Choose a tag" and enter in the version that you updated in the files in the "Semantic Versioning" step above.
1. Enter in the same version number for the "Release Title"
1. Click "Generate Release Notes"
1. Make sure "Set as the latest release" is set
1. Click "Publish release", which will initiate a deploy.

> NOTE: We do not use the vx.x.x pattern for version naming. We simply have the semantic release version number like this: x.x.x
