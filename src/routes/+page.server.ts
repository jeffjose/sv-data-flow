import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, data }) => {

  const parent_data = await parent()

  return {
    name: 'from /page.server.ts',
    parent_data,
    data
  }

};
