"use client"

import LoadingSpinner from '@/common/LoadingSpinner'
import { getUserDetail } from '@/hooks/useAuth'
import Link from 'next/link'
import CartItem from './CartItem'
import CartSummary from './CartSummary'

const cart = () => {
    const { data, isLoading } = getUserDetail()
    const { user, cart } = data || {}

    if (isLoading) {
        return <div>
            <LoadingSpinner />
        </div>
    }

    if (!user && !data) return (
        <div className="container lg:max-w-screen-lg">
            <p className="font-bold mb-4">برای مشاهده سبد خرید لاگین کنید</p>
            <Link href={'/auth'}>
                رفتن به صفحه لاگین
            </Link>
        </div>
    )

    if (!user.cart?.products || user.cart?.products.length === 0) {
        return <div>
            <p className="font-bold mb-4">سبد خرید شما خالی میباشد</p>
            <Link href={'/products'}>
                رفتن به صفحه محصولات
            </Link>
        </div>
    }


    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3 space-y-5">
                {
                    cart && cart.productDetail.map((item, index) =>
                        <CartItem item={item} key={index} />
                    )
                }
            </div>
            <div className="col-span-1">
                <CartSummary payDetail={cart.payDetail} />
            </div>
        </div>
    )
}

export default cart
