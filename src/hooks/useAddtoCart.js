import { addToCartApi, decrementFromcartApi } from "@/services/cartServices"
import { useMutation } from "@tanstack/react-query"
export const useAddToCard = () => useMutation({ mutationFn: addToCartApi })

export const useDecrementFromCart = () => useMutation({ mutationFn: decrementFromcartApi })