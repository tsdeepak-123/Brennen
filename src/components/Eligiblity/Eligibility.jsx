// Eligibility.js
import React from 'react';
import DonationForm from '../Form/DonationForm';

function Eligibility() {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="container sm:mx-24 mx-auto p-4">
        <div className="bg-white rounded-lg shadow p-6 md:p-8 w-full">
          <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">Blood Donation Eligibility Criteria</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Basic Eligibility Requirements:</h3>
            <ul className="list-disc list-inside">
              <li className="mb-2">Age: 18-65 years old</li>
              <li className="mb-2">Weight: At least 50 kg (110 lbs)</li>
              <li className="mb-2">Good health condition</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Temporary Disqualifications:</h3>
            <ul className="list-disc list-inside">
              <li className="mb-2">Recent surgery or illness</li>
              <li className="mb-2">Pregnancy or breastfeeding</li>
              <li className="mb-2">Tattoos or body piercings in the last 6 months</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Permanent Disqualifications:</h3>
            <ul className="list-disc list-inside">
              <li className="mb-2">HIV positive</li>
              <li className="mb-2">Hepatitis B or C positive</li>
              <li className="mb-2">History of drug use</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eligibility;
