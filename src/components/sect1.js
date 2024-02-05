import Law from "../components/img/Law.png";

const WorkplaceDiscriminationLaws = () => {
  return (
    <div
      className="p-8 mx-[10rem] flex flex-col justify-center items-center h-screen
        max-md:p-1"
    >
      <div
        className="
      flex flex-row justify-between items-center gap-x-20
      max-md:flex-col-reverse
      "
      >
        <div>
          <h1
            className="
            text-6xl font-bold mb-4 
            max-md:text-center
            max-md:mx-1
          "
          >
            A safe space against
            <br />
            Workplace<span className="text-azure"> Discrimination</span>
          </h1>
          <br />
          <p className="text-lg mb-4 max-md:text-center">
            Explore our guide on workplace discrimination laws in the
            Philippines to gain insights
            <br /> into legal protections, employee rights, and the creation of
            an inclusive workplace.
          </p>

          <div className="flex max-md:justify-center">
            <button
              className="
              bg-azure text-white p-3 rounded-lg
              h-55 w-25 max-md:w-32 lg:w-48"
            >
              Let's talk!
            </button>
          </div>
        </div>

        <div className="grid items-center">
          <img src={Law} alt="law " className=" w-[30rem]" />
        </div>
      </div>
    </div>
  );
};

export default WorkplaceDiscriminationLaws;
