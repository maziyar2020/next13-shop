import { addToCartApi } from "@/services/cartServices"
import { useMutation } from "@tanstack/react-query"
export const useAddToCard = () => useMutation({ mutationFn: addToCartApi })

