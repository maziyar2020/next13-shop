'use client'
import { getOtp, checkOtp } from '@/services/authServices'
import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import CheckOTPForm from './CheckOTPForm'
import SendOTPForm from './SendOTPForm'

const AuthPage = () => {
    // states
    const [phoneNumber, setPhoneNumber] = useState('')
    const [pageStep, setPageStep] = useState(1)
    const [otp, setOtp] = useState('')
    // redux 

    const
        { isError, isLoading, data, error, mutateAsync : mutateGetOtp }
            = useMutation({ mutationFn: getOtp })
    const
        { mutateAsync: mutateCheckOtp }
            = useMutation({ mutationFn: checkOtp })

    // form handlers
    const phoneNumberHandle = (e) => {
        setPhoneNumber(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await mutateGetOtp({ phoneNumber })
            console.log(res);
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error?.response?.data?.message)
        } finally {
            setPageStep(2)
        }
    }

    const checkOTPHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await mutateCheckOtp({ phoneNumber, otp })
            console.log(res);
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error?.response?.data?.message)
        }

    }

    // page will render based on this fucntion
    const pageRender = () => {
        switch (pageStep) {
            case 1:
                return <SendOTPForm
                    phoneNumber={phoneNumber}
                    onChange={phoneNumberHandle}
                    onSubmit={submitHandler}
                    isLoading={isLoading}
                />

            case 2:
                return <CheckOTPForm onSubmit={checkOTPHandler} otp={otp} setOtp={setOtp} />

            default:
                return <div>some problem happened</div>
        }
    }

    return (
        <div className="flex justify-center ">
            <div className="w-full sm:max-w-sm ">
                {pageRender()}
            </div>
        </div>
    )
}

export default AuthPage
