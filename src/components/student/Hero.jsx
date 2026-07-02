import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {


    return (
        <div className='bg-gradient-to-b from-cyan-100/70 w-full px-3 flex flex-col items-center md:pt-20  pt-25  gap-8'>
            <div className='text-center relative'>
                <h1 className='max-w-sm text-[27px] md:max-w-xl md:text-4xl font-bold  leading-8'>
                    Empower your future with the courses designed to <span className='text-blue-600'>fit your choice</span>
                </h1>
                <img src={assets.sketch} alt="sketch" className='absolute bottom-[-20px] right-0 hidden md:block' />
            </div>
            <p className='text-center max-w-lg text-[12px] hidden sm:block'>
                We bring togther world -class instructions , interactive content and a supportive community to help you achieve your personal and professional goals
            </p>
            <p className='text-center max-w-lg text-[14px] sm:hidden'>
                We bring togther world -class instructions to help you achieve your profffesional goals.
            </p>
            <SearchBar />
        </div >
    )
}

export default Hero