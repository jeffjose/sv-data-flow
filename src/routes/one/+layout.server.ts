import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ }) => {

  console.log("/one/+layout.server.ts")
  return {
    name: 'from /one/layout.server.ts',
    track: 0
  }

};
