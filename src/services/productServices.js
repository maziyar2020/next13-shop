import http from './httpService'

export const getProducts = () => http.get('/product/list').then(data=> data.data.data)