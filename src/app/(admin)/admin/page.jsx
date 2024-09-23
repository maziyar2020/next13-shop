"use client"

import LoadingSpinner from "@/common/LoadingSpinner"
import { getAllUsers } from "@/hooks/useAuth"

const Admin = () => {

  const { data, isLoading } = getAllUsers()
  const { users } = data || {}


  if (isLoading) {
    return <LoadingSpinner large={true} />
  }

  return (
    <div className="">
      
    </div>
  )
}

export default Admin
