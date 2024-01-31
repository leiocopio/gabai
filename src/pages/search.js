import React from'react';
import { FaSearch } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function Search() {

    return (
        
    <>
             <div className='flex flex-col items-center justify-center w-screen h-screen'>
            <h1 className='text-7xl text-azure'> GabAi</h1>
            <br />
            <p className='text-2xl'>Navigate the legal landscape of workplace discrimination</p>
            <br />
            <form action="search">
                <div className='flex flex-row gap-2'>
                <input type="text" placeholder='Search' className='w-[50rem] border-2 border-black rounded-xl p-2' />
                <Link to="/searchResults">
                <button className=' bg-azure-500 text-white font-bold rounded-xl p-2'>Search</button>
                </Link>
                
                </div>

                
            </form>
        </div>

    </>
    )

}





export default Search;