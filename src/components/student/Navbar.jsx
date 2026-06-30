import React from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
    return (
        <div className='px-5 md:px-10 py-2 border-b border-gray-300'>
            <div className='flex items-center justify-between'>
                <img src={assets.logo} alt="logo" className='w-15 cursor-pointer' />
                <div className='flex items-center gap-3 text-gray-500'>
                    <p className='text-[12px]  md:border-r md:pr-2 border-gray-300  '>Add Courses </p>
                    <img src={assets.user_icon} alt="user-icon" className='w-5 md:hidden' />
                    <p className='hidden md:block text-[12px] '>Login</p>
                    <p className='hidden md:block text-[12px] bg-blue-600 text-white px-3 py-1  rounded-xl'>Create Account</p>
                </div>
            </div>

        </div>
    )
}

export default Navbar