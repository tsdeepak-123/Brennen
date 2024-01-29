import React from 'react';
import { Link } from 'react-router-dom';

function Service() {
  return (
    <>
    <h2 className="flex justify-center text-4xl font-bold mb-8 mt-16 text-gray-800">Join With Us</h2>
   
    <div className="service-container flex flex-wrap gap-8 justify-center">
      <Link to="/donateblood" className="service-card">
        <div className="card bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold text-black mb-2">Donate Blood</h3>
          <p>
            Click here to donate blood and save lives.
          </p>
        </div>
      </Link>

      <Link to="/complaints" className="service-card">
        <div className="card bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold  text-black mb-2">Complaint Registration</h3>
          <p>
            Register your complaints and we'll address them.
          </p>
        </div>
      </Link>
    </div>
    </>
  );
}

export default Service;
