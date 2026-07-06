import React from 'react'
import { assets } from '../../assets/assets'

const Rating = () => {
    return (
        <div className='flex px-2 items-center'>
            <span className='text-[12px]'>4.5</span>
            <img src={assets.star} alt="" className='w-3' />
            <img src={assets.star} alt="" className='w-3' />
            <img src={assets.star} alt="" className='w-3' />
            <img src={assets.star} alt="" className='w-3' />
            <img src={assets.star} alt="" className='w-3' />
            <img src={assets.star_blank} alt="" className='w-3' />
            <span className='text-[12px]'>(122)</span>
        </div>
    )
}

export default Rating