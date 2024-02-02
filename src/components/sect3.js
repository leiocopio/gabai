import Search from '../img.sec1/search.png'
import PWA from '../img.sec1/pwa.png'
import Convo from '../img.sec1/convo.png'

function sect3(){
    return (
        <div class="flex flex-col m-10 text-3xl text-center text-black">
            
            <h1 className="justify-center"><span className="font-bold text-azure " >GabAi</span>Features</h1>
<div className=" flex flex-row ">
     
    <div class="bg-gray-100 p-20 "> <img  class="h-20 w-20 object-cover rounded-full" src={Convo} alt="" className=" " /><span className="font-bold">Conversition A.I</span>
   
        <li>You can engage in real-time text-based conversition</li>
    </div>
    <div class="bg-gray-100 p-20 "><img class="h-15 w-15 object-cover rounded-full"  src={Search} alt="" /><span className="font-bold">Search Engine</span>
        <li>You can look up information about workplace discrimition</li>
    </div>
    <div class="bg-gray-100 p-20 "><img  class="h-30 w-30 object-cover rounded-full" src={PWA} alt="" className="" /><span className="font-bold">Progresive Web Application</span>
        <li>GabAi can be installed on cross platforms</li>
    </div>
</div>

        </div>
    )
}

export default sect3;