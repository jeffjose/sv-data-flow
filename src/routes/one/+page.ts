import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, data, params }) => {

  const parent_data = await parent()

  console.log("/one/+page.ts")
  return {
    name: 'from /one/page.ts',
    track: data.track++,
    parent_data,
    data
  }
};
