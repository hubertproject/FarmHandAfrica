// Form.jsx

import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    farmerName: "",
    farmerInitials: "",
    connectionPreference: "",
    farmDetails: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic to handle the form submission here
    console.log("Form submitted:", formData);
    // Reset the form data after submission if needed
    setFormData({
      farmerName: "",
      farmerInitials: "",
      connectionPreference: "",
      farmDetails: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Farm Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="farmerName" className="block text-gray-700 font-bold">
            Farmer's Name:
          </label>
          <input
            type="text"
            id="farmerName"
            name="farmerName"
            value={formData.farmerName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="farmerInitials" className="block text-gray-700 font-bold">
            Farmer's Initials:
          </label>
          <input
            type="text"
            id="farmerInitials"
            name="farmerInitials"
            value={formData.farmerInitials}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="connectionPreference" className="block text-gray-700 font-bold">
            Connection Preference:
          </label>
          <input
            type="text"
            id="connectionPreference"
            name="connectionPreference"
            value={formData.connectionPreference}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="farmDetails" className="block text-gray-700 font-bold">
            Farm Details:
          </label>
          <textarea
            id="farmDetails"
            name="farmDetails"
            value={formData.farmDetails}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded-md"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
