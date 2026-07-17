import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import App from '../../App'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import { assets } from '../../assets/assets'

const CourseDetails = () => {
    const { allCourses, calculateRating, calculateChapterTime, calculateCourseDuration, calculateNoOfLectures, } = useContext(AppContext)
    const [courseData, setCourseData] = useState(null)
    const { id } = useParams()

    useEffect(() => {

        const newDetails = allCourses.find((course) => course._id === id);

        setCourseData(newDetails)



    }, [allCourses, id])


    return courseData ? (
        <>
            <div className='flex md:flex-row flex-col gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>


                <div className='absolute h-[500px] top-0 left-0 w-full -z-1 bg-gradient-to-b from-cyan-100/70'>

                </div>
                {/* left column */}

                <div className='max-w-xl z-10 text-gray-500'>
                    <h1 className=''>{courseData.courseTitle}</h1>
                    <p dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}></p>
                </div>


                {/* ratings and reviews */}
                <div className='flex px-2 pt-3 pb-1 text-sm'>
                    <p className=' text-[13px]'>{calculateRating(courseData)}</p>
                    <div className='flex'>
                        {[...Array(5)].map((_, i) => (
                            <img key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} className='w-4' />
                        ))}
                    </div>
                    <p className='text-blue-600 text-[13px]'>({courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? "ratings" : "rating"})</p>

                    <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? "students" : "student"}</p>

                    <p className='text-sm'> Course by <span className='text-blue-600 underline'>Dhuks</span>
                    </p>

                    <div className='pt-8 text-gray-800'>
                        <h2 className='text-xl font-semibold '>Course Structure</h2>
                    </div>
                </div>

                {/* right column */}
                <div>


                </div>

            </div>


        </>
    )
        : <Loading />
}

export default CourseDetails