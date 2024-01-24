import Popup from 'reactjs-popup';
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function PopupComponent() {
    return (

        <Popup trigger={<a href="#" className='text-azure'>Sign up here</a>} modal nested>

            {close => (
                <div className="modal h-[50rem] w-[31.25rem] rounded-2xl bg-white flex flex-col mx-10">
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


                        {/* Two-column */}


                        <div className='grid grid-cols-2 items-center justify-between py-1'>
                            {/* First Name */}

                            <div>
                                <label htmlFor="">First Name</label>
                                <input type="text" placeholder='Juan' className='w-[12rem] border-2 border-black rounded-xl p-2' />
                            </div>

                            {/* Last Name */}

                            <div>
                                <label htmlFor="">Last Name</label>
                                <input type="text" placeholder='Dela Cruz' className='w-[12rem] border-2 border-black rounded-xl p-2' />
                            </div>

                            {/* Sex */}
                            <div className='flex flex-col'>
                                <label htmlFor="">Sex</label>
                                <select name="sex" id="sex" className='w-[12rem] border-2 border-black rounded-xl p-2'>
                                    <option value=""> -Choose one- </option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>

                                </select>

                            </div>
                            {/* Birtdate */}

                            <div>
                                <label htmlFor="">Birthdate</label>
                                <input type="date" placeholder='mm/dd/yyyy' className='w-[12rem] border-2 border-black rounded-xl p-2'>

                                </input>
                            </div>

                            {/* Province */}

                            <div>
                                <label htmlFor="">Region</label>
                                <select name="region" id="region" className='w-[12rem] border-2 border-black rounded-xl p-2'>
                                    <option value=""> -Region- </option>
                                    <option value="NCR">National Capital Region (NCR)</option>
                                    <option value="CAR">Cordillera Administrative Region (CAR)</option>
                                    <option value="Region 1">Ilocos Region (Region 1)</option>
                                    <option value="Region 2">Cagayan Valley (Region 2)</option>
                                    <option value="Region 3">Central Luzon (Region 3)</option>
                                    <option value="Region 4A">CALABARZON (Region 4A)</option>
                                    <option value="Region 4B">MIMAROPA (Region 4B)</option>
                                    <option value="Region 5">Bicol Region (Region 5)</option>
                                    <option value="Region 6">Western Visayas (Region 6)</option>
                                    <option value="Region 7">Central Visayas (Region 7)</option>
                                    <option value="Region 8">Eastern Visayas (Region 8)</option>
                                    <option value="Region 9">Zamboanga Peninsula (Region 9)</option>
                                    <option value="Region 10">Northern Mindanao (Region 10)</option>
                                    <option value="Region 11">Davao Region (Region 11)</option>
                                    <option value="Region 12">SOCCSKSARGEN (Region 12)</option>
                                    <option value="CARAGA">Caraga (Region 13)</option>
                                    <option value="BARMM">Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)</option>
                                </select>

                            </div>

                            {/* City */}

                            <div className='flex flex-col'>
                                <label htmlFor="">City</label>
                                <select name="city" id="city" className='w-[12rem] border-2 border-black rounded-xl p-2'>
                                    <option value=""> -Choose your city- </option>
                                </select>
                            </div>


                        </div>

                        {/* Back to one column  */}

                        <span className='py-2'></span>

                        {/* Mobile # */}

                        <div className='flex flex-col'>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='juandelacruz@domain.com' className='w-[full] border-2 border-black rounded-xl p-2' />
                        </div>

                        {/* Password */}

                        <div className='flex flex-col'>
                            <label htmlFor="">Password</label>
                            <input type="password" placeholder='●●●●●●●●' className='w-[full] border-2 border-black rounded-xl p-2' />
                        </div>
                        {/* Confirm Password */}

                        <div className='flex flex-col'>
                            <label htmlFor="">Confirm Password</label>
                            <input type="password" placeholder='●●●●●●●●' className='w-[full] border-2 border-black rounded-xl p-2' />
                        </div>

                        {/* They accept the terms by clicking the checkbox */}
                        <span className='py-2'></span>

                        <div>
                            <center>
                                <input type="checkbox" id="terms" name="terms" />
                                <span className='ml-2'>I accept the <a href="#">terms and conditions</a></span>
                            </center>

                        </div>

                        {/* Sign Up now button */}

                        <span className='py-2'></span>



                        <div>
                            <button className='w-full bg-azure-500 text-white font-bold rounded-xl p-2'>Sign Up Now!</button>
                        </div>


                    </div>




                </div>
            )
            }

        </Popup >








    )

}