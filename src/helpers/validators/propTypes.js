import PropTypes from 'prop-types';

// TODO-REVIEW: Should we keep this globally?
const imageFormats = () =>
  PropTypes.shape({
    ext: PropTypes.string,
    hash: PropTypes.string,
    height: PropTypes.number,
    mime: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
    url: PropTypes.string,
    width: PropTypes.number,
  });

// TODO-REVIEW: Should we keep this globally?
export const strapiImage = () =>
  PropTypes.shape({
    alternativeText: PropTypes.string.isRequired,
    caption: PropTypes.string,
    createdAt: PropTypes.string,
    ext: PropTypes.string,
    formats: PropTypes.shape({
      large: imageFormats(),
      medium: imageFormats(),
      small: imageFormats(),
      thumbnail: imageFormats(),
      xlarge: imageFormats(),
    }),
    hash: PropTypes.string,
    height: PropTypes.number.isRequired,
    id: PropTypes.number,
    mime: PropTypes.string,
    name: PropTypes.string,
    provider: PropTypes.string,
    size: PropTypes.number,
    updatedAt: PropTypes.string,
    url: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  });

// TODO-REVIEW: Should we keep this globally?
export const validDesignHeading = (props, propName, componentName) => {
  if (props[propName]) {
    const validOptions = ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8'];
    const value = props[propName];
    if (!validOptions.includes(value)) {
      return new Error(
        `${propName} in ${componentName} is not valid design heading`
      );
    }
  }

  return null;
};

// TODO-REVIEW: Should we keep this globally?
export const validBodyStyle = (props, propName, componentName) => {
  if (props[propName]) {
    const validOptions = [1, 2];
    const value = props[propName];
    if (!validOptions.includes(value)) {
      return new Error(
        `${propName} in ${componentName} is not valid body style`
      );
    }
  }

  return null;
};

// TODO-REVIEW: Should we keep this globally?
export const validSubtitleStyle = (props, propName, componentName) => {
  if (props[propName]) {
    const validOptions = [1, 2];
    const value = props[propName];
    if (!validOptions.includes(value)) {
      return new Error(
        `${propName} in ${componentName} is not valid subtitle style`
      );
    }
  }

  return null;
};
export const searchData = () =>
  PropTypes.shape({
    id: PropTypes.number,
    metaDescription: PropTypes.string,
    metaKeywords: PropTypes.string,
    metaTitle: PropTypes.string,
    pageTitle: PropTypes.string,
    slug: PropTypes.string,
  });

export const socialData = () =>
  PropTypes.shape({
    id: PropTypes.number,
    socialDescription: PropTypes.string,
    socialImage: strapiImage(),
    socialTitle: PropTypes.string,
  });
