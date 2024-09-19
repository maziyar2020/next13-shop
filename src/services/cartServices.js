import http from './httpService'

export const addToCartApi = (productId) => {
    return http.post('/cart/add', {productId}).then(({ data }) => data.data)
}

export const decrementFromcartApi = (productId) => {
    return http.post('/cart/remove', {productId}).then(({ data }) => data.data)
}

export const payCart = (productId) => {
    return http.post('/payment/create', {productId}).then(({ data }) => data.data)
}