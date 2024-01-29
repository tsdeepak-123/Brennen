import React from 'react';

function Complaint() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Complaint Registration</h2>
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="studentName" className="block text-sm font-semibold mb-2">
              Student Name:
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={""}
              onChange={""}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="department" className="block text-sm font-semibold mb-2">
              Department:
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={""}
              onChange={""}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="complaintText" className="block text-sm font-semibold mb-2">
              Complaint Text:
            </label>
            <textarea
              id="complaintText"
              name="complaintText"
              value={""}
              onChange={""}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={""}
              onChange={""}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className='flex justify-center'>
          <button type="submit" className="bg-red-700 text-white px-4 py-2 rounded">
            Submit Complaint
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Complaint;
