"use client"

import LoadingSpinner from "@/common/LoadingSpinner"
import { useAddToCard } from "@/hooks/useAddtoCart"
import { getUserDetail } from "@/hooks/useAuth"
import { useQueryClient } from "@tanstack/react-query"
import Link from "next/link"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const AddToCart = ({ product }) => {

    const queryClient = useQueryClient()
    const router = useRouter()

    // we need user to check if he is logged
    const { data } = getUserDetail()
    const { user } = data || {}

    const { mutateAsync, isLoading } = useAddToCard()

    const isInCart = (user, product) => {
        if (!user) return false
        return user.cart?.products.some(p => p.productId === product._id)
    }

    const addToCartHandler = async () => {
        if (!user) {
            toast.error('لطفا ابتدا وارد شوید')
            router.push('/auth')
            return
        }

        try {
            const { message } = await mutateAsync(product._id)
            toast.success(message)
            queryClient.invalidateQueries({ queryKey: ['get-user'] })

        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    return (
        <div>
            {
                isInCart(user, product) ? (
                    <Link href={'/cart'}>ادامه سفارش</Link>
                ) :
                    isLoading ? (
                        <button className="btn btn--primary">
                            <LoadingSpinner />
                        </button>
                    ) : <button
                        className="btn btn--primary"
                        onClick={addToCartHandler}
                    >
                        اضافه کردن به سبد خرید
            </button>
            }

        </div>
    )
}

export default AddToCart
