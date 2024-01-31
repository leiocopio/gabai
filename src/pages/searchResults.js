
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Results() {
    return (
        <>
        <div className="px-[3rem]">

            
        <div className="flex flex-col items-center justify-center py-5"> {/* Search bar and search button  */}
            <form action="search">
                <div className='flex flex-row gap-2'>
                <input type="text" placeholder='Search' className='w-[50rem] border-2 border-black rounded-xl p-2' />
                <Link to="/searchResults">
                <button className=' bg-azure-500 text-white font-bold rounded-xl p-2'>Search</button>
                </Link>
                </div>   
            </form>
        </div>

        <br />
            
        <div> {/* Search results */}
            <p>Search results for: </p>
                <br />

            <div className="bg-gray-100 p-3 mx-[10rem] rounded-xl "> {/* Search results */}
                <h1 className="text-2xl text-azure"> 
                    Lorem Ipsum Dolor 
                </h1>
                <a href="#" className="text-green-700">https://domain.com</a>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
<br />


            {/* Pagination */}
            <div className="flex flex-row items-center justify-center gap-1">
            <button className=" rounded-full p-2 w-10 h-10">Prev</button>
                <br />
                <button className="bg-gray-200 text-black rounded-full p-2 w-10 h-10">1</button>
                <button className=" rounded-full p-2 w-10 h-10">2</button>
                <button className=" rounded-full p-2 w-10 h-10">3</button>
                <button className=" rounded-full p-2 w-10 h-10">4</button>
                <button className=" rounded-full p-2 w-10 h-10">5</button>
                <p>...</p>
                <button className=" rounded-full p-2 w-10 h-10">10</button>
                <br />
            <button className=" rounded-full p-2 w-10 h-10">Next</button>
            </div>                
        </div>
        </>
    )
}

export default Results;