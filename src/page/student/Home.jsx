import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CourseCard from '../../components/student/CourseCard'

const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center '>
            <Hero />
            <Companies />
            <CourseCard />
        </div>
    )
}

export default Home