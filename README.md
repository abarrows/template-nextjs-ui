![Production](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/aks-production.yml/badge.svg)
![Staging](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/aks-staging.yml/badge.svg)
![Pull Requests](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/pull-request.yml/badge.svg)
![Storybook](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/actions/workflows/chromatic.yml/badge.svg)

# k8sapp_ui_template

This UI template repository serves as a boilerplate/blueprint for any "New World" front-end UI application for our department. All product string references have been agnosticized with detailed onboarding instructions in the README. This template repo will evolve and mature. The goal of maintaining this is to two fold, decrease the time it takes to build new SPA UI's and increase uniformity across our front-end ecosystem. As it matures, more and more configuration, utilities, and logic which embodies what our application specific "standards" are as a team. To update this repository, this question needs to be answered as true:

<blockquote>At this very moment does the team agree that we would we want PROPOSED FEATURE on at least 80% of our "new world" SPA UI applications.</blockquote>

Below is a high level list of things brought over:

1. Environment Configuration
1. Dotenv variables
   - Development
   - Staging
   - Production
1. NVM (Node Version Manager)
1. Docker UI Image (Docker-Compose coming soon!)
1. .github configuration

- PR template
- README template
- Basic Pull Request Workflow
- Basic CI Chores Workflow for Dependabot and Auto-updating branches
- Deployment Workflow for Development, Staging, and Production
- Caching actions for dependencies
- CODEOWNERS
- .gitignore

5. Linting and Formatting

- Eslint
- Stylelint
- Prettier
- Browserlistrc

4. Package.json

- Babel Transpilation
- Next.js
- React
- Global Component Folder Structure (Commons, modules, module children, sections, and pages)
- outputToConsole Utility (Custom Logger for console logs)
- Global propType validations
- Global error page

6. Automated Tests and CI Checks

- Jest (1 example passing test)
- Cypress (1 example passing test)
- Link Checker
- Size Checker

7. Basic Scaffold for UI Capabilities

- Sentry
- Vindicia
- B2C
- Sentry Error Reporting
- General Error Boundary
- Nextjs Sitemap with Robots.txt generation
- Redirects (With a few examples)

Related links:

