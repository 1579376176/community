import axios from "axios";
import app from '../main'

const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 60000
});
//请求拦截器
instance.interceptors.request.use(
    function(config) {
        let token = localStorage.getItem("mytoken");
        config.headers["Authorization"] = "Bearer " + token;
        return config;
    },
    function(error) {
        // 对请求d错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    function(response) {

        // 对响应数据做些什么
        return response;
    },
    function(error) {

        // 对响应错误做些什么
        let { status } = error.response;

        console.log(status);
        if (status == 401) {
            alert('用户未登录或身份验证已过期，请重新登录')
            app.$router.push('/');
        }
        return Promise.reject(error);
    }
);

export default instance;