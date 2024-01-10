import http from './httpService'

export const getOtp = (data) => {
    return http.post('/user/get-otp', data).then(({ data }) => data.data)
}