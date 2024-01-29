import React from 'react';

function Leaders() {
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 mt-16 text-gray-800">Meet Our Visionary Leaders</h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        <div className="leader-card bg-white p-8 rounded-lg shadow-md">
          <img
            src="Images/ANURAG.jpg"
            alt="President's Photo"
            className="w-40 h-40 rounded-full mb-6 object-cover shadow-lg mx-auto"
          />
          <h3 className="text-2xl font-bold text-black mb-2">ANURAG</h3>
          <p className="text-lg text-blue-600 mb-2">President</p>
          <p className="text-md text-gray-600">SECOND YEAR BA HISTORY</p>
        </div>

        <div className="leader-card bg-white p-8 rounded-lg shadow-md">
          <img
            src="Images/THARANATH.jpg"
            alt="Secretary's Photo"
            className="w-40 h-40 rounded-full mb-6 object-cover shadow-lg mx-auto"
          />
          <h3 className="text-2xl font-bold text-black mb-2">THARANATH K</h3>
          <p className="text-lg text-blue-600 mb-2">Secretary</p>
          <p className="text-md text-gray-600">SECOND YEAR BA ENGLISH</p>
        </div>
      </div>
    </div>
  );
}

export default Leaders;