- Deploy Environments
  - [Staging](https://staging.amuproduct.com/)
  - [Production](https://www.amuproduct.com/)
- Swagger docs for AmuProduct Service
  - [Staging](https://staging.service.amuproduct.com/swagger/index.html)
  - [Production](https://service.amuproduct.com/swagger/index.html)
- Strapi CMS Login
  - [Staging](https://staging.amuproduct-cms.amuniversal.com/admin/auth/login)
  - [Production](https://amuproduct-cms.amuniversal.com/admin/auth/login)
- [Storybook](https://www.chromatic.com/library?appId=TODO-ONBOARDING:input-storybook-instance)
- [Jira Project](https://amuniversal.atlassian.net/browse/TODO-ONBOARDING:input-jira-instance)
- [Confluence Space](https://amuniversal.atlassian.net/l/c/TODO-ONBOARDING:input-confluence-space)
- [Sharepoint Group](https://amutechnology.sharepoint.com/sites/TODO-ONBOARDING:input-sharepoint-slug)
- [Sentry Error Reporting](https://sentry.io/organizations/andrews-mcmeel-universal/issues/?project=TODO-ONBOARDING:input-sentry-project-id)

---

## Install

```bash
git clone https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template.git
```

You will need:

- [Homebrew](https://brew.sh/) #For Macs
- [Chocolatey](https://chocolatey.org/install) #For Windows
- [NVM & Node](https://github.com/creationix/nvm)
  - Install Node v14.1.0 or above, preferably the version listed in the `.nvmrc` file
- [Yarn](https://yarnpkg.com/): `brew install yarn`
- [Docker](https://www.docker.com/): `brew cask install docker` #For Macs or `choco install docker-desktop` #For Windows
- [Powershell_7]: `brew install --cask powershell` #For Macs or `choco install powershell-core` #For Windows

If you have never setup PowerShell Core on your computer before, you will need to do the following:

1. After you install PowerShell Core, open a terminal and type `pwsh` to to start powershell.
2. From a PowerShell session, type `Install-Module Az`.   Once the Azure module is installed, type `Import-Module Az`.
3. Type `Connect-AzAccount` to log into Azure.   Every 30 days or so you may be required to run `Connect-AzAccount` to login.

## Azure Key Vaults

appname-development
appname-staging
appname-production

Azure Key Vaults are created or updated with the Create-KeyVaults.ps1 script.   This script contains sensitive information and thus should never be checked into GitHub without being
encrypted first.   For Mac and Linux users (Including Windows Subsystem for Linux), you can use the encryptkeyvaults.sh and decryptkeyvaults.sh to encrypt and unencrypt the
Create-KeyVaults.ps1 PowerShell script.  For Windows, you will need to download and install <https://gpg4win.org/download.html>.   The secret for encrypting and unencrypting the file is
in 1Password under the .env files encryption secret
---

## Usage

- Install dependencies: `yarn install`
- Start app for development: `yarn dev`
- Start app for production: `yarn build && yarn start`
- Open app in browser: `open http://localhost:3000/`

### Environment Variables

> Sensitive information should **ALWAYS** be stored in a safe place, such as in GitHub Secrets or in Azure Secrets.

#### About .env

The `.env` file should not be checked into version control.
To generate a local `.env` file, from the root of the project directory start a PowerShell terminal by typing pwsh and hitting enter.  Run the Get-LocalEnv.ps1 script and specify the keyvault to generate local environmental
variables from.  Example: ./Get-LocalEnv.ps1 -KeyVaultName 'appname-development'

Next.js has [built-in support](https://nextjs.org/docs/basic-features/environment-variables) for environment variables. It will automatically load variables from one of the following files for the matching Node environment, which are used to set default values for **non-sensitive** information:

```
.env.development
.env.test
.env.production
```

These variables can be overridden with `.local` versions of those files, such as `.env.development.local`. Local versions should not be checked into source control, and are in our `.gitignore`. We similarly ignore `.env` as a convention, preferring to use more specific files for storing environment variables.

#### Adding new variables

Depending on where the variable is stored, additional steps may be needed to make it available to the app. If the variable is sourced from GitHub Secrets or Azure Secrets:
Typically Environmental Variables should be stored in Azure KeyVaults with the Create-KeyVaults.ps1 script.   There should be one Key Vault for every environment for an app.
Every secret stored in a Azure KeyVault should have a ContentType set for it.   ContentTypes can be: 'BuildArg', 'Env', or 'BuildArg Env'

A ContentType of BuildArg means the secret is a Docker Build Argument.   A ContentType of Env means that the secret is an Environmental Variable.   A ContentType of BuildArg Env
means the secret is both a Docker Build Argument and an Environmental Variable.   Azure requires secret names to be lowercase kebabcase (example: The secretname for a DB_CONNECTION_STRING should be db-connection-string).   When Env files are created or the application is deployed, the lowercase kebabcase secret name will be converted to
Uppercase SnakeCase (example: the secret name db-connection-string gets converted to DB_CONNECTION_STRING).

- Reference: <https://www.saltycrane.com/blog/2021/04/buildtime-vs-runtime-environment-variables-nextjs-docker/>

#### Using variables

To access environment variables in **server-side code**:`process.env.VARIABLE_NAME`

To access environment variables in **client-side code**: `process.env.NEXT_PUBLIC_VARIABLE_NAME`

### Docker

We use the Docker container to build and deploy this project. The Docker container is also a useful local development tool, because by building and then running it locally, it automatically builds for `production` and can help simulate that environment. When running it, be aware that hot reloading will not work, and any changes you make will not be reflected until the Docker container is stopped and rebuilt.

You can check the [Example Dockerfile for a Node.js project](https://github.com/mhart/alpine-node/tree/43ca9e4bc97af3b1f124d27a2cee002d5f7d1b32#example-dockerfile-for-your-own-nodejs-project) section in [mhart/alpine-node](https://github.com/mhart/alpine-node) for more details.

#### How to use

**Build** the image with Docker: `yarn docker:build`

or

```bash
# build
docker build -t k8sapp_ui_template .
```

**Run** the Docker image: `yarn docker:run`

or

```bash
# run
docker run --rm -it \
  -p 3000:3000 \
  k8sapp_ui_template
```

**Exit** the running Docker container:

1. Switch to [daemon mode instead of interactive mode](https://docs.docker.com/v1.7/articles/basics/#running-an-interactive-shell): `ctrl + P` then `ctrl + q`
2. Get the Container ID: `docker ps`, then copy the CONTAINER_ID
3. Stop the container: `docker stop [paste in the CONTAINER_ID]`

#### Updating the Node Version

Whenever the Node version is updated, it needs to be updated to the same version within both the `Dockerfile` and `.nvmrc`. Typically the Dockerfile's Node version is updated by [Dependabot](https://app.dependabot.com/accounts/Andrews-McMeel-Universal). When that pull request is created, pull down that branch, update the listed version in `.nvmrc` to match the new one in the `Dockerfile`, and push the change.

---

## Next.js Essentials

This app is built with Next.js and is Server Side Rendered (SSR). There are many important concepts to keep in mind when working in Next.js:

- [Routing](https://nextjs.org/docs/routing/introduction)
- [Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes)
- [Pages](https://nextjs.org/docs/basic-features/pages)
- [Data Fetching](https://nextjs.org/docs/basic-features/data-fetching)
- [API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Dynamic Import](https://nextjs.org/docs/advanced-features/dynamic-import)

---

## General Development Guidelines

We follow the [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react) with few deviations, and ESLint is configured to use their rules. A few basic guidelines that the linter won't catch and are worth mentioning:

- Filenames and component names should match, and should likewise be imported with the same name
  - Higher Order Components are prefixed with "with": `with[HOC].jsx`
  - Custom hooks are prefixed with "use": `use[Hook].jsx`
- Root components of a directory should be named `index.jsx` and imported with the directory name
  - The only exception to this is for pages, see Next.js Essentials above
  - `index.jsx` should only contain a single `import` and `export`.
- 1 component per file
- Functions and variables belong within the component
  - If the function/variable should be separate, extract that function into a helper file
- 1 CSS Module per component directory
  - If there's a need for shared styles across a parent directory, like `/buttons`, create an `scss` directory for those modules and prefix their names with an underscore and the parent directory's name. For instance: `/buttons/scss/_buttonsMixins.module.scss`
- Prefer absolute paths over relative paths, unless importing a sibling CSS Module or component for testing
- Props should always use destructuring, and should rarely be an Object
- Prefer using `async`/`await` over `Promise`

---

## App Structure

```
data/
  [...data not sourced from amuproduct]
src/
  components/
  components/
  commons/
    [namespace-name]/                 ex: buttons/
      [CommonName]/                     ex: IconButton/
        [CommonName].jsx                  ex: IconButton.jsx
        [CommonName].module.scss          ex: IconButton.module.scss
        [CommonName].stories.jsx          ex: IconButton.stories.jsx
        index.jsx
    [CommonName]/                     ex: Modal/
      [CommonName].jsx                  ex: Modal.jsx
      [CommonName].module.scss          ex: Modal.module.scss
      [CommonName].stories.jsx          ex: Modal.stories.jsx
      index.jsx
  modules/
    [namespace-name]/                 ex: games/
      [ModuleName]/                     ex: GameCard/
        [ModuleName].jsx                  ex: GameCard.jsx
        [ModuleName].module.scss          ex: GameCard.module.scss
        [ModuleName].stories.jsx          ex: GameCard.stories.jsx
        [ModuleChildName].jsx             ex: CardImage.jsx
        [ModuleChildName].module.scss     ex: CardImage.module.scss
        index.jsx
  sections/
    [namespace-name]/                 ex: games/
      [ModuleName]/                     ex: CardGrid/
        [SectionName].jsx                 ex: CardGrid.jsx
        [SectionName].module.scss         ex: CardGrid.module.scss
        [SectionName].stories.jsx         ex: CardGrid.stories.jsx
        index.jsx
    [ModuleName]/                     ex: FullWidth/
        [SectionName].jsx               ex: FullWidth.jsx
        [SectionName].module.scss       ex: FullWidth.module.scss
        [SectionName].stories.jsx       ex: FullWidth.stories.jsx
        index.jsx
  page-templates/
    [...persistent page layouts]
  pages/
    api/
      [...API routes]
    _app.jsx
    index.jsx
  contexts/
    DemoProvider/
      DemoProvider.jsx
      index.jsx
  helpers/
    hooks/
      [...custom hooks]
    utils/
      [...various utility functions]
```

---

## Component Structure

### Common Components

**Responsibilities**

- Render content
- Handle limited presentation logic
- Usable in any component

**Guidelines**

- Can render Common components
- Can import SCSS modules
- Can accept functions passed as props
- Cannot define business logic
- Cannot handle client-side API interactions
- Cannot have outer margin or otherwise influence sibling/parent components

### Module Components

**Responsibilities**

- Handle business logic
- Hydrate nested components with props
- Define nested component layout

**Guidelines**

- Can render Module Child components and Common components
- Can be rendered in multiple Section components
- Can import SCSS modules
- Should handle all client-side API interactions
- Should attempt to handle all Module and Module Child business logic
- Cannot have outer margin or otherwise influence sibling/parent components

### Module-Child Components

**Responsibilities**

- Render content
- Handle limited presentation logic
- Break Module down into smaller pieces to improve readability and testability

**Guidelines**

- Can render sibling Module Child components and Common components
- Can import SCSS modules
- Can accept functions passed as props
- Cannot handle client-side API interactions
- Cannot be rendered in multiple Module components
- Cannot have outer margin or otherwise influence sibling/parent components

### Sections

**Responsibilities**

- Hydrate nested components with page props
- Define nested component layout

**Guidelines**

- Can render Module components and Common components only
- Can import SCSS modules for layout only
- Can handle business logic to conditionally display nested components
- Can handle business logic to update props shared between multiple nested components

### Pages

**Responsibilities**

- Hydrate Section components with server-side and static props
- Define page template

**Guidelines**

- Can render Section components only
- Can handle business logic to conditionally display Section components
- Cannot import SCSS modules

### PropTypes

All components use [PropTypes](https://github.com/facebook/prop-types) to check and document required and optional props. The most stringent prop checking is done at the component level, while containers and pages are allowed more flexibility to account for managing payloads from API requests.

Additionally, add descriptive documentation to each PropType, which will be picked up by Storybook and used in the "Docs" tab.

```javascript
DemoComponent.propTypes = {
  /** DemoComponent contents. */
  children: PropTypes.node,
};
```

### Hooks and Functional Components

As a rule of thumb, we write functional components (using arrow functions) over class components. This is because functional components are easier to read, and because we prefer using [Hooks](https://reactjs.org/docs/hooks-intro.html) over [Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html) methods.

Our ESLint config is set up to validate hooks, including `useEffect` dependency arrays. Before disabling a warning because you believe something doesn't belong in deps, read through [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/) and try to find another solution. It's ok to disable a linter if you have good reason (leave a comment explaining why if that reason isn't immediately obvious), but that particular rule should be disabled as a last resort.

Custom hooks directory: `src/helpers/hooks`

### State Management

Our preferred way to manage global state is with [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) and [React Context](https://reactjs.org/docs/context.html). Always set up separate Contexts to handle `state` and `dispatch`, because when those values are updated, it will trigger a rerender in any components consuming that data, and we can be more specific about whether a component needs `state`, `dispatch`, or both.

Global state should be used for managing data that is needed app-wide, whereas non-global or presentational state belongs within the container or component.

For global state wrap the app component in a Context provider, for state scoped to multiple components wrap the container in a Context provider, and for state scoped to a single component prefer the `useState` or `useReducer` hooks.

Contexts are kept in `src/contexts`.

- Reference: <https://kentcdodds.com/blog/how-to-use-react-context-effectively>
- Reference: <https://www.robinwieruch.de/react-state-usereducer-usestate-usecontext>
- Reference: <https://hswolff.com/blog/how-to-usecontext-with-usereducer/>

### Styling

Wherever possible we prefer to style components with SCSS instead of inline styles or any flavor of CSS-in-JS. We make heavy use of Flexbox and media queries for responsive designs, which helps enforce a separation of concerns between content and style.

Additionally, we use the [classnames package](https://github.com/JedWatson/classnames) to assist in applying styles within the JSX components.

#### SCSS Modules

We use SCSS Modules to style components. SCSS Modules are CSS Modules, but with all the power of SCSS (nesting, variables, etc). SCSS Modules scope styles to just that component, as opposed to making them globally available.

When global styles are needed, import them in `src/scss/index.scss`

SCSS variables can be exported for use in Components. These variables are compiled and thus are not dynamic, but are useful when a static value is needed. Always prefix SCSS variables with `var_` and use camelCase for easy identification. Note that exported variables are strings.

```scss
// fileName.module.scss
:export {
  var_navHeight: 84px;
  var_burgerSize: $burger-size;
}
```

```js
// ComponentName.jsx or file.js
const navHeight = styles.var_navHeight;
const burgerSize = styles.var_burgerSize;
```

- Reference: <https://medium.com/clover-platform-blog/modular-scss-and-why-you-need-it-6bb2d8c40fd8>
- Reference: <https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css>
- Reference: <https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet>

#### CSS Variables (TODO)

Next.js has limited support for CSS Variables, we are currently exploring options on whether or not we can use them, and if so, how best to use them. In the meantime, use SCSS variables or modify style properties directly with JS.

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

Despite using SCSS Modules and not having to worry about global scope, BEM is still useful for conveying intent and context for a given module's classes.

#### Bootstrap

This project uses [Bootstrap v5](https://v5.getbootstrap.com/docs/5.0/getting-started/introduction/) as a styling toolkit. We make heavy use of their mixins and utilties, especially their [breakpoint mixins](https://v5.getbootstrap.com/docs/5.0/layout/breakpoints/#media-queries) and variables from the custom Boostrap theme.

We do not style Bootstrap's classes directly, if a Bootstrap class needs to be modified instead customize the theme file's variables. If that is not sufficient, style like normal within the appropriate SCSS module.

Please note that while Bootstrap v5 does offer vanilla Javascript to provide functionality for components like dropdowns, we don't expect a need for that and are only using Bootstrap as a styling framework.

Import Bootstrap partials for global use: `src/scss/index.scss`
Custom theme file: `src/scss/_custom.scss`

---

## Testing

Test files should be stored in the same location as the original file they are testing, with the exception of Cypress tests (see below).

Run tests with: `yarn test`

We run tests automatically with GitHub Actions on every Pull Request, failing tests will need to be addressed before a PR can be merged.

### Jest

We use [Jest](https://jestjs.io/en/) for unit tests and [snapshot tests](https://jestjs.io/docs/en/snapshot-testing). To update a snapshot, run `yarn test -u`. Snapshots should only be updated when the component was purposefully modified, not simply because the tests are failing.

For more information about working with Jest, this is a [friendly and useful guide](https://flaviocopes.com/jest).

### React Testing Library

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro) covers component tests in way more like how a user would interact with the component. We use `data-testid` within components as a convenient method for identifying DOM elements with React Testing Library.

### Cypress

We use [Cypress](https://www.cypress.io/) as our end-to-end testing framework. We also use `data-testid` in these tests for targeting. All Cypress tests are contained in `cypress/integration/` directory as `.spec.js` files.

Cypress tests can be run headless by running `yarn cy:headless`, or you can run the Cypress ui locally with `yarn cy:ui`.

- Reference: <https://docs.cypress.io/guides/core-concepts/introduction-to-cypress>
- Reference: <https://docs.cypress.io/guides/references/best-practices>
- Reference: <https://www.cypress.io/blog/2021/01/20/running-cypress-on-the-apple-m1-silicon-arm-architecture-using-rosetta-2/#running-cypress-under-rosetta-2>

---

## Storybook

We use [Storybook](https://storybook.js.org/) for component documentation and style guides. Global components should each have stories, while namespaced or container components can have stories if needed.

Storybook can be built as a static app by running `yarn storybook:build` and run locally with `yarn storybook:run`.

---

## Sentry

[Sentry](https://docs.sentry.io/) is our error reporting tool for this UI. It is configured
to log both client and server-side errors, and only runs in a production
environment. Sentry will automatically log most errors, but as a best practice
we manually capture exceptions in places where logging is more important. When
doing so, you only need to import the `@sentry/nextjs` package. There is a
`sentry.client.js` and `sentry.server.js` which are responsible for both sides
of our application. All 500 errors should be captured and upon the product
owner's request, all 404 errors should also be captured.

To capture an exception:

```js
import * as Sentry from '@sentry/nextjs';

// send an error returned from something else
Sentry.captureException(error);

// or send a new error
Sentry.captureException(new Error(`this is broken`));
```

---

### Customer Support Integration (Zendesk)

#### Support Link Creation

Within
[/src/helpers/utils/generateSupportUrl.js](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/blob/staging/src/helpers/utils/generateSupportUrl.js)
we have created a helper to generate any links that navigate to our support
knowledge base. The following data is appended using query string parameters:

1. ticket_form_id - This is the ID of the AmuProduct Form in Zendesk.
2. associated_url - The current relative url of the user before navigating to
   customer support.
3. user_email - The current email being used by the user
4. user_id - The current GUID or email address being used by the user
5. membership_level - The current membership_level of the user. IE: Subscribed,
   Cancelled, Expired, Registered, and Guest
6. device_type - The current device type being used by the user
7. operating_system - The current operating_system being used by the user
8. browser - The current browser being used by the user
9. affects_versions - The current Release Version of the application. See [Releases](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/releases)

_An example of this URL in practice is the help link under \_My Account_:\_

```
https://support.amuproduct.com/hc/en-us/?ticket_form_id=TODO-ONBOARDING:Fill-in-form-id&associated_url=%2Fmy-account&user_email=flastname%40amuniversal.com&user_id=flastname%40amuniversal.com&membership_level=Registered&device_type=Desktop&operating_system=Mac%20OS&browser=Chrome&affects_versions=0.8.0
```

#### Zendesk Support Form

Within [this brand
template](https://support.amuproduct.com/theming/editor/1a810449-4827-41a8-bba3-aa630f8751e9)
(Password Credentials are in 1password) in the [zendesk admin](https://universaluclick.zendesk.com/agent/admin/overview), we
have some logic in the: 1.[header.hbs](https://support.amuproduct.com/theming/editor/1a810449-4827-41a8-bba3-aa630f8751e9/templates/header.hbs)

- Saves the parameters into local storage values for the user. 2.[new_request_page.hbs](https://support.amuproduct.com/theming/editor/1a810449-4827-41a8-bba3-aa630f8751e9/templates/new_request_page.hbs)
  - This logic retrieves the local storage values and injects them into the
    fields, then hides them from the user.

#### Jira Ingestion

If customer support deems the user's request as important enough,
they can use all this information to generate a JIRA Issue. All the fields gets
passed in so the producer can further groom the issue. Within the sidebar of
any ticket in JIRA, you'll have access to this information on the Zendesk side.

## Releases

### Versioning

For each production release be sure to increment the version number in the following files:

- package.json
- deployments/charts/production-charts/Chart.yaml (update `appVersion`)

### Deployment

Once the versions are updated create a [Release in
GitHub](https://github.com/Andrews-McMeel-Universal/k8sapp_ui_template/releases/new),
target the `production` branch and use the version for the `tag version` and
release title. Include a link to the related Jira release in the description.
Publish the GitHub Release to trigger a deploy through GitHub Actions.

#### Sitemap and Robots.txt generation

We use a package called [next-sitemap](https://www.npmjs.com/package/next-sitemap#installation) for which is responsible for generating our
sitemap(s) and robots.txt file. In our package.json file, a postbuild command
generates both of these **after** the application has been built.

##### How it is configured

During the "docker:build" command, you will notice that the following gets executed.

```javascript
yarn postbuild
```

Upon execution, the root folder contains a configuration file
called next-sitemap.js. This file serves as a base configuration and generates
all site URLs except the paths to each brand. Due to the dynamic categories and
dynamic items underneath, we needed to create some logic that iterates over
these brand slugs and generates an additional sitemap. The logic for this is
contained in a folder called _"dynamic-sitemap.xml"_ Within the index.js file,
we use

```javascript
getServerSideProps;
```

To first retrieve the brands from our [Next.js brand object
endpoint](https://service.amuproduct.com/swagger/index.html#features).
We then iterate over the active brands and format them for sitemap generation. A
bonus from using this approach is that we will be able to retrieve the
last modified date for each of the brands. This improves our SEO and will
supplement the normal sitemap generation that happens during the deploy to production.

---

## Contributing

New branches should always be related to a Jira ticket. It should be prefixed with the issue key and a short description, like AMUPRODUCT-123-sample-branch. To merge the development branch into `staging`, create a Pull Request and fill out the description according to the supplied template. Using your best judgement, tag as a reviewer anyone who might have interest in or should otherwise be informed of the work, and allow them time to effectively review the work. Once the PR is approved, merge commit into `staging`. That branch will automatically be deleted after merging.

On every PR, we do run tests and automatically format the code with Prettier. A PR will not be able to be merged until at least 1 reviewer with write access has approved it and all tests are passing. If a PR is updated with a new commit, stale reviews will be dismissed.

---

## License

None

## Local Development

To start the service locally:

1. From the root project directory, run docker-compose up
   The brand can be seen at <https://localhost:3000>

## Contributing

### Issue per Branch

For any code changes in this repo, we ask that you create a branch per Jira Issue. This is a general best practice and promotes smaller/incremental changes that are easily deployed and debugged. Our default branch naming pattern for this is the following:

```
jiraIssueType/AMUPRODUCT-1234/hyphenated-issue-summary
```

To illustrate this, if a simple copy change was raised by the product owner in JIRA. The issueType would be "maintenance" and we will use the example issue key: CAN-1234

### Smart Commits

There are certainly instances where the product owner may raise several very small issues and creating a seperate branch for each is not exactly feasible. As a fallback, you can still trigger our automation by using what are called [smart commits](https://confluence.atlassian.com/fisheye/using-smart-commits-960155400.html).

JIRA Smart commits automagically (a github integration) sends information back to the JIRA project that the product owner is working on. We have setup our workflows to automatically update the status for you on the ticket and provide development information in the ticket. All that is required is when you commit changes, you include the Jira issue key in this exact format:

```
[JIRA-1234]
```

To illustrate this, Say you had a single commit for four separate issues. Your commit message would appear like this:

```
[AMUPRODUCTJIRAKEY-1234], [AMUPRODUCTJIRAKEY-1235], [AMUPRODUCTJIRAKEY-1236], [AMUPRODUCTJIRAKEY-1111] Knocked out the 4 copy edits needed within the brand instructions.
```

### Semantic Versioning

Within this application, there are three locations that are updated to denote what the current version is. These three values should always match each other:

```
/package.json
/deployments/charts/Chart.yaml
```

### Pull Requests

Once you have committed your effort in a separate branch, you will need to raise a pull request in github. **Please** follow the pull request template format and write a brief description of any technical details that should be known. Below are relevant links that give you an opportunity to include all JIRA issues that are contained within the PR. The recommended title for the pull request is typically just the branch name. Again, if a single issue per branch is not feasible, including a brief title of the effort is acceptable.

To illustrate this, here would be the complete PR template filled out (based on our above examples):

#### Pull Request Title

jiraIssueType/AMUPRODUCTJIRAKEY-1234/hyphenated-issue-summary

#### Description

Completed the 4 copy edits needed within the amuproduct instructions

#### Relevant Links

- [AMUPRODUCTJIRAKEY-1234]
- [AMUPRODUCTJIRAKEY-1235]
- [AMUPRODUCTJIRAKEY-1236]
- [AMUPRODUCTJIRAKEY-1111]

### Reviewers and Supportive information

You do not need to fill in the reviewers or assignees. Our CODEOWNERS automation takes care of who will need to review it. As long as a AMU software engineer reviews it and the other checks pass, we will take care of merging the pull request into staging and production.

### Deployment to Staging

Once approved and an AMU software engineer has merged this pull request in, the following will happen within our CI.

1. Your branch will be merged into staging
2. All jira tickets you have included in the branch names or commits will have their statuses automatically updated to **In QA Review**. This communicates to the product owner that it is QA testing.
3. Once the product owner has reviewed these issues and marked each of their statuses as **Approved**, we will begin preparing a production release.

### Deployment to Production

1. When the product owner has all issues marked as approve, the AMU software engineer will take note of the package.json version in this repo's staging branch.
2. Using this version, he/she will update the JIRA release to that noted version. IE: k8sapp_ui_template_1.0.2
3. A pull request from staging to production will be raised with the following information.

### Pull Request Title

1.0.2

### Description

_AMU software engineer will copy over the JIRA release notes._

### Relevant Links

Jira Release: <https://amuniversal.atlassian.net/projects/AMUPRODUCTJIRAKEY/versions/12711/tab/release-report-all-issues>

### Creating an Official Release

Once a pull request is merged into _staging_, it passes all CI checks and passes
QA, it will be ready for being released to production. The AMU software engineer **must** create a tagged version. Navigate to the
[product releases in
github](https://github.com/Andrews-McMeel-Universal/AMUPRODUCTJIRAKEY/releases)
Click the button for "Draft a New Release" and then click "Auto-generated
Release Notes". _NOTE: We do not use the vx.x.x pattern for version naming. We
simply have the semantic release version number like this: x.x.x_

### Template References

There are a few repeated commented slugs repeated throughout the application.
Below are the intended uses for them.

- _TODO-ONBOARDING:_ This denotes a todo task which should be done after a new UI repo has been created. _IE: Create sentry project and paste in token value._
- _TODO-REVIEW:_ This denotes a sidebar discussion topic for front-end
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

1. _amuproduct_ Find and replace all references of this with the real
   product's name.
2. _AMUPRODUCTJIRAKEY_ Find and replace all references of this with the real
   JIRA project key.
3. _k8sapp_ui_template_ Find and replace all references of this with the real
   repository name.
4. _TODO-ONBOARDING:_ Review all instances of this and follow the TODO
   instructions for the new product.
5. Once all is finished, run the **preflight** command which executes all setup scripts,
   tests, linting, etc. to ensure that everything works correctly without errors:

```javascript
yarn preflight
```
