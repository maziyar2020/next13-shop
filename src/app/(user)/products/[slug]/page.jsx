import { getProducts, getSingleProductBySlug } from '@/services/productServices'
import React from 'react'
import AddToCart from './AddToCart'
// ssg page
export const dynamic = 'force-static'

// if user searched for a product that doesnt exist during build
// he/she will get 404 page
export const dynamicParams = false

const ProductPage = async ({ params }) => {
    const { slug } = params

    const { product } = await getSingleProductBySlug(slug)

    console.log(product);

    return (
        <div>
            <h1 className="font-bold mb-6 text-2xl">{product.title}</h1>
            <p className="mb-6">{product.description}</p>
            <p>
                قیمت محصول {""}
                <span className={`${product.discount ? 'line-through' : 'font-bold'} `}>{product.price}</span>
            </p>
            {
                !!product.discount && (
                    <div className="flex items-center gap-x-2 mb-6">
                        <p className="text-xl font-bold">
                            قیمت با تخفیف {product.offPrice}
                        </p>
                        <div className="bg-rose-500 px-2 py-0 5 rounded-xl text-white text-sm">
                            {product.discount} %
                        </div>
                    </div>
                )}
            <AddToCart product={product} />
        </div>
    )
}

export default ProductPage


export async function generateStaticParams() {
    const { products } = await getProducts()

    return products.map(product => ({
        slug: product.slug
    }))
}
