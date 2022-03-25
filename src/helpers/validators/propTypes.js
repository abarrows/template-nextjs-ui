import PropTypes from 'prop-types';

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
