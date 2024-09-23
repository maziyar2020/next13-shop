import http from './httpService'

export const getProducts = (qs, cookie) => http.get(`/product/list?${qs}`, {
    headers: {
        Cookie: cookie
    }
})
    .then(data => data.data.data)

export const getSingleProductBySlug = (slug) => http.get(`/product/slug/${slug}`)
    .then(data => data.data.data)

export const likeProduct = (id) => http.post(`/product/like/${id}`)
    .then(data => data.data.data)


export const addNewProduct = (data) => http.post(`/admin/product/add`,data)
    .then(data => data.data.data)