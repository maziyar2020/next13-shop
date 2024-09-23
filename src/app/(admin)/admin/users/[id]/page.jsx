import { useParams } from 'next/navigation'
import React from 'react'

const userPageById = () => {
    const { params } = useParams()
    const { id } = params
    return (
        <div>

        </div>
    )
}

export default userPageById
