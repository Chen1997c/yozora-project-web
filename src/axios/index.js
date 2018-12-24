import Axios from 'axios'
import store from '../store'

Axios.interceptors.request.use(
    config => {
        if (store.state.token && !config.headers.Authorization) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `Bearer ${store.state.token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
Axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    console.log('未认证！');
                    break;
                case 403:
                    console.log('没得权限');
            }
        }
        return Promise.reject(error)
    });

export default Axios