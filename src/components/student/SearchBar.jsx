import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ data }) => {
    const [input, setInput] = useState(data ? data : "")
    const navigate = useNavigate()

    function searchItem(e) {
        e.preventDefault()
        navigate("/course-list/" + input)
        console.log(input)

    }



    return (
        <form onSubmit={searchItem} className=' max-w-xl border border-gray-300 flex rounded-lg px-2 items-center py-2'>
            <img src={assets.search_icon} alt="" className='w-3' />
            <input type="text" placeholder='Search for courses' value={input} className='px-1 text-[14px] outline-none' onChange={(e) => { setInput(e.target.value) }} />
            <button type='submit' className='bg-blue-600 text-white text-[14px] px-3 py-1 rounded-sm'>Search</button>

        </form>

    )
}

export default SearchBar


