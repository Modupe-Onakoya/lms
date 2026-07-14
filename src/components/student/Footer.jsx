import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='bg-black w-full text-white md:flex flex-col text-[14px]'>
            <div className='md:flex  justify-between py-10'>
                <div className=' flex flex-col max-md:justify-center max-md:items-center px-5 gap-5 '>
                    <img src={assets.logo_dark} alt="" className='w-25' />
                    <p className='max-w-lg text-center md:max-w-xs text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugit adipisci porro excepturi voluptas numquam debitis natus! Quae, esse? Quos exleniti!</p>
                </div>
                <div className='max-md:py-10 px-5'>
                    <p className='max-md:text-center font-bold'>
                        Company
                    </p>
                    <ul className='flex gap-3 md:flex-col py-2'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className='hidden md:block '>
                    <p>Subscribe to our newaletter</p>
                    <p className='py-2 text-[14px]'>The latest news,updates and resources, sent to your inbox weekly</p>
                    <div className='space-x-2' >
                        <input type="text" placeholder='Enter your email' className='border border-gray-400 rounded-sm py-1 px-2' />
                        <button className='border bg-blue-600 rounded-sm py-1 px-3'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-400 py-3'>
                <p className='px-5 text-center'>Copyright 2024 @ Edemy. All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer