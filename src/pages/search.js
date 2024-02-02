
    import React, { useState } from 'react';
    import axios from 'axios';
    import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
    
    function Search() {
        const [searchQuery, setSearchQuery] = useState('');
        const ApiKey = process.env.REACT_APP_GOOGLE_API_KEY;
        const Cx = process.env.REACT_APP_GOOGLE_CX;
        const navigate = useNavigate();
    
        const handleSearch = async (event) => {
            event.preventDefault();
            try {
                const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${ApiKey}&cx=${Cx}&q=${searchQuery}`);
                const searchResults = response.data.items;
                // Navigate to searchResults route and pass search results as state
                navigate('/searchResults', { state: { searchResults } });
            } catch (error) {
                console.error(error);
            }
        };
    
    
        return (
            <div className='flex flex-col items-center justify-center w-screen h-screen'>
                <h1 className='text-7xl text-azure'> GabAi</h1>

                <br />

                <p className='text-2xl'>Navigate the legal landscape of workplace discrimination</p>

                <br />
                
                <form onSubmit={handleSearch}>

                    <div className='flex flex-row gap-2'>
                        <input type="text" placeholder='Search' className='w-[50rem] border-2 border-black rounded-xl p-2' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />

                        <button className='bg-azure-500 text-white font-bold rounded-xl p-2' type="submit">Search</button>
                    </div>

                </form>
            </div>
        );
    }
    
    export default Search;

