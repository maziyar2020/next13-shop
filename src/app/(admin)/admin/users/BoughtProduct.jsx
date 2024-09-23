import React from 'react'

const BoughtProduct = ({ item }) => {
    return (
        <div
            className="flex flex-row mb-2 rounded-xl shadow-xl gap-4 col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12"
        >
            <img src={item.imageLink} className="w-12 h-12 aspect-square" alt="" />
            <div className="">
                <p className="text-sm text-gray-500">{item.title}</p>
            </div>
        </div>
    )
}

export default BoughtProduct
