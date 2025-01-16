import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ }) => {

  console.log("+layout.server.ts")
  return {
    name: 'from /layout.server.ts',
    track: 0
  }

};
