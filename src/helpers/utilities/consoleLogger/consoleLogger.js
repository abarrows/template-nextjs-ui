import { consola, LogTypes } from 'consola';

// TODO: Need to add query param support for debug=true.
const allLogTypes = [
  ...Object.keys(LogTypes),
  'seo',
  'auth',
  'advertising',
  'analytics',
  'integration',
];

// export default function consoleLogger(message, ...args) {
// const sanitizedLogObjects = args ? JSON.stringify(args) : '';

export const consoleLogger = (message, ...args) => {
  // const sanitizedLogObjects =
  //   args && args.length ? JSON.stringify(args) : undefined;
  // if (sanitizedLogObjects === undefined) {
  //   consola.info(message);
  // } else {
  consola.withTag(process.env.PRODUCT_NAME).info(message, ...args);
  // }
};
// const sanitizedLogObjects = args ? JSON.stringify(args) : '';
// console.log(message, sanitizedLogObjects);
export default consoleLogger;
// }
// const types = {
//   advertising: {
//     backgroundColor: '#00c389', // Freestar Brand Color
//     color: '#fffcf2', // eggshell
//     header: 'Advertising',
//   },
//   analytics: {
//     backgroundColor: '#e6710a', // Google Analytics Brand Color
//     color: 'white',
//     header: 'SEO',
//   },
//   auth: {
//     backgroundColor: '#EDF7EF', // light green
//     color: '#64B969', // fern green
//     header: 'Auth',
//   },
//   default: {
//     backgroundColor: '#421a82', // dark purple
//     color: '#ffffff', // white
//     header: 'Debug',
//   },
//   integration: {
//     backgroundColor: '#d95449', // Github Actions Blue
//     color: '#2ead33',
//     header: 'CI:Tests:Integration',
//   },
//   seo: {
//     backgroundColor: '#421a82', // SemRush Brand Color
//     color: 'white',
//     header: 'SEO',
//   },
// };

// export const applyStyles = ({ backgroundColor, color }) => {
//   const inlineStyles = [
//     `color: ${color}`,
//     `background-color: ${backgroundColor}`,
//     'padding: 2px 4px',
//     'border-radius: 2px',
//   ];

//   return `${inlineStyles.join(';')};`;
// };

// export const createHeader = (type = 'default') => {
//   const { header, backgroundColor, color } = types[type];

//   return [
//     `%c${process.env.APPLICATION_NAME} ${header}`,
//     applyStyles({ backgroundColor, color }),
//   ];
// };
// const sanitizedMessage = (message) => {
//   if (typeof message === 'string') {
//     return message;
//   }

//   return JSON.stringify(message);
// };
// const consoleLogger = ({ type = 'default' }, message, payload = undefined) => {
//   const customHeader = createHeader(type);
//   const allPayloads = Array.isArray(payload) ? payload : [payload];
//   /* eslint-disable no-console */
//   if (process.env.NEXT_PUBLIC_DEPLOY_ENV !== 'production') {
//     if (payload) {
//       console.info(...customHeader, sanitizedMessage(message), ...allPayloads);
//     } else {
//       console.info(...customHeader, sanitizedMessage(message));
//     }
//   }
//   /* eslint-enable no-console */
// };
