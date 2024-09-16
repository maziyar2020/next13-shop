import http from './httpService'

export const addToCartApi = (productId) => {
    return http.post('/cart/add', {productId}).then(({ data }) => data.data)
}