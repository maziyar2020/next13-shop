'use client'
import Loading from '@/common/Loading'
// components
import TextField from '@/common/TextField'
// hooks
import { getUserDetail } from '@/hooks/useAuth'
import { updateUser } from '@/services/authServices'
import { includeObj } from '@/utils/includeObj'
// RQ
import { useMutation, useQueryClient } from '@tanstack/react-query'
// react 
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const MePage = () => {
    const queryClient = useQueryClient()
    // mutation
    const { isLoading: isUpdating, mutateAsync } = useMutation({ mutationFn: updateUser })
    // states
    const [formData, setFormData] = useState({})
    // global states
    const { data, isLoading } = getUserDetail()
    const { user } = data || {}

    // fields that we need on page
    const includesKey = ['name', "email", "phoneNumber", "biography"]
    // when data retrieved set formdata based on user object and check for included keys
    useEffect(() => {
        if (user) setFormData(includeObj(user, includesKey))
    }, [user])


    // form handler
    const formSubmit = async (e) => {
        e.preventDefault()

        try {
            const { message } = await mutateAsync(formData)
            queryClient.invalidateQueries({queryKey : 'get-user'})
            toast.success(message)
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error?.response?.data?.message)
        }
    }



    // load page if loading was true
    if (isLoading) return <Loading />


    return (
        <div className="max-w-md">
            <h1 className="text-xl font-bold mb-4">اطلاعات کاربر</h1>
            <form onSubmit={formSubmit} className="space-y-5">
                {
                    Object.keys(includeObj(user, includesKey)).map(key => {
                        return <TextField
                            key={key}
                            value={key}
                            label={key}
                            name={key}
                            value={formData[key] || ''}
                            onChange={
                                e => setFormData({ ...formData, [e.target.name]: e.target.value })
                            }
                        />
                    })
                }
                <div>
                    {
                        isUpdating ? (
                            <div className="btn btn--primary text-center">
                                loading
                            </div>
                        ) : (
                            <button className="btn btn--primary w-full">
                                submit
                            </button>
                        )
                    }
                </div>
            </form>
        </div>
    )
}

export default MePage
