'use client'
import LoadingSpinner from '@/common/LoadingSpinner'
import TextField from '@/common/TextField'
import { useGetCategories } from '@/hooks/useCategories'
import { useAddProducts } from '@/hooks/useProducts'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Select from 'react-select'
import { TagsInput } from 'react-tag-input-component'

const productFields = [
    {
        id: 1,
        label: 'عنوان',
        name: 'title'
    },
    {
        id: 2,
        label: 'توضیحات',
        name: 'description'
    },
    {
        id: 3,
        label: 'اسلاگ',
        name: 'slug'
    },
    {
        id: 4,
        label: 'برند',
        name: 'brand'
    },
    {
        id: 5,
        label: 'قیمت',
        name: 'price'
    },
    {
        id: 6,
        label: 'تخفیف محصول',
        name: 'discount'
    },
    {
        id: 7,
        label: 'میزان تخفیف',
        name: 'offPrice'
    },
    {
        id: 8,
        label: 'موجودی',
        name: 'countInStock'
    },
    {
        id: 9,
        label: 'عکس محصول',
        name: 'imageLink'
    },
]

const AdminProductAdd = () => {
    // router
    const router = useRouter()
    // mutate form data and post them on backend
    const { isLoading, mutateAsync } = useAddProducts()
    // retrive categories
    const { data: categoriesData, isLoading: isLoadingCategories } = useGetCategories()
    const { categories } = categoriesData || {}
    // page states
    const [tags, setTags] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    // formdata controlled inputs
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        slug: '',
        brand: '',
        price: '',
        discount: '',
        offPrice: '',
        countInStock: '',
        imageLink: ''
    })
    // change inputs based on their name
    const handleChange = (e) => {
        // e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    // handle submit form
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { message } = await mutateAsync({
                ...formData, tags, category: selectedCategory._id
            })
            toast.success(message)
            router.push('/admin/products')
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }


    return (
        <div className="w-full max-w-sm mb-10">
            <h1 className="mb-4 font-bold text-xl">اضافه کردن محصول</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                {
                    productFields.map((product, index) => {
                        return <TextField
                            key={index}
                            label={product.label}
                            name={product.name}
                            value={formData[product.name]}
                            onChange={handleChange}
                        />
                    })
                }

                <div>
                    <label htmlFor="categories" className="mb-2 text-red-300">دسته بندی</label>
                    <Select
                        id="categories"
                        onChange={setSelectedCategory}
                        options={categories}
                        getOptionLabel={(option) => option.title}
                        getOptionValue={(option) => option._id}
                    />
                </div>

                <div>
                    <label htmlFor="tags" className="mb-2 text-red-300">تگ ها</label>
                    <TagsInput
                        id="tags"
                        placeHolder="تگ ها"
                        value={tags}
                        onChange={setTags}
                        name='tags'
                    />
                </div>

                {
                    isLoading ? (
                        <button className="btn btn--primary w-full mt-4">
                            <LoadingSpinner />
                        </button>
                    ) : (
                        <button className="btn btn--primary w-full mt-4">اضافه کردن</button>
                    )
                }

            </form>
        </div>
    )
}

export default AdminProductAdd
