export default async function middlewareAuth(req) {
    let strCookie = ''
    // get all cookies
    req.cookies.getAll().forEach(item => {
        strCookie += `${item?.name}=${item?.value}; `
    })

    const { data } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            Cookie: strCookie
        }
    }).then(res => res.json())
    const { user } = data || {}
    return user
}