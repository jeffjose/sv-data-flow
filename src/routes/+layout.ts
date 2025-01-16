import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ parent, data, params }) => {

  await parent()

  let { name } = data;


  return {
    name: 'from /layout.ts',
    parent_data: name,
  }
};
