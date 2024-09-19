import { useMutation, useQueryClient } from '@tanstack/react-query'
import { payCart } from '@/services/cartServices'
import toast from 'react-hot-toast'
import LoadingSpinner from '@/common/LoadingSpinner'


const CartSummary = ({ payDetail }) => {
    const { totalGrossPrice, totalOffAmount, totalPrice } = payDetail

    const { mutateAsync, isLoading } = useMutation({ mutationFn: payCart })
    const QueryClient = useQueryClient()

    const handlePayCart = async () => {
        try {
            const { message } = await mutateAsync(payDetail._id)
            toast.success(message)
            QueryClient.invalidateQueries({ queryKey: ['get-user'] })

        } catch (error) {
            toast.error(error.response?.data?.message);
        }
    }

    return (
        <div className="border border-primary-100 rounded-xl p-4">
            <p className="mb-4 font-bold">اطلاعات پرداخت</p>
            <div className="mb-4 flex items-center justify-between">
                <span>جمع کل</span>
                <span>{totalGrossPrice}</span>
            </div>
            <div className="mb-2 flex items-center justify-between">
                <span>تخفیف</span>
                <span>{totalOffAmount} -</span>
            </div>
            <div className="h-[1px] w-full bg-[#ccc] mb-4"></div>
            <div className="mb-4 flex items-center justify-between">
                <span>مبلغ پرداختی</span>
                <span className="font-bold">{totalPrice}</span>
            </div>
            {
                isLoading ? (
                    <button className="btn btn--primary">
                        <LoadingSpinner />
                    </button>
                ) :
                    <button className="btn btn--primary w-full" onClick={handlePayCart}>
                        ثبت سفارش
                    </button>
            }
        </div>
    )
}

export default CartSummary
