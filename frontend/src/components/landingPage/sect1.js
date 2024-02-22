import Section1bg from "../../img/sect1-bg.jpg";

const WorkplaceDiscriminationLaws = () => {
  return (
    <div className="p-8 mx-[10rem] flex flex-col justify-center items-center h-screen max-md:p-1">
      <div
        className="
      flex flex-row justify-between items-center gap-x-20
      max-lg:flex-col-reverse
      "
      >
        <div>
          <h1
            className="
           font-bold mb-4
            leading-normal
            text-center
            max-md:mx-1
          "
          >
            A safe space against Workplace
            <span className="text-azure"> Discrimination</span>
          </h1>
          <br />
          <p className="mb-4 text-center">
            Explore our guide on workplace discrimination laws in the
            Philippines to gain insights into legal protections, employee
            rights, and the creation of an inclusive workplace.
          </p>

          <div className="flex justify-center">
            <button
              className="
              bg-azure hover:bg-blue-700 text-white p-3 rounded-lg
              h-55 w-25 max-md:w-32 lg:w-48"
            >
              Let's talk!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkplaceDiscriminationLaws;
