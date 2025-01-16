import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, data, params }) => {

  const parent_data = await parent()


  return {
    name: 'from /page.ts',
    track: data.track++,
    parent_data,
    data
  }
};
