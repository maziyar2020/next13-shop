import { getCategories } from '@/services/categoryServices'
import { getProducts } from '@/services/productServices'
import React from 'react'
import CategorySidebar from './CategorySidebar'
import queryString from 'query-string'
import { toLocalDateStringShort } from '@/utils/toLocalDate'
import Link from 'next/link'
import AddToCart from './[slug]/AddToCart'
import LikedProducts from './LikedProducts'
import { cookies } from 'next/dist/client/components/headers'
import { cookiesToString } from '@/utils/cookiesToStr'

export const dynamic = 'force-dynamic' // this is equal to set cache to no-store on fetching.

const Products = async ({ searchParams }) => {

    const cookieStore = cookies()
    const cookie = cookiesToString(cookieStore)

    // parallel data fetching
    const productPromise = getProducts(queryString.stringify(searchParams),cookie)
    const categoryPromise = getCategories()

    const [{ products }, { categories }] = await Promise.all([productPromise, categoryPromise])

    return (
        <div>
            <h1 className="text-xl font-bold mb-6">product List</h1>
            <div className="grid grid-cols-4">
                <CategorySidebar categories={categories} />

                <div className="col-span-3">
                    <div className="grid grid-cols-3 gap-4">
                        {
                            products.map((product, index) =>
                                <div className="col-span-1 border rounded-xl shadow-md p-4" key={index}>
                                    <img src={product.imageLink} />
                                    <h2 className="font-bold">{product.title}</h2>
                                    <div className="mb-4">
                                        <span>تاریخ ساخت :</span>
                                        <span className="font-bold">
                                            {toLocalDateStringShort(product.createdAt)}
                                        </span>
                                    </div>
                                    <Link href={`/products/${product.slug}`} className="text-primary-900 font-bold">
                                        مشاهده محصول
                                    </Link>
                                    <LikedProducts product={product}  />
                                    <AddToCart product={product} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
