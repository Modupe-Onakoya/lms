import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ data }) => {
    const [input, setInput] = useState(data ? data : "")
    const navigate = useNavigate()

    function searchItem(e) {
        e.preventDefault
        navigate("/course-list/" + input)

    }



    return (
        <form onSubmit={searchItem} className=' max-w-xl border border-gray-300 flex rounded-lg pl-2 items-center'>
            <img src={assets.search_icon} alt="" className='w-4 ' />
            <input type="text" placeholder='Search for courses' value={input} className='w-full h-full outline-none' onChange={(e) => { setInput(e.target.value) }} />
            <button type='submit' className='text-white bg-blue-600 md:px-6 px-2 py-1 h-fit rounded-sm' >search</button>
        </form>

    )
}

export default SearchBar


