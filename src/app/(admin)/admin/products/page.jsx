'use client'
import LoadingSpinner from '@/common/LoadingSpinner'
import { productTableHeads } from '@/constants/tableHeads'
import { getAllProducts } from '@/hooks/useProducts'
import Link from 'next/link'
import React from 'react'

const adminProducts = () => {
    const { data, isLoading } = getAllProducts()

    const { products } = data || {}

    console.log(products);

    if (isLoading) {
        return <LoadingSpinner large={true} />
    }

    return (
        <div className="shadow-sm overflow-auto my-8">
            <div className="flex flex-row items-center justify-between mb-2">
                <p>محصولات</p>
                <Link className="text-blue-500" href="/admin/products/add">
                    اضافه کردن محصول
                </Link>
            </div>
            <table className="border-collapse table-auto w-full min-w-[800px] text-sm">
                <thead>
                    <tr>
                        {
                            productTableHeads.map((item, index) => {
                                return <th className="whitespace-nowrap table__th" key={index}>{item.label}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            return <tr key={index}>
                                <td className="table__td">{index}</td>
                                <td className="table__td">{product.title}</td>
                                <td className="table__td">{product.category.title}</td>
                                <td className="table__td">{product.price}</td>
                                <td className="table__td">{product.discount}</td>
                                <td className="table__td">{product.offPrice}</td>
                                <td className="table__td">{product.countInStock}</td>
                                <td className="table__td">
                                    <Link href={`/admin/products/${product._id}`}>
                                        مشاهده
                                    </Link>
                                </td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default adminProducts
