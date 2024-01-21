"use client"
import React from 'react'
import { getUserDetail } from '@/hooks/useAuth'
import { toLocalDateString } from '@/utils/toLocalDate'
const Profile = () => {
    const { data, isLoading } = getUserDetail()
    const { user } = data || {}
    console.log(user);
    if (isLoading) return <p>loading</p>
    return (
        <div>
            profile
            {toLocalDateString(user.createdAt)}
        </div>
    )
}

export default Profile
