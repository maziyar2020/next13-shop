import { useParams } from 'next/navigation'
import React from 'react'

const AdminProductsById = ({params}) => {
    const { id } = params
    console.log(id);
    return (
        <div>

        </div>
    )
}

export default AdminProductsById
