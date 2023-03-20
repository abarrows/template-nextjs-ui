import { getServerSideSitemap } from 'next-sitemap';

export async function getServerSideProps(context) {
  // 1. Retrieve the content data from the server endpoint
  // 2. Filter out just active brands
  // 3. Iterate over the active items and populate the sitemap entries

  // TODO-REVIEW: Need to discuss with the team.
  // TODO-ONBOARDING: Need to add in the proper UI structure.
  // const activePages = activeItems.map((item) => ({
  //   changefreq: item.changefreq || 'daily',
  //   priority: item.priority || 0.7,
  //   path: `${process.env.BASE_URL}/${item.slug}`,
  // }));

  const activePages = [];
  return getServerSideSitemap(context, activePages);
}

export default function Sitemap() {
  return null;
}
