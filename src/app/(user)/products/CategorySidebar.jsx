"use client"
import BaseCheckbox from '@/common/BaseCheckbox'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import React, { useCallback, useState } from 'react'

const CategorySidebar = ({ categories }) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category')?.split(',') || [])

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams],
    )



    const checkBoxHandler = (e) => {
        const value = e.target.value
        if (selectedCategory.includes(value)) {
            const category = selectedCategory.filter(c => c != value)
            setSelectedCategory(category)
            router.push(pathname + "?" + createQueryString('category', category))
        } else {
            setSelectedCategory([...selectedCategory, value])
            router.push(pathname + "?" + createQueryString('category', [...selectedCategory, value]))
        }
    }

    return (
        <div className="col-span-1 ">
            <p className="font-bold mb-4">دسته بندی ها</p>
            <ul className="space-y-4">
                {categories.map((category, index) => (
                    <BaseCheckbox
                        key={index}
                        id={category._id}
                        value={category.englishTitle}
                        name="product-type"
                        label={category.title}
                        onChange={checkBoxHandler}
                        checked={selectedCategory.includes(category.englishTitle)}
                    />
                ))}
            </ul>
        </div>
    )
}

export default CategorySidebar
