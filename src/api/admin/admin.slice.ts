import { sidebarSlice } from './sidebar/sidebar.slice';

export const adminSlices = {
  [sidebarSlice.name]: sidebarSlice.reducer
};
