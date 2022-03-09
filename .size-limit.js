const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Get all pages and their chunks
const bundle = require('./.next/build-manifest.json');
const pageNames = Object.keys(bundle.pages);

// Build a list of dependencies for each page for size-limit to evaluate
const pages = pageNames.map((name) => {
  const pageChunks = bundle.pages[name].map(
    (dependency) => `.next/${dependency}`
  );

  return {
    name,
    limit: '500 kb',
    path: pageChunks,
  };
});

module.exports = [
  {
    name: 'Global Critical CSS (included in page calculations)',
    limit: '100 kb',
    path: '.next/static/css/*.css',
  },
  ...pages,
];
