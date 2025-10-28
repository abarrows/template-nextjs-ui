const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    // Essentials addon provides several addons, see the list before adding more
    // https://storybook.js.org/integrations/tag/essentials/
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    // https://storybook.js.org/recipes/next/
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
