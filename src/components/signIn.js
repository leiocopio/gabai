import Popup from 'reactjs-popup';
import { IoIosCloseCircleOutline } from "react-icons/io";
import SignUp from "./signUp";

export default function PopupComponent() {
  return (
    <Popup trigger={<button>Login</button>} modal nested>
      {(close) => (
        <div className="modal h-[28rem] w-[31.25rem] rounded-2xl bg-white flex flex-col mx-10">

            <div className='flex flex-row align-center justify-end p-1'>
                <IoIosCloseCircleOutline className='text-3xl cursor-pointer' onClick={() => close()} />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-bold text-4xl'>Sign In to <span className='text-azure'>GabAi</span></h1>
                <p>Empower your workplace today</p>
            </div>
            <br />
            <div className='flex flex-col items-center justify-center'>
              <input type="text" placeholder='Username' className='w-[25rem] border-2 border-black rounded-xl p-2' />
              <br />
              <input type="password" placeholder='Password' className='w-[25rem] border-2 border-black rounded-xl p-2' />
            </div>
            <div className='flex flex-row mx-12 mt-4'>
              <a href="#">Forgot password?</a>
            </div>
            <br />

            <div className='mx-12'>
              <button className='w-full bg-azure-500 text-white font-bold rounded-xl p-2'>Sign In</button>
            </div>
              <br />
            <div className='flex flex-row items-center justify-center'>
              <p>Don't have an account? <SignUp/> </p>
            </div>

            
        
        </div>
      )}
    </Popup>
  );
}
