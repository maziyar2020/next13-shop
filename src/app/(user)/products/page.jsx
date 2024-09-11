import { getCategories } from '@/services/categoryServices'
import { getProducts } from '@/services/productServices'
import React from 'react'

const Products = async () => {
    const { products } = await getProducts()
    const { categories } = await getCategories()
    console.log(products);
    return (
        <div>
            <h1 className="text-xl font-bold mb-6">product List</h1>
            <div className="grid grid-cols-4">
                <div className="col-span-1 ">
                    <p className="font-bold mb-4">دسته بندی ها</p>
                    <ul className="space-y-4">
                        {categories.map((category, index) => (
                            <li key={index}>
                                {category.title}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-span-3 grid grid-cols-3 gap-4">
                    {
                        products.map((product, index) => 
                            <div className="col-span-1 border rounded-xl shadow-md p-4" key={index}>
                                <h2 className="font-bold">{product.title}</h2>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
