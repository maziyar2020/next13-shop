import http from './httpService'

export const getProducts = (qs) => http.get(`/product/list?${qs}`)
    .then(data => data.data.data)