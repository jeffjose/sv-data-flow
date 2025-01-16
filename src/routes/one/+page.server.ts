import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {

  const parent_data = await parent()

  console.log("/one/+page.server.ts")
  return {
    name: 'from /one/page.server.ts',
    track: parent_data.track++,
    parent_data,
    data: null
  }

};
