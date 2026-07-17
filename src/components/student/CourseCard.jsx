import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import Rating from './Rating'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'


const CourseCard = ({ course }) => {


    const { currency, calculateRating } = useContext(AppContext)
    return (

        <Link to={"/course/" + course._id} className='space-y-2 border rounded-lg space-between border-gray-300  '>

            <img src={course.courseThumbnail} className='rounded-t-lg w-50 md:w-60 ' />
            <h3 className='font-bold text-[13px] px-2'>{course.courseTitle}</h3>
            <p className='px-2'>{Dhuks}</p>
            <div className='flex px-2 '>
                <p className=' text-[13px]'>{calculateRating(course)}</p>
                <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                        <img key={i} src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} className='w-4' />
                    ))}
                </div>
                <p className=' text-[13px]'>{course.courseRatings.length}</p>
            </div>
            <p className='px-2'>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>

        </Link>
    )
}

export default CourseCard