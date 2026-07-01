import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const Hero = () => {

    const [input, setInput] = useState("")

    return (
        <div className='bg-gradient-to-b from-cyan-100/70 px-3 sm:px-10 md:px-14 lg:px-34 flex flex-col items-center md:py-15  py-5 sm:py-10 gap-8'>
            <div className='text-center relative'>
                <h1 className='max-w-md md:max-w-xl md:text-4xl font-bold  '>
                    Empower your future with the courses designed to <span className='text-blue-600'>fit your choice</span>
                </h1>
                <img src={assets.sketch} alt="sketch" className='absolute bottom-[-20px] right-0' />
            </div>
            <p className='text-center max-w-lg text-[12px] '>
                We bring togther world -class instructions , interactive content and a supportive community to help you achieve your personal and professional goals
            </p>
            <div className='border border-gray-300 flex rounded-lg pl-2 items-center'>
                <img src={assets.search_icon} alt="" className='w-4 ' />
                <input type="text" placeholder='Search for courses' value={input} className='w-90 h-6 px-2 border-none outline-none' onChange={(e) => { setInput(e.target.value) }} />
                <button className='text-white bg-blue-600 px-6 py-1 h-fit rounded-sm' >search</button>
            </div>
        </div>
    )
}

export default Hero