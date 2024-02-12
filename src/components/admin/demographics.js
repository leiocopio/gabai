//Components and Pages
import SexDemog from "./sexDemog";

function UserDemographics() {
  return (
    <div>
      <div className="flex flex-col bg-gray-300 w-full h-auto mx-10 my-5 rounded-xl">
        <div className="flex flex-col w-full p-1 my-4 ">
          <ul className="flex flex-row justify-between gap-1 items-start text-white">
            <li className="border-2 w-full border-white p-1 rounded-xl">Sex</li>
            <li className="border-2 w-full border-white p-1 rounded-xl">Age</li>
            <li className="border-2 w-full border-white p-1 rounded-xl">
              Location
            </li>
          </ul>
        </div>

        {/* TODO: Graph */}

        <div>
          <SexDemog />
        </div>
      </div>
    </div>
  );
}

export default UserDemographics;
