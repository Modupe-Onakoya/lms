import React from 'react'
import { assets } from '../../assets/assets'

export const CallToAction = () => {
    return (
        <div className='sm:px-10 py-10'>
            <h1 className='text-center font-bold'>
                Learn anything, anytime, anywhere
            </h1>
            <p className='text-center text-xs'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat harum inventore excepturi delectus dolores doloremque nostrum
            </p>
            <div className='flex justify-center py-4 gap-2'>
                <p className='text-white bg-blue-500 px-3 py-1 rounded-sm'>
                    Get started
                </p>
                <div className='flex items-center gap-2' >
                    <span > Learn more</span>
                    <img src={assets.arrow_icon} alt="" className='size-3 ' />
                </div>
            </div>
        </div>
    )
}
