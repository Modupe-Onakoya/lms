import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import Rating from './Rating'
import { AppContext } from '../../context/AppContext'

const CourseCard = ({ course }) => {

    // const cards = [{
    //     img: assets.course_1_thumbnail,
    //     header: "Build Text to image SaaS",
    //     text: "App in React Js",
    //     tutor: "Richard James",
    //     star: <Rating />,
    //     blankStar: assets.star_blank,
    //     Price: "$10.99"

    // }, {
    //     img: assets.course_2_thumbnail,
    //     header: "Build AI BG Removal SaaS",
    //     text: "App in React Js",
    //     tutor: "Richard James",
    //     star: <Rating />,
    //     blankStar: assets.star_blank,
    //     Price: "$10.99"
    // },
    // {
    //     img: assets.course_3_thumbnail,
    //     header: "React Router Complete Course",
    //     text: "In One Video",
    //     tutor: "Richard James",
    //     star: <Rating />,
    //     blankStar: assets.star_blank,
    //     Price: "$10.99"
    // },
    // {
    //     img: assets.course_4_thumbnail,
    //     header: "Build Full Stack E-Commerce",
    //     text: "App in React Js",
    //     tutor: "Richard James",
    //     star: <Rating />,
    //     blankStar: assets.star_blank,
    //     Price: "$10.99"
    // }

    // ]
    const { currency } = useContext(AppContext)
    return (
        // <div className='flex flex-col gap-3 pt-4 md:flex-row md:gap-5' >
        //     {
        //         cards.map((card, idx) => (
        //             <div className='flex flex-col border border-gray-300 rounded-lg gap-0.5 '>
        //                 <img src={card.img} alt="" className='w-50 rounded-t-lg ' />
        //                 <p className='font-bold text-[12px] px-2'>{card.header}</p>
        //                 <p className='px-2 text-[12px] font-bold'> {card.text}</p>
        //                 <p className='text-[12px] text-gray-500 px-2' >  {card.tutor}</p>
        //                 {card.star}
        //                 <p className='px-2 text-[12px] font-bold'> {card.Price}</p>
        //             </div>
        //         ))
        //     }

        // </div >
        <div>
            <img src='course.courseThumbnail' />
            <h3>{course.courseTitle}</h3>
            <p>{course.educator.name}</p>
            <div>
                <p>4.5</p>
                <div>
                    {[...Array(5)].map((_, i) => (
                        <img key={i} src={assets.star} />
                    ))}
                </div>
                <p>22</p>
            </div>
            <p>{currency}{(course.coursePrice - course.discount * coursePrice / 100).toFixed(2)}</p>
        </div>
    )
}

export default CourseCard