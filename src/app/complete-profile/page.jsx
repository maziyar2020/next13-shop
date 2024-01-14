'use client'
import TextField from '@/common/TextField'
import { completeProfileReq } from '@/services/authServices'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const CompleteProfile = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const router = useRouter()
    const {
        isLoading,
        error,
        data,
        mutateAsync
    } = useMutation({ mutationFn: completeProfileReq })


    const handleCompleteProfile = async (e) => {
        e.preventDefault()

        try {
            const { message,user } = await mutateAsync({ name, email })
            toast.success(message)
            toast.success(`${user.name} خوش اومدی`)
            router.push('/')
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
                                loading
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
