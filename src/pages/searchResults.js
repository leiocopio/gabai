
    // SearchResults.js
    
    import { useLocation } from "react-router-dom";
    import React, { useState } from 'react';
    import axios from 'axios';
    import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
    
    function SearchResults() {

        const location = useLocation();
        const searchResults = location.state?.searchResults || [];
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
            <div className="px-[3rem]">

                <div className="flex flex-col items-center justify-center py-5">

                    <form onSubmit={handleSearch}>

                        <div className='flex flex-row gap-2'>

                            <input type="text" placeholder='Search' className='w-[50rem] border-2 border-black rounded-xl p-2' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />

                            <button className='bg-azure-500 text-white font-bold rounded-xl p-2' type="submit">Search</button>

                        </div>

                    </form>

                </div>
    
                <br />
    
                <div> {/* Search results */}
    
                    <p>Search results for: </p>
    
                    <br />
    
                    <div className="bg-gray-100 p-3 mx-[10rem] rounded-xl "> {/* Search results */}

                        {searchResults.map((result, index) => (

                            <div key={index} className="bg-gray-100 p-3 mx-[10rem] rounded-xl ">
                                <h1 className="text-2xl text-azure">{result.title}</h1>
                                <a href={result.link} target="_blank" className="text-green-700">{result.link}</a>

                                <br />

                                <p>{result.snippet}</p>

                            </div>
                        ))}
                    </div>
                </div>
    
                <br />
    
                {/* Pagination */}
                <div className="flex flex-row items-center justify-center gap-1">
                    {/* ...existing code for pagination buttons */}
                </div>
            </div>
        );
    }
    
    export default SearchResults;

