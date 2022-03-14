import is from 'is_js';

const types = {
  advertisement: {
    backgroundColor: '#006a0c', // dark-green
    color: '#fffcf2', // eggshell
    header: 'Ads',
  },
  default: {
    backgroundColor: '#fffcf2', // eggshell
    color: '#00233d', // dark-blue
    header: 'Debug',
  },
};

export const applyStyles = ({ backgroundColor, color }) => {
  const inlineStyles = [
    `color: ${color}`,
    `background-color: ${backgroundColor}`,
    'padding: 2px 4px',
    'border-radius: 2px',
  ];

  return `${inlineStyles.join(';')};`;
};

export const createHeader = (type) => {
  const { header, backgroundColor, color } = types[type || 'default'];

  return [`%cAmuProduct ${header}`, applyStyles({ backgroundColor, color })];
};

const outputToConsole = ({ type, message, payload }) => {
  const customHeader = createHeader(type);
  const allPayloads = is.array(payload) ? payload : [payload];

  /* eslint-disable no-console */
  if (process.env.NEXT_PUBLIC_DEPLOY_ENV !== 'production') {
    if (payload) {
      console.info(...customHeader, message, ...allPayloads);
    } else {
      console.info(...customHeader, message);
    }
  }
  /* eslint-enable no-console */
};

export default outputToConsole;
