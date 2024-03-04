import "../../css/section-1.css";

const WorkplaceDiscriminationLaws = () => {
  return (
    <div className="section-1 p-0 m-0">
      <div
        className="
            flex flex-col justify-center
            items-start
            max-md:items-center h-screen w-screen max-md:p-1
            bg-black bg-opacity-50
            "
      >
        <div
          className="
          animate__animated animate__fadeInUp
      flex flex-row justify-between items-center gap-x-20
  
      "
        >
          <div className="mx-[20rem] max-md:mx-0">
            <h1
              className="
           font-bold mb-4
           text-white
            leading-normal
            w-half
            max-md:text-center
            max-md:mx-5
          "
            >
              A safe space against
              <br />
              <span className="text-azure-100">Workplace Discrimination</span>
            </h1>
            <br />
            <p className="mb-4 text-white max-md:px-5 text-justify w-[40rem] max-md:text-center max-md:w-full">
              Explore our guide on workplace discrimination laws in the
              Philippines to gain insights into legal protections, employee
              rights, and the creation of an inclusive workplace.
            </p>

            <div className="flex max-md:justify-center mb-4">
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
    </div>
  );
};

export default WorkplaceDiscriminationLaws;
