import React from 'react'
import CourseCard from './CourseCard'
import { Link } from 'react-router-dom'

const CourseSection = () => {
    return (
        <div className='flex-col flex items-center justify-center max-sm:px-5 pt-16'>
            <p className='text-lg font-bold' >
                Learn from the best

            </p>
            <p className='max-w-sm text-xs pt-3 leading-4 flex flex-col text-center' >
                Discover our top-rated courses across various categories. From coding and design t    <span>business and wellness, our courses are crafted to deliver results</span>
            </p>
            <CourseCard />
            <Link to={"/course-list"} className='mt-6 border py-1 px-3 rounded-md border-gray-400 '>Show all courses</Link>
        </div>
    )
}

export default CourseSection