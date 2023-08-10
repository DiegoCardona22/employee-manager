// @scripts
import { createSlice } from '@reduxjs/toolkit';

// @constants
const user = JSON.parse(localStorage.getItem('user') as string);

const initialState = user || {
  roles: [],
  auth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.roles = action.payload.roles;
      state.auth = true;
    },
    logout: (state) => {
      state.auth = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
