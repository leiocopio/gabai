//import sec2 from "./img/sec2.png";
import sec2 from "../../img/sec2.png";

function sect2() {
  return (
    <div
      className="

      flex flex-row justify-around items-center px-[15rem]
      max-lg:flex-col
      max-md:px-2
      py-10
      "
    >
      <div className="flex justify-center items-center shrink-0">
        <img
          src={sec2}
          alt="law "
          className="flex-shrink-0 resize-none w-[20rem] bg-cover"
        />
      </div>
      <span className="p-4"></span>
      <div className="p-1">
        <h1 className=" font-bold mb-4 max-md:text-center">
          About <span className="text-azure">GabAi</span>
        </h1>
        <br />
        <p
          className="text-justify
        leading-loose
        max-md:text-center"
        >
          Welcome to GabAi, your go-to web application for comprehensive legal
          guides against workplace discrimination in the Philippines. Empower
          yourself with valuable insights into local laws, employee rights, and
          practical strategies for fostering a fair and inclusive workplace.
        </p>
      </div>
    </div>
  );
}

export default sect2;
