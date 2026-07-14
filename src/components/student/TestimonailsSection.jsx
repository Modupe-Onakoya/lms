import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonailsSection = () => {
    return (
        <div className='flex flex-col items-center max-sm:px-5 pt-16 sm:px-10 md:px-14 lg:px-30 '>
            <h1>
                Testimonials
            </h1>
            <h3 className='flex flex-col text-xs md:text-sm max-w-sm text-center'>Hear from our learners as they share theor journey of transformation success, and how our platform has made a difference in thier lives</h3 >

            <div className='flex flex-col items-center gap-3 md:flex-row py-4 '>
                {
                    dummyTestimonial.map((testimonial, idx) => (
                        <div key={idx} className='border border-gray-300 shadow-md rounded-lg '  >
                            <div className='bg-gray-200 flex gap-2 items-center px-2'>
                                <img src={testimonial.image} alt="" className='size-10' />
                                <div>
                                    <p className='text-sm'>{testimonial.name}</p>
                                    <p className='text-sm'>
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>

                            <div >
                                <div className='flex py-3 px-2'>
                                    {[...Array(5)].map((_, index) => (

                                        <img key={index} src={assets.star} className='size-3' />

                                    ))}
                                </div>
                                <p className='px-2 text-sm max-w-xs'>{testimonial.feedback}</p>
                                <p className='py-4 px-2 text-blue-500 underline text-sm'>Read more</p>
                            </div>

                        </div>
                    ))
                }
            </div>

        </div >
    )
}

export default TestimonailsSection