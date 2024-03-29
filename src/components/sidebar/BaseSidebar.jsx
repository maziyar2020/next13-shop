'use client'
import { logOut } from '@/services/authServices'
import Link from 'next/link'

const BaseSidebar = () => {

    const logoutHandler = async (e) => {
        await logOut()
        window.location.href = '/'
    }

    return (
        <div>
            <ul className="flex flex-col space-y-8">
                <li>
                    <Link href="/">صفحه اصلی</Link>
                </li>
                <li>
                    <Link href="/profile/me">داشبورد</Link>
                </li>
                <li>
                    <Link href="/profile/me">پروفایل کاربر</Link>
                </li>
                <button onClick={logoutHandler}>
                    خروج
                </button>
            </ul>
        </div>
    )
}

export default BaseSidebar
