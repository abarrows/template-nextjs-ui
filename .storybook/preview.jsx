import React from 'react';

import classNames from 'classnames';
// eslint-disable-next-line camelcase
import { Carter_One, Source_Sans_Pro } from 'next/font/google';

import 'src/styles/index.scss';

import customViewports from './customViewports';

const carterOne = Carter_One({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-carter-one',
  weight: '400',
});
const sourceSansPro = Source_Sans_Pro({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-source-sans-pro',
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
      <div className={classNames(carterOne.variable, sourceSansPro.variable)}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
