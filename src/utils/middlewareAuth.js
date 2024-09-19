import { cookiesToString } from '@/utils/cookiesToStr'

export default async function middlewareAuth(req) {

    const { data } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            Cookie: cookiesToString(req.cookies)
        }
    }).then(res => res.json())
    // console.log(data);
    const { user } = data || {}
    // console.log(user);
    return user
}