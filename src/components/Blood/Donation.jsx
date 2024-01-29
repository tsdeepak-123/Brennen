import React from "react";
import {useNavigate} from 'react-router-dom'

function Donation() {
  const navigate=useNavigate()
  const backgroundImageUrl = "/Images/blood.jpg";

  const handleBoodDonation=()=>{
    navigate("/donateblood")
  }

  return (
    <div className="mx-4 mt-8 md:mx-16 md:mt-16 relative">
      <h2 className="text-3xl md:text-4xl flex justify-center font-bold mb-4 md:mb-8 text-gray-800">
        Blood Donated
      </h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="relative flex-1 mb-4 md:mb-0">
          <img
            src={backgroundImageUrl}
            alt="Blood Donation Background"
            className="w-full h-48 md:h-64 object-cover rounded-md shadow-md"
          />
          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center w-full mt-4 sm:mt-14">
            <div className="text-5xl font-extrabold text-blue-700">
              <span role="img" aria-label="Heart">
                ❤️
              </span>{" "}
              250+
            </div>
            <p className="text-lg text-gray-800 mt-2">Blood units donated</p>
          </div>
          <div className="md:absolute md:bottom-4 flex justify-center sm:mt-0 mt-2 md:right-4">
            <button onClick={handleBoodDonation} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300 focus:outline-none focus:shadow-outline">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation;
