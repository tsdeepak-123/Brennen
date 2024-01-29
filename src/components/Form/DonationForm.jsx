import React from 'react';

function DonationForm() {
  return (
    <div className=" min-h-screen flex items-center justify-center mt-14">
    <div className="container sm:mx-24 mx-auto p-4">
    <div className="bg-white rounded-lg shadow p-6 md:p-8 w-full">
      <h2 className="text-2xl font-semibold mb-6">Blood Donation Data Collection Form</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input type="text" id="name" name="name" value={""} onChange={""} className="mt-1 p-2 w-full border rounded-md" required />
        </div>

        <div className="mb-4">
          <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-600" required>
            Blood Group:
          </label>
          <input type="text" id="bloodGroup" name="bloodGroup" value={""} onChange={""} className="mt-1 p-2 w-full border rounded-md" required />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-600" required>
            Age:
          </label>
          <input type="number" id="age" name="age" value={""} onChange={""} className="mt-1 p-2 w-full border rounded-md" required />
        </div>

        <div className="mb-4">
          <label htmlFor="weight" className="block text-sm font-medium text-gray-600" required>
            Weight (kg):
          </label>
          <input type="number" id="weight" name="weight" value={""} onChange={""} className="mt-1 p-2 w-full border rounded-md" required />
        </div>

        <div className="mb-4">
          <label htmlFor="lastDonated" className="block text-sm font-medium text-gray-600">
            Last Donated:
          </label>
          <input type="date" id="lastDonated" name="lastDonated" value={""} onChange={""} className="mt-1 p-2 w-full border rounded-md" required />
        </div>

        <div className="mb-4">
          <label htmlFor="department" className="block text-sm font-medium text-gray-600">
            Department:
          </label>
          <input type="text" id="department" name="department" value={""} onChange={""} className="mt-1 p-2 w-full border rounded-md" required />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
            Phone Number:
          </label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={""} onChange={""} className="mt-1 p-2 w-full border rounded-md" required />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-red-700 text-white p-3 rounded-md hover:bg-red-400 focus:outline-none focus:ring focus:border-green-700">
            Donate Blood
          </button>
        </div>
    </div>
    </div>
    </div>
  );
}

export default DonationForm;
