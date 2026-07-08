import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";



export const AppContext = createContext()

export function AppContextProvider(props) {
    const currency = import.meta.env.VITE_CURRENCY
    const [allCourses, setAllCourses] = useState([])
    const navigate = useNavigate()

    //Fetch all courses


    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses)
    }

    useEffect(() => {
        fetchAllCourses()
    })

    // Function to calculate average rating of course 

    const calculateRting = (course) => {

        if (course.courseRating.length === 0) {
            return 0
        }
        let totalRating = 0

        course.courseRating.forEach(rating => {
            totalRating += rating.rating
        })

        return totalRating / course.courseRating.length
    }

    const value = {
        currency, allCourses, navigate, calculateRting
    }

    return (
        <AppContext.Provider value={value} >
            {props.children}
        </AppContext.Provider>
    )


}