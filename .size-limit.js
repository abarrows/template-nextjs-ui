const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Get all pages and their chunks
const bundle = require('./.next/build-manifest.json');
const pageNames = Object.keys(bundle.pages).filter(
  (name) => name !== '/_app' && name !== '/_error' && !name.endsWith('.xml')
);

// Separate shared dependencies
const sharedDependencies = bundle.pages['/_app'];

// Build a list of dependencies for each page for size-limit to evaluate
const pages = pageNames.map((name) => {
  const uniqueChunks = bundle.pages[name].filter(
    (dependency) => !sharedDependencies.includes(dependency)
  );

  return {
    name,
    limit: '100 kb',
    path: uniqueChunks.map((chunk) => `.next/${chunk}`),
  };
});

module.exports = [
  {
    name: 'Shared by All',
    limit: '100 kb',
    path: sharedDependencies.map((dependency) => `.next/${dependency}`),
  },
  ...pages,
];
