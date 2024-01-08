'use client'
import http from '@/services/httpService'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import SendOTPForm from './SendOTPForm'

const AuthPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('')

    const phoneNumberHandle = (e) => {
        setPhoneNumber(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const data = await http.post('user/get-otp', { phoneNumber })
            console.log(data);
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <div className="flex justify-center ">
            <div className="w-full sm:max-w-sm ">
                <SendOTPForm phoneNumber={phoneNumber} onChange={phoneNumberHandle} onSubmit={submitHandler} />
            </div>
        </div>
    )
}

export default AuthPage
