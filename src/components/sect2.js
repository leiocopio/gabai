import sec2 from '../components/img/sec2.png'

function sect2() {
    return (
            <div className="flex flex-row justify-around items-center mx-[25rem]">
                    <div className='grid items-center'>
                        <img src={sec2} alt="law " className=' w-[20rem]'/>
                    </div>
              <div className="">
                <h1 className="text-6xl font-bold mb-4">About <span className="text-azure">GabAi</span></h1>
                <p className="text-justify  w-[20rem]">
                Welcome to GabAi, your go-to web application for comprehensive legal guides against workplace discrimination in the Philippines. 
                Empower yourself with valuable insights into local laws, employee rights, and practical strategies for fostering a fair and inclusive workplace. 
                </p>
                

              </div>
            </div>
          );
        }
    


export default sect2;