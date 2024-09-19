import { useAddToCard,useDecrementFromCart } from '@/hooks/useAddtoCart'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast'
import { HiMinus, HiOutlineTrash, HiPlus } from 'react-icons/hi'
import cart from './page'


const CartItem = ({ item }) => {

    const QueryClient = useQueryClient()

    const { mutateAsync, isLoading } = useAddToCard()
    const { mutateAsync : mutateDecrease } = useDecrementFromCart()

    const handleAddToCart = async () => {
        try {
            const { message } = await mutateAsync(item._id)
            toast.success(message)
            QueryClient.invalidateQueries({ queryKey: ['get-user'] })

        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    const handleRemoveFromCart =async  () => {
        try {
            const { message } = await mutateDecrease(item._id)
            toast.success(message)
            QueryClient.invalidateQueries({ queryKey: ['get-user'] })

        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    return (
        <div className="border border-primary-100 rounded-xl p-4 flex justify-between">
            <span className="flex-1 font-bold self-center">{item.title}</span>
            <div className="flex items-center justify-between gap-x-8">
                <div>
                    قیمت : {''}
                    <span className={`${item.discount ? 'line-through' : 'text-gray-500'}`}>{item.price}</span>
                    {
                        !!item.discount && (
                            <div className="flex items-center gap-x-2 mt-2">
                                <p className="font-bold">{item.offPrice}</p>
                                <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm pt-1">
                                    {item.discount} %
                                </div>
                            </div>
                        )
                    }
                </div>

                <span>تعداد : {item.quantity}</span>
                <div className="flex gap-x-3">
                    <button onClick={handleAddToCart} className="bg-primary-900 text-white rounded p-1">
                        <HiPlus />
                    </button>
                    <button onClick={handleRemoveFromCart} className="border rounded p-1">
                        {
                            item.quantity > 1 ? (
                                <HiMinus className="w-4 h-4" />
                            ) :
                            <HiOutlineTrash className="text-rose-500 w-6 h-6" />
                        }
                    </button>

                </div>
            </div>
        </div>
    )
}

export default CartItem
