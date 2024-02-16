//images
import Search from "../../img/search.png";
import PWA from "../../img/pwa.png";
import Convo from "../../img/convo.png";

function sect3() {
  return (
    <div class="mt-7 flex flex-col justify-center items-center h-screen text-3xl text-center text-black h-auto">
      <h1 className="justify-center text-center text-6xl font-bold">
        <span className="font-bold text-azure">GabAi </span>Features
      </h1>

      <br />

      <div className=" flex flex-row justify-center items-center gap-5 max-md:flex-col ">
        <div class=" w-[30rem] h-[30rem] flex flex-col justify-center items-center landing-section">
          <div className="flex justify-center items-center ">
            <img
              class="h-20 w-20 object-cover rounded-full"
              src={Convo}
              alt=""
            />
          </div>

          <span className="font-bold">Conversation A.I</span>

          <p className="mt-5">
            You can engage in real-time text-based conversition
          </p>
        </div>

        <div class=" w-[30rem] h-[30rem] flex flex-col justify-center items-center landing-section">
          <div className="flex justify-center items-center">
            <img
              class="h-15 w-15 object-cover rounded-full"
              src={Search}
              alt=""
            />
          </div>

          <br />

          <span className="font-bold">Search Engine</span>
          <p className="mt-5">
            You can look up information about workplace discrimition
          </p>
        </div>

        <div class=" w-[30rem] h-[30rem] flex flex-col justify-center items-center landing-section">
          <div className="flex justify-center items-center">
            <img
              class="h-30 w-30 object-cover rounded-full"
              src={PWA}
              alt=""
              className=""
            />
          </div>

          <span className="font-bold">Progresive Web Application</span>
          <p>GabAi can be installed on cross platforms</p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default sect3;
