//images
import Search from "../../img/search.png";
import PWA from "../../img/pwa.png";
import Convo from "../../img/convo.png";

function sect3() {
  return (
    <div className="mt-7 flex flex-col justify-center items-center text-3xl text-center text-black h-auto">
      <h1 className="justify-center text-center text-6xl font-bold">
        <span className="font-bold text-azure">GabAi </span>Features
      </h1>

      <br />

      <div className=" flex flex-row justify-center items-center gap-5 max-md:flex-col w-screen">
        <div className=" w-[30rem] h-[30rem] flex flex-col justify-center items-center landing-section">
          <div className="flex justify-center items-center ">
            <img
              className="h-20 w-20 object-cover rounded-full"
              src={Convo}
              alt=""
            />
          </div>

          <span className="font-bold">Conversation A.I</span>

          <p className="text-3xl">
            You can engage in real-time text-based conversition
          </p>
        </div>

        <div className=" w-[30rem] h-[30rem] flex flex-col justify-center items-center landing-section">
          <div className="flex justify-center items-center">
            <img
              className="h-15 w-30 object-cover rounded-full"
              src={Search}
              alt=""
            />
          </div>

          <br />

          <span className="font-bold">Search Engine</span>
          <p className="text-3xl">
            You can look up information about workplace discrimition
          </p>
        </div>

        <div className=" w-[30rem] h-[30rem] flex flex-col justify-center items-center landing-section">
          <div className="flex justify-center items-center">
            <img
              className="h-30 w-30 object-cover rounded-full"
              src={PWA}
              alt=""
            />
          </div>

          <span className="font-bold">Progresive Web Application</span>
          <p className="text-3xl">GabAi can be installed on cross platforms</p>
        </div>
        <br />
      </div>
    </div>
  );
}

export default sect3;
