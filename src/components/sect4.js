import React from 'react';

const CallToAction = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Let's stop <span className='text-azure'>discrimination!</span></h1>
        <p className="mb-6">
          Creating a safe space for everyone, where they can get the help they need against workplace discrimination.
          <br />
          GabAi helps you and the many others to shout their voices and be heard!
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Join now!
        </button>
      </div>
    </div>
  );
};

export default CallToAction;