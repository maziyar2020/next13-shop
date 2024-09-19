import http from './httpService'

export const getOtp = (data) => {
    return http.post('/user/get-otp', data).then(({ data }) => data.data)
}

export const checkOtp = (data) => {
    return http.post('/user/check-otp', data).then(({ data }) => data.data)
}

export const completeProfileReq = (data) => {
    return http.post('/user/complete-profile', data).then(({ data }) => data.data)
}

export const getUserInfo = () => {
    return http.get('/user/profile').then(({ data }) => data.data)
}

export const updateUser = (data) => {
    return http.patch('/user/update', data).then(({ data }) => data.data)
}

export const logOut = () => {
    return http.post('/user/logout')
}
// admin fetch

export const getUsersInfo = () => {
    return http.get('/admin/user/list').then(({ data }) => data.data)
}


