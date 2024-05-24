import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  status: string;
  token: string;
  message?: string;
  userInfo?: Profile;
  isLoading: boolean;
}

const initialState: AuthState = {
  status: 'idle',
  token: '',
  message: '',
  userInfo: {},
  isLoading: false
};

const authSlice = createSlice({
  name: '@auth',
  initialState,
  reducers: {
    //login
    loginStart: (state, _action: PayloadAction<{ username: string; password: string }>) => {
      state.status = 'LOGIN_START';
      state.token = '';
      state.message = '';
      state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<{ token: string; userInfo: any }>) => {
      state.status = 'LOGIN_SUCCESS';
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
      state.isLoading = false;
    },
    loginFail: (state, action: PayloadAction<{ msg?: string }>) => {
      state.status = 'LOGIN_FAIL';
      state.message = action.payload.msg;
      state.isLoading = false;
    },
    //logout
    logoutStart: (state, _action: PayloadAction) => {
      state.status = 'LOGOUT_START';
      state.token = '';
      state.message = '';
      state.isLoading = true;
    },
    logoutSuccess: (state, action: PayloadAction) => {
      state.status = 'LOGOUT_SUCCESS';
      state.token = '';
      state.userInfo = {};
      state.isLoading = false;
    },
    logoutFail: (state, action: PayloadAction<{ msg?: string }>) => {
      state.status = 'LOGOUT_FAIL';
      state.message = action.payload.msg;
      state.isLoading = false;
    },
  },
});


export const { 
  loginStart, loginSuccess, loginFail ,
  logoutStart, logoutSuccess, logoutFail

} = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
