import React from 'react';
import classNames from 'classnames';
// eslint-disable-next-line camelcase
import { Source_Code_Pro } from 'next/font/google';
import 'src/styles/index.scss';
import customViewports from './customViewports';

const sourceCodePro = Source_Code_Pro({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  weight: ['400', '700'],
});

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: customViewports,
    },
  },
  decorators: [
    (Story) => (
      // Make the Next.js powered Google Fonts available within Storybook
      <div className={classNames(sourceCodePro.variable)}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
