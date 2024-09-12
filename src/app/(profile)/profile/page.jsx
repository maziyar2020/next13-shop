"use client"
import React, { useState } from 'react'
import { getUserDetail } from '@/hooks/useAuth'
import { toLocalDateString } from '@/utils/toLocalDate'
import LoadingSpinner from '@/common/LoadingSpinner'

const Profile = () => {
    const { data, isLoading } = getUserDetail()
    const { user } = data || {}

    if (isLoading) return (
        <div className="grid items-center justify-center h-screen max-h-screen">
            <LoadingSpinner large={true} />
        </div>
    )

    return (
        <div>
            profile
            <hr />
            {user.name}
            <br />
            {toLocalDateString(user.createdAt)}
        </div>
    )
}

export default Profile
