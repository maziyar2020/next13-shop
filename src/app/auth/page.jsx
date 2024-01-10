'use client'
import { getOtp } from '@/services/authServices'
import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import SendOTPForm from './SendOTPForm'

const AuthPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const {isError,isLoading,data,error,mutateAsync} = useMutation({mutationFn : getOtp})
    const phoneNumberHandle = (e) => {
        setPhoneNumber(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await mutateAsync({phoneNumber})
            console.log(res);
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error?.response?.data?.message)
        }
    }

    return (
        <div className="flex justify-center ">
            <div className="w-full sm:max-w-sm ">
                <SendOTPForm
                    phoneNumber={phoneNumber}
                    onChange={phoneNumberHandle}
                    onSubmit={submitHandler}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default AuthPage
