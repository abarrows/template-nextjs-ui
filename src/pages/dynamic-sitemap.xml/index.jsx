import { getServerSideSitemap } from 'next-sitemap';

export async function getServerSideProps(context) {
  // Retrieve the content data from the server endpoint

  // Filter out just active brands

  // Iterate over the active items and populate the sitemap entries
  // TODO-REVIEW: Need to discuss with the team.
  // TODO-ONBOARDING: Need to add in the proper UI structure.
  // const itemSlugs = activeitems.map((item) => {
  //   console.log(`The item updated at is ${item.updatedAt}`);
  //   const field = {
  //     loc: `${process.env.NEXT_PUBLIC_BASE_URL}/${item.categorySlug}/${item.slug}`,
  //     lastmod: item.updatedAt,
  //     changefreq: 'daily',
  //     priority: 0.9,
  //   };

  //   return field;
  // });

  // return getServerSideSitemap(context, itemSlugs);
  return getServerSideSitemap(context);
}

// Default export to prevent next.js errors
export default () => {};
