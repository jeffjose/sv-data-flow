import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ parent, data, params }) => {

  const parent_data = await parent()

  console.log("+layout.ts")
  return {
    name: 'from /layout.ts',
    track: data.track++,
    parent_data,
    data
  }
};
