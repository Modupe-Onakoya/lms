import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const isCourseList = location.pathname.includes("/course-list")

    return (
        <div className={`px-3 sm:px-10 md:px-14 lg:px-36 py-4 border-b border-gray-300 ${isCourseList ? "bg-white" : "bg-cyan-100/70"}`}>
            <div className='flex items-center justify-between'>
                <img src={assets.logo} alt="logo" className='w-15 cursor-pointer' />
                <div className='flex items-center gap-1 text-gray-500'>
                    <p className='sm:text-[13px] text-[10px] border-r pr-2 border-gray-300  '>Become an educator </p>
                    <Link to={"/my-enrollments"} className=' sm:text-[13px] text-[10px] '>My Enrollments</Link>
                    <img src={assets.user_icon} alt="user-icon" className='w-3 sm:w-5 md:hidden' />
                    <p className='hidden md:block text-[10px] bg-blue-600 text-white px-3 py-1  rounded-xl'>Create Account</p>
                </div>
            </div>

        </div>
    )
}

export default Navbar