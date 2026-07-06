import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
    return (
        <div className='flex flex-col items-center pt-16 max-sm:px-3'>
            <h1>
                Trusted by learners from
            </h1>
            <div className='flex gap-10 pt-3 flex-wrap  justify-center '>
                <img src={assets.microsoft_logo} alt="" className='max-sm:w-18' />
                <img src={assets.walmart_logo} alt="" className='max-sm:w-18' />
                <img src={assets.accenture_logo} alt="" className='max-sm:w-18' />
                <img src={assets.adobe_logo} alt="" className='max-sm:w-18' />
                <img src={assets.paypal_logo} alt="" className='max-sm:w-18' />

            </div>
        </div>
    )
}

export default Companies