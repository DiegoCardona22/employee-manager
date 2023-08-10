// @packages
import { createSlice } from '@reduxjs/toolkit';

// @types
import { TGlobalUI } from '../../types/utils';

const initialState: TGlobalUI = {
  isSidebarOpen: false,
};

export const globalUi = createSlice({
  name: 'globalUi',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const {
  closeSidebar,
  openSidebar,
} = globalUi.actions;

export default globalUi.reducer;
