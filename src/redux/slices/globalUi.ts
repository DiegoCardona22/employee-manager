// @packages
import { createSlice } from '@reduxjs/toolkit';

// @types
import { TGlobalUI } from '../../types/utils';

const isSidebarOpen = localStorage.getItem('isSidebarOpen');

const initialState: TGlobalUI = {
  isSidebarOpen: isSidebarOpen ? JSON.parse(isSidebarOpen) : false,
};

export const globalUi = createSlice({
  name: 'globalUi',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
      localStorage.setItem('isSidebarOpen', JSON.stringify(true));
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
      localStorage.setItem('isSidebarOpen', JSON.stringify(false));
    },
  },
});

export const {
  closeSidebar,
  openSidebar,
} = globalUi.actions;

export default globalUi.reducer;
