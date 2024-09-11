import http from './httpService'

export const getCategories = () => http.get('/category/list').then(data=> data.data.data)