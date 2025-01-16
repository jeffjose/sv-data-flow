import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ parent, data, params }) => {

  const parent_data = await parent()

  console.log("/one/+layout.ts")
  return {
    name: 'from /one/layout.ts',
    track: data.track++,
    parent_data,
    data
  }
};
