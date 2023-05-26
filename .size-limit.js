const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Next.js supports both the app router and pages router, so variable names
// use "pages" to reference the pages router and "app" to reference the app
// router. Both can be used within the same app. See
// https://nextjs.org/docs/app/building-your-application/routing#the-app-directory
// for more info.

// Get all app and pages chunks
const appBundle = require('./.next/app-build-manifest.json');
const pagesBundle = require('./.next/build-manifest.json');

// Shared dependencies that are shared on all routes, regardless of which
// router is used
const sharedDependencies = pagesBundle.pages['/_app'];

// Dependencies for app and pages
const appRoutes = Object.keys(appBundle.pages).filter(
  (name) => !name.endsWith('.xml')
);
const pagesRoutes = Object.keys(pagesBundle.pages).filter(
  (name) => name !== '/_app' && name !== '/_error' && !name.endsWith('.xml')
);

// Build a list of dependencies for each page (and its related files) for
// size-limit to evaluate
const appChunks = appRoutes.map((name) => {
  const uniqueChunks = appBundle.pages[name].filter(
    (dependency) => !sharedDependencies.includes(dependency)
  );
  return {
    name,
    limit: '100 kb',
    path: uniqueChunks.map((chunk) => `.next/${chunk}`),
  };
});

const pagesChunks = pagesRoutes.map((name) => {
  const uniqueChunks = pagesBundle.pages[name].filter(
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
  ...appChunks,
  ...pagesChunks,
];
