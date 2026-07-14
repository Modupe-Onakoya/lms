import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/react'
import { AppContext } from '../../context/AppContext'

const Navbar = () => {
    const { navigate, isEducator } = useContext(AppContext)


    const isCourseList = location.pathname.includes("/course-list")

    const { openSignIn } = useClerk()
    const { user } = useUser()
    return (
        <div className={`px-3 sm:px-10 md:px-14 lg:px-36 py-4 border-b border-gray-300 ${isCourseList ? "bg-white" : "bg-cyan-100/70"}`}>
            <div className='flex items-center justify-between'>
                <img src={assets.logo} alt="logo" className='w-15 cursor-pointer' onClick={() => { navigate("/") }} />
                <div className=' hidden md:flex items-center gap-1 text-gray-500'>
                    {user && <> <button className='sm:text-[13px] text-[10px] border-r pr-2 border-gray-300 ' onClick={() => { useNavigate("/educator") }}>{isEducator ? 'Educator Dashboard' : 'Become an educator'} </button>
                        <Link to={"/my-enrollments"} className=' sm:text-[13px] text-[10px] '>My Enrollments</Link> </>}

                    {user ? <UserButton /> : <button className='hidden md:block text-[10px] bg-blue-600 text-white px-3 py-1  rounded-xl cursor-pointer' onClick={() => { openSignIn() }}>Create Account</button>}
                </div>
                <div className='md:hidden flex items-center gap-2 '>
                    {user && <> <button className='sm:text-[13px] text-[10px] border-r pr-2 border-gray-300 ' onClick={() => { useNavigate("/educator") }}>{isEducator ? 'Educator Dashboard' : 'Become an educator'} </button>
                        <Link to={"/my-enrollments"} className=' sm:text-[13px] text-[10px] '>My Enrollments</Link> </>}
                    {user ? <UserButton /> : <img src={assets.user_icon} alt="user-icon" className='w-5 sm:w-5 md:hidden' onClick={() => { openSignIn() }} />}
                </div>
            </div>

        </div>
    )
}
export default Navbar