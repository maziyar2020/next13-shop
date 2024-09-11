"use client"
import React from 'react'
import { getUserDetail } from '@/hooks/useAuth'
import { toLocalDateString } from '@/utils/toLocalDate'

const Profile = () => {
    const { data, isLoading } = getUserDetail()
    const { user } = data || {}

    if (isLoading) return <p>loading</p>

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
