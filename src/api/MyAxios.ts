import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios';


export class MyAxios {
    server: AxiosInstance;
    constructor(config?: CreateAxiosDefaults<any> | undefined) {
        this.server = axios.create(config);
        this.ljq();
    }

    ljq() {
        // 添加请求拦截器
        this.server.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            const token = localStorage.getItem('token');
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        this.server.interceptors.response.use(function (response) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            return response.data;
        }, function (error) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
        });



        // 添加请求拦截器
        axios.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        axios.interceptors.response.use(function (response) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            return response;
        }, function (error) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }

    api<T extends any>(url: string, method: string | 'GET', data?: T) {
        return this.server.request({
            url,
            method,
            data,
            params: data
        });
    }

    get<T extends any>(url: string, params?: T) {
        return this.server.get(url, { params });
    }
    post<T extends any>(url: string, params?: T) {
        return this.server.post(url, params);
    }
    put<T extends any>(url: string, params?: T) {
        return this.server.put(url, params);
    }
    delete<T extends any>(url: string, params?: T) {
        return this.server.get(url, { params });
    }
}
