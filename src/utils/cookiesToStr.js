export const cookiesToString = (cookies) => {
    let strCookie = ''
    // get all cookies => accesstoken+refreshtoken; | space here for token
    cookies.getAll().forEach(item => {
        strCookie += `${item?.name}=${item?.value}; `
    })

    return strCookie
}