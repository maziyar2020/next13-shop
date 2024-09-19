"use client"
import LoadingSpinner from '@/common/LoadingSpinner'
import React from 'react'
import {getUserDetail} from '@/hooks/useAuth'

const Payment = () => {

    const { data, isLoading } = getUserDetail()
    const { user, payments } = data || {}

    console.log(payments);

    if (isLoading) {
        return <LoadingSpinner large={true} />
    }

    return (
        <div>
            {
                payments.map((item, index) => {
                    return <div key={index}>
                        {item.invoiceNumber}
                    </div>
                })
            }
        </div>
    )
}

export default Payment
