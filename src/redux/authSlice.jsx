import { createSlice } from '@reduxjs/toolkit';
const initialState={
    isAuthenticated: false,
    user: null,
    role: null,
    loading: false,
  };
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.loading = false;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
      state.loading = false;
    },
    loginFailed(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
      state.loading = false;
    },
  },
});

export const { loginStart, loginSuccess,logout,loginFailed } = authSlice.actions;

export default authSlice.reducer;
