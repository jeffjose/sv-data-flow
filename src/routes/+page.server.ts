import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {

  const parent_data = await parent()

  return {
    name: 'from /page.server.ts',
    track: parent_data.track++,
    parent_data,
    data: null
  }

};
