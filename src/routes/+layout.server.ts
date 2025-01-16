import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ }) => {

  return {
    name: 'from /layout.server.ts',
    track: 0
  }

};
