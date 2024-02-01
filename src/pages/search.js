import React, { useState } from 'react'; // Importing React and useState hook
import axios from 'axios'; // Importing axios for making HTTP requests
import { FaSearch } from 'react-icons/fa'; // Importing FaSearch icon from react-icons
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Importing routing components from react-router-dom

function Search() {
    const [searchQuery, setSearchQuery] = useState(''); // State variable for storing the search query
   
    // Function to handle form submission
    const handleSearch = async (event) => {
        event.preventDefault(); // Preventing the default form submission behavior
        try {
            // Making a GET request to the Google Programmable Search Engine API
            const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_GOOGLE_API_KEY}&cx=${process.env.REACT_GOOGLE_CX}&q=${searchQuery}`);


            console.log(response.data);
        } catch (error) {
            console.error(error); // Logging any error that occurs during the request
        }
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center w-screen h-screen'>
                <h1 className='text-7xl text-azure'> GabAi</h1>
                <br />
                <p className='text-2xl'>Navigate the legal landscape of workplace discrimination</p>
                <br />
                <form onSubmit={handleSearch} >
                    <div className='flex flex-row gap-2'>
                        <input type="text" placeholder='Search' className='w-[50rem] border-2 border-black rounded-xl p-2' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} /> 
                        <button className=' bg-azure-500 text-white font-bold rounded-xl p-2' type="submit">Search</button>
                    </div>                
                </form>
            </div>
        </>
    )
}

export default Search;
