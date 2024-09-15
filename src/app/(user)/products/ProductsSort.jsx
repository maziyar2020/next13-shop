'use client'
import BaseRadio from '@/common/BaseRadio'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'

const ProductsSort = () => {

    // requirements for set querystring on next13
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    // set call back for querystring set
    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams],
    )


    const sortOptions = [
        {
            id: 1,
            value: "latest",
            label: "قدیمی ترین"
        },
        {
            id: 2,
            value: "earliest",
            label: "جدیدترین"
        },
        {
            id: 3,
            value: "popular",
            label: "محبوب ترین"
        },
    ]

    const [sort, setSort] = useState("")

    const sortHandler = (e) => {
        const value = e.target.value
        setSort(value)
        router.push(pathname + "?" + createQueryString('sort', value))
    }

    useEffect(() => {
        setSort(searchParams.get('sort'))
        return () => {

        }
    }, [searchParams])

    return (
        <div>
            <p>مرتب سازی</p>
            {sortOptions.map(item => {
                return <BaseRadio
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    name="product-sort"
                    value={item.value}
                    checked={sort === item.value}
                    onChange={sortHandler}
                />
            })}
        </div>
    )
}

export default ProductsSort
