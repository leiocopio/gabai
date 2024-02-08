//Components and Pages
import AgeDemog from "./ageDemog";

function UserDemographics() {
  // TODO: Implement this component
  return (
    <div>
      <div className="flex flex-col bg-gray-300 w-full h-[10rem] mx-10 my-5 rounded-xl">
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
          <AgeDemog />
        </div>
      </div>
    </div>
  );
}

export default UserDemographics;
