
    import './css/nav.css'
    import { FaSearch } from "react-icons/fa";
    import { BsMoon } from "react-icons/bs";
    
    function Navbar() {
    
    return(
    <>
  
    <nav className= "h-[3.875rem] w-full px-[1.25rem] font-bold border-b-2 border-azure-500">
          {/* Brand Name */}
        <div className='text-2xl'>
            GabAI
        </div>
    {/* Search Bar */}
    <div className='flex flex-row items-center gap-x-5'>

        <div className='flex flex-row '>
            {/* Login Btn */}
            <button className=' border-2 border-azure p-2 rounded-md text-azure font-bold text-xl'>
            Log In
            </button>
        </div>

        <div>
            {/* Search Icon */}
            <FaSearch className='text-2xl'/>
        </div>
        <div>
            {/* Search Icon */}
            <BsMoon className='text-2xl'/>
        </div>
    </div>
    
    
    </nav>
    
    </>
    
        )
    
    
    }
    
    export default Navbar;
