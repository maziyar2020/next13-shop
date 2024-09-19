"use client"
import { likeProduct } from '@/services/productServices'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

const LikedProducts = ({ product }) => {
    const router = useRouter()

    const likeHandler = async () => {
        try {
            const { message } = await likeProduct(product._id)
            toast.success(message)
            router.refresh()
        } catch (error) {
            toast.error(error.response?.data?.message)
        }
    }

    return (
        <div className="mb-2 cursor-pointer" onClick={likeHandler}>
            {
                product.isLiked ? (
                    <AiFillLike className="fill-primary-900 w-6 h-6" />
                ) :
                    <AiOutlineLike className="text-secondary-700 w-6 h-6" />
            }
        </div>
    )
}

export default LikedProducts
