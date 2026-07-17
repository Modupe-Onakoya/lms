import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'
import CourseCard from '../../components/student/CourseCard'
import SearchBar from '../../components/student/SearchBar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/student/Footer'

const CourseList = () => {
    const { allCourses, navigate } = useContext(AppContext)
    const [filterCourse, setFilterCourse] = useState([])
    const { input } = useParams()


    useEffect(() => {
        if (allCourses && allCourses.length > 0) {
            const copiedCourse = allCourses.slice()

            input ?
                setFilterCourse(copiedCourse.filter((course) => {
                    return course.courseTitle.toLowerCase().includes(input.toLowerCase())
                }))
                :
                setFilterCourse(copiedCourse)
        }

    }, [allCourses, input])
    return (
        <div className='flex flex-col justify-center'>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='lg:px-36'>
                    <h1 className='text-md font-bold'>
                        Course List
                    </h1>
                    <span className='text-[14px] underline text-blue-600' onClick={() => { navigate("/") }}>Home </span>
                    <span>/</span>
                    <span className='text-[14px]'> Course List</span>
                    {input ? <div className='flex items-center gap-2'>
                        <span>{input}</span>
                        <img src={assets.cross_icon} alt="" onClick={() => { navigate("/course-list") }} />
                    </div> : null}
                </div>
                <div className='flex mt-4 py-2 rounded-sm px-2'>
                    <SearchBar />
                </div>
            </div>

            <div className='flex flex-col justify-center gap-3 md:flex-row flex-wrap lg:px-36'>
                {filterCourse.map((course, index) => (<CourseCard key={index} course={course} />))}
            </div>
            <div className='pt-3'>

                <Footer />
            </div>
        </div>
    )
}

export default CourseList