"use client"
import { addNewProduct, getProducts } from "@/services/productServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export const getAllProducts = () => useQuery({
    queryKey: ['get-products'],
    queryFn: getProducts,
    retry: false,
    refetchOnWindowFocus: true
})

export const useAddProducts = () => {
    return useMutation({
        mutationFn : addNewProduct
    })
}