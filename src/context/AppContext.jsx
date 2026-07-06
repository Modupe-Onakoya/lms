import { createContext } from "react";


export const AppContext = createContext()

export function AppContextProvider(props) {
    const currency = import.meta.env.VITE_CURRENCY
    const [allCourses, setAllCourses] = useState([])

    //Fetch all courses

    const value = {
        currency
    }

    return (
        <AppContext.Provider value={value} >
            {props.children}
        </AppContext.Provider>
    )


}