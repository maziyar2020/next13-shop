'use client'
// http reques methods
import { getOtp, checkOtp } from '@/services/authServices'
// RQ (React-query)
import { useMutation } from '@tanstack/react-query'
// react & next hooks
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// pop up
import toast from 'react-hot-toast'
// components
import CheckOTPForm from './CheckOTPForm'
import SendOTPForm from './SendOTPForm'
const RESEND_TIME=90

const AuthPage = () => {
    // states
    const [phoneNumber, setPhoneNumber] = useState('')
    const [pageStep, setPageStep] = useState(2)
    const [otp, setOtp] = useState('')
    const [time, setTime] = useState()
    
    const router = useRouter()

    // redux 
    const
        { isError, isLoading, data, error, mutateAsync: mutateGetOtp }
            = useMutation({ mutationFn: getOtp })
    const
        { mutateAsync: mutateCheckOtp }
            = useMutation({ mutationFn: checkOtp })


    // form handlers
    const phoneNumberHandle = (e) => {
        setPhoneNumber(e.target.value)
    }
    // login form with phone number
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await mutateGetOtp({ phoneNumber })
            console.log(res);
            setTime(RESEND_TIME)
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error?.response?.data?.message)
        } finally {
            setPageStep(2)
        }
    }
    // check otp code + phoneNumber => post
    const checkOTPHandler = async (e) => {
        e.preventDefault()
        try {
            const {message,user} = await mutateCheckOtp({ phoneNumber, otp })
            toast.success(message)
            if (user.isActive) {
                router.push('/')
            } else {
                router.push('/complete-profile')
            }
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error?.response?.data?.message)
        }

    }

    useEffect(() => {
        const timer = time > 0 && setInterval(() => {
            setTime(t => t - 1)
        }, 1000)
        return() => {
            if (timer) clearInterval(timer)
        }
    },[time])



    // page will render base on this logic
    const pageRender = () => {
        switch (pageStep) {
            // login with number
            case 1:
                return <SendOTPForm
                    phoneNumber={phoneNumber}
                    onChange={phoneNumberHandle}
                    onSubmit={submitHandler}
                    isLoading={isLoading}
                />

            case 2:
                // Otp check
                return <CheckOTPForm
                    onSubmit={checkOTPHandler}
                    otp={otp} setOtp={setOtp}
                    time={time}
                    resendOtp={submitHandler}
                    goBack={() => setPageStep(current => current - 1)}
                />

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
