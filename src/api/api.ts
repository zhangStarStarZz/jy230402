import { http } from './http'


interface login {
    username: string,
    password: string
}
export const loginApi = (params: login) => {
    return http.post('/park/login', params)
}

export const getleftApi = (params?: any) => {
    return http.get('/system/user/dropList', { params })
}

interface getlist {
    page: number,
    pageSize: number,
    carNumber?: string,
    personName?:string,
    cardStatus?: string
}
export const getlistApi = (params:getlist) => {
    return http.get('/parking/card/list', {params})
}

export const delApi = (params:{ids:string}) => {
    return http.delete(`/parking/card/${params.ids}`, {params})
}