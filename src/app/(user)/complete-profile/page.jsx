'use client'
import LoadingSpinner from '@/common/LoadingSpinner'
// components
import TextField from '@/common/TextField'
// http req
import { completeProfileReq } from '@/services/authServices'
// RQ
import { useMutation } from '@tanstack/react-query'
// next & react hooks
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
// pop up
import toast from 'react-hot-toast'

const CompleteProfile = () => {
    // states
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    // Router
    const router = useRouter()
    // RQ
    const {
        isLoading,
        error,
        data,
        mutateAsync
    } = useMutation({ mutationFn: completeProfileReq })

    // this method will execute when profile form submitted
    const handleCompleteProfile = async (e) => {
        e.preventDefault()

        try {
            const { message,user } = await mutateAsync({ name, email })
            toast.success(message)
            toast.success(`${user.name} خوش اومدی`)
            router.push('/profile')
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error?.response?.data?.message)
        }
    }

    return (
        <div className="flex justify-center ">
            <div className="w-full sm:max-w-sm ">
                <form onSubmit={handleCompleteProfile} className="space-y-5">
                    <TextField
                        name="name"
                        label="نام و نام خانوادگی"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <TextField
                        name="email"
                        label="ایمیل"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {
                        isLoading ? (
                            <div className="btn btn--primary text-center">
                                <LoadingSpinner />
                            </div>
                        ) : (
                            <button className="btn btn--primary w-full" type="submit">
                                submit
                            </button>
                        )
                    }

                </form>
            </div>
        </div>
    )
}

export default CompleteProfile
