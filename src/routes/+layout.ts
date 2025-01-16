import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ parent, data, params }) => {

  const parent_data = await parent()

  return {
    name: 'from /layout.ts',
    parent_data,
    data
  }
};
