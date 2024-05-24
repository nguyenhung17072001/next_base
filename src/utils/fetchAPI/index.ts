import axios from 'axios';
import Cookies from 'js-cookie';


//if needed use authen

const http = axios.create({
  timeout: 2000,
  headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" },
});

// Add token to every request
http.interceptors.request.use(
    async (config) => {
        const token = Cookies.get('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    },
);

// handle the unauthorized exception
/* http.interceptors.response.use(function(response) {
    return response;
}, async function(error, _) {

    if (error &&  error.response && error.response.status == '401') {
   
        return {
            status: "401",
            message: "Chưa đăng nhập"
        }
    } else if (error &&  error.response && error.response.status == '500') {
        return {
            status: "500",
            message: "Chưa đăng nhập"
        }
    }
    throw 'Lỗi từ server';
  
}); */


export default http;
