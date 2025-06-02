# Automated Testing Principles

This document outlines the principles and best practices for writing automated tests in our codebase. These guidelines help ensure consistency, reliability, and maintainability of our tests.

## General Principles

1. **Isolation**: Each test should be isolated and independent. Avoid dependencies between tests to ensure they can run in any order.
2. **Mocking**: Use mocks to simulate external dependencies and control the environment. This helps in testing components in isolation.
3. **Descriptive Naming**: Test names should clearly describe the functionality being tested. This makes it easier to understand the purpose of each test.
4. **Setup and Teardown**: Use `beforeEach` and `afterEach` hooks to set up and tear down the test environment. This ensures a clean state for each test.
5. **Assertions**: Use assertions to verify the expected outcomes. Ensure that assertions are specific and provide meaningful feedback when they fail.
6. **Coverage**: Aim for high test coverage, but prioritize meaningful tests over achieving 100% coverage. Focus on critical paths and edge cases.

## Testing Libraries and Tools

- **React Testing Library**: For testing React components.
- **Jest**: For running tests and assertions.
- **MSW (Mock Service Worker)**: For mocking API requests.

## Best Practices

### Component Testing

- **Render Components**: Use `render` from React Testing Library to render components.
- **Query Elements**: Use queries like `getByTestId`, `getByRole`, and `findByText` to select elements.
- **Simulate User Interactions**: Use `fireEvent` and `userEvent` to simulate user interactions like clicks and typing.
- **Wait for Async Operations**: Use `waitFor` to handle asynchronous operations and ensure the component updates correctly.

### Mocking

- **API Mocks**: Use MSW to mock API requests and responses. This allows testing components without relying on real API endpoints.
- **Function Mocks**: Use Jest to mock functions and control their behavior. This is useful for testing components that depend on external functions.

### Migrating and Refactoring Hard-coded Mocks

No you cannot change the @src/mocks/handlers file in any way since it's generated. Review the swagger to examine our single source of truth on the structure of our api data and then either update the type definitions (which are still hard-coded) and/or change the file which contains the error. When mocking data in an automated test or storybook story, always use the corresponding mocking function in the @src/mocks/handlers file and remove any hardcoded mocking data at every opportunity you have. The goal is to use automated fetching of the current API Open API spec and then msw-auto-mock generation of mocking functions for each endpoint. In circumstances where we need to rely on specific key value pairs on a generated object, use the generated object as a base object and then extend whatever key value pair needs to have a more specific value

### Example Test Structure
