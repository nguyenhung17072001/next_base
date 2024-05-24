import { AxiosResponse } from 'axios';
import { takeLatest, put, call, takeEvery } from 'redux-saga/effects';
import fetchAPI from '@/utils/fetchAPI';
import { 
  loginStart, loginFail, loginSuccess,
  logoutStart, logoutSuccess, logoutFail
} from '../../slices/auth/authSlice';
import { loginService } from './services';
import { get } from 'lodash';
import Cookies from 'js-cookie';

type PayloadLogin = ReturnType<typeof loginStart>;

interface Response {
  data?: {
    token: string;
    userInfo: Profile;
  };
  errorMessage?: string;
  errorCode: number;
}

function* handleLogin({ payload }: PayloadLogin) {
  try {
    
    const response: AxiosResponse<Response> = yield call(loginService, payload);
    const token = get(response, 'data.data.token', '');
    yield call(Cookies.set, 'token', token);
    if (token) {
      yield put(loginSuccess({ token: get(response, 'data.data.token', ''), userInfo: get(response, 'data.data', {}) }));
    } else {
      yield put(loginFail({ msg: response.data.errorMessage }));
    }
  } catch (error) {
    yield put(loginFail({ msg: 'Lỗi hệ thống' }));
    console.log(error)
  }
}

function* handleLogout({ payload }: any) {
  try {
    
    
    yield call(Cookies.remove, 'token');
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFail({ msg: 'Lỗi hệ thống' }));
    console.log(error)
  }
}

export default function* watchLogin() {
  yield takeEvery(loginStart, handleLogin);
  yield takeEvery(logoutStart, handleLogout);
}
