'use client'
import LoadingSpinner from "@/common/LoadingSpinner"
import { getAllUsers } from "@/hooks/useAuth"
import UserTab from "./UserTab"

const Users = () => {

    const { data, isLoading } = getAllUsers()
    const { users } = data || {}

    if (isLoading) {
        return <LoadingSpinner large={true} />
    }


    return (
        <div>
            {
                users.map((user, index) => {
                    return <UserTab user={user} key={index} />
                })
            }
        </div>
    )
}

export default Users
