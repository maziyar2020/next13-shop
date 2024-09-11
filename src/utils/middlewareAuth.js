export default async function middlewareAuth(req) {

    let strCookie = ''
    // get all cookies => accesstoken+refreshtoken; | space here for token
    req.cookies.getAll().forEach(item => {
        strCookie += `${item?.name}=${item?.value}; `
    })


    const { data } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            Cookie: strCookie
        }
    }).then(res => res.json())
    // console.log(data);
    const { user } = data || {}
    // console.log(user);
    return user
}