
import Link from 'next/navigation';
import React from 'react'
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';
import BoughtProduct from './BoughtProduct';

const UserTab = ({ user }) => {
    console.log(user);
    return (
        <div className="border mb-4 border-primary-200 p-4 rounded-xl">
            <div className="flex items-center gap-x-2">
                <p>نام</p> :
                <span>{user.name}</span>
            </div>
            {
                !!user.biography && <div className="flex gap-x-2">
                    <p>بایوگرافی</p> :
                <span>{user.biography}</span>
                </div>
            }
            <div className="flex items-center gap-x-2">
                <p>ایمیل</p> :
                <span>{user.email}</span>
            </div>
            <div className="flex items-center gap-x-2">
                <p>شماره تماس</p> :
                <span>{user.phoneNumber}</span>
            </div>
            <div className="flex items-center gap-x-2">
                <p>وضعیت کاربر</p> :
                {
                    user.isActive ? <HiCheckCircle className="text-green-500" /> : <HiXCircle className="text-red-500" />
                }
            </div>
            <div className="flex flex-col items-center gap-x-2 lg:flex-row lg:items-start md:flex-col md:items-center">
                <p className="mb-2 lg:mb-0">محصولات خریداری شده :</p>
                <div className={`flex gap-x-2  ${user.Products.length > 0 ? "grid grid-cols-12" : 'flex-row'}`}>
                    {
                        user.Products.length > 0 ? user.Products.map((item, index) => {
                            return <BoughtProduct item={item} key={index} />
                        }) : <p>محصولی خریداری نشده</p>
                    }
                </div>
            </div>
            <div>
                <Link href={`/admin/users/${user._id}`}>
                    مشاهده کاربر
                </Link>
            </div>
        </div>
    )
}

export default UserTab
