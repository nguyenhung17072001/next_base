//import axios from "axios";
import http from '../../../utils/fetchAPI/index';
import axios from 'axios';
import { loginStart } from '@/store/slices/auth/authSlice';
type PayloadLogin = ReturnType<typeof loginStart>;

const URL = 'apiUrl....'


export async function loginService(data: any){
    
    return axios.post(URL + '/api/user/login', data);
};


