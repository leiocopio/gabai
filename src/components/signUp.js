import Popup from'reactjs-popup';
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function PopupComponent() {
  return (

    <Popup trigger={<a href="#" className='text-azure'>Sign up here</a>} modal nested>

        {close => (
            <div className="modal h-[28rem] w-[31.25rem] rounded-2xl bg-white flex flex-col mx-10">
                {/* Close btn */}

                <div className='flex flex-row align-center justify-end p-1'>
                    <IoIosCloseCircleOutline className='text-3xl cursor-pointer' onClick={() => close()} />
                </div>

                {/* Sign up form 1*/}

                <div className='flex flex-col items-center justify-center'>
                    <h1 className='font-bold text-4xl'>Sign Up to <span className='text-azure'>GabAi</span></h1>
                    <p>Register now for a richer, more empowered journey!</p>
                </div>

                <div className='flex flex-col px-5 py-5'>

                    {/* Username*/}

                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='juandelacruz123' className='w-[auto] border-2 border-black rounded-xl p-2' />
                    
                    
                    {/* First Name and Last Name */}


                    <div className='grid grid-cols-2 items-center justify-between py-1'>
                    {/* First Name*/}

                    <div>
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder='Juan' className='w-[full] border-2 border-black rounded-xl p-2' />
                    </div>

                    {/* Last Name*/}

                    <div>
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder='Dela Cruz' className='w-[full] border-2 border-black rounded-xl p-2' />
                    </div>

                    </div>
                    
                        
                </div>

            
            </div>
        )}

    </Popup>








  )

}