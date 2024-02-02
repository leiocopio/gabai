import Law from '../components/img/Law.png'

const WorkplaceDiscriminationLaws = () => {
  return (
    <div className="p-8 mx-[10rem] flex flex-col">

      <div className='flex flex-row justify-between items-center'>
      <div>
        <h1 className="text-6xl font-bold mb-4">A safe space against 
        <br/>Workplace<span className='text-azure'> Discrimination</span>
       </h1> 

      <p className="text-lg mb-4">
        Explore our guide on workplace discrimination laws in the Philippines to gain insights<br/> into legal protections, 
        employee rights, and the creation of an inclusive workplace.
      </p>

      <div className='flex'>
        <button className='bg-azure text-white py-5 px-9 rounded-lg
         h-55 w-25 max-md:w-32 lg:w-48'>Let's talk!</button>
        </div>
      </div>


      <div className='grid items-center'>
      <img src={Law} alt="law " className=' w-[30rem]'/>
      </div>

      </div>
    
    
    </div>
      


  );
};

export default WorkplaceDiscriminationLaws;