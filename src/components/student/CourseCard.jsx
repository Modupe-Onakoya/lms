import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import Rating from './Rating'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {


    const { currency, calulateRating } = useContext(AppContext)
    return (

        <Link to={"/course/" + course._id} className='space-y-2 border rounded-lg space-between border-gray-300 '>
            <img src={course.courseThumbnail} className='rounded-t-lg w-50 md:w-60 ' />
            <h3 className='font-bold text-[13px]'>{course.courseTitle}</h3>
            <p>{course.educator.name}</p>
            <div className='flex '>
                <p className=' text-[13px]'>{cal}</p>
                <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                        <img key={i} src={assets.star} className='w-4' />
                    ))}
                </div>
                <p className=' text-[13px]'>22</p>
            </div>
            <p>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
        </Link>
    )
}

export default CourseCard