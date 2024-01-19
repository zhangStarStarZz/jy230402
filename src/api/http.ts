import { MyAxios } from "./MyAxios";

const server = new MyAxios({
    baseURL: '/api'
})

export const http = server.server

export const api = new MyAxios({
    baseURL: '/api'
})


export const get = server.get
export const post = server.post
export const put = server.put
export const del = server.delete