import isInList from 'src/helpers/utilities/strings/comparison/isInList';

const blockList = [
  'https://**.googlesyndication.com',
  'https://**.ingest.sentry.io',
  'https://cdn.privacy-mgmt.com',
  'https://fw-cdn.com',
  'https://googleads.g.doubleclick.net',
  'https://script.crazyegg.com',
  'https://utilities.amuniversal.com/unsupportedbrowsers/index.js',
  'https://www.google.com/ads',
  'https://www.google-analytics.com',
  'https://www.googletagmanager.com',
];

// Use this before other blockers and visiting the page for best results
// Requires absolute URL, glob patterns are not matched
const requestBlockers = async (page, additionalUrlsToBlock = []) => {
  await page.route('**/*', (route) => {
    const requestUrl = route.request().url().toLowerCase();
    const fullBlockList = blockList.concat(additionalUrlsToBlock);
    const isBlocked = isInList(requestUrl, fullBlockList);
    return isBlocked ? route.abort() : route.continue();
  });
};

export default requestBlockers;
