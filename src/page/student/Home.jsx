import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CourseCard from '../../components/student/CourseCard'
import CourseSection from '../../components/student/CourseSection'
import TestimonailsSection from '../../components/student/TestimonailsSection'
import Footer from '../../components/student/Footer'
import { CallToAction } from '../../components/student/CallToAction'

const Home = () => {
    return (
        <div className='flex flex-col  items-center  h-screen'>
            <Hero />
            <Companies />
            <CourseSection />
            <TestimonailsSection />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default Home