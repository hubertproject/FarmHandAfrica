import React, { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";

const Form = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
    // logic to handle the form submission here
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
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <FadeLoader color={"#008000"} loading={loading} size={50} />
        </div>
      ) : (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-2xl shadow-2xl mb-5">
          <h2 className="text-2xl font-bold mb-4 text-green">
            Please fill the Form to get Connected
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="farmerName"
                className="block text-gray-700 font-bold"
              >
                What is your Fullname?:
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
              <label
                htmlFor="farmerInitials"
                className="block text-gray-700 font-bold"
              >
                What type of farm do you operate?
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
              <label
                htmlFor="connectionPreference"
                className="block text-gray-700 font-bold"
              >
                How many acres is your farm?
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
              <label
                htmlFor="connectionPreference"
                className="block text-gray-700 font-bold"
              >
                On average, how many labourers do you require for your farm
                operations?
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
              <label
                htmlFor="connectionPreference"
                className="block text-gray-700 font-bold"
              >
                Are there specific seasons or times of the year when you need
                more labour?
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
              <label
                htmlFor="connectionPreference"
                className="block text-gray-700 font-bold"
              >
                What types of tasks do you typically hire labourers for?
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
              <label
                htmlFor="connectionPreference"
                className="block text-gray-700 font-bold"
              >
                Would you be open to using online platforms or services for
                recruiting labourers?
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
              <label
                htmlFor="connectionPreference"
                className="block text-gray-700 font-bold"
              >
                How do you communicate tasks, schedules, and expectations to
                your labourers?
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
              <label
                htmlFor="connectionPreference"
                className="block text-gray-700 font-bold"
              >
                Are you open to different payment methods, such as digital
                transactions or mobile payments?
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
              <label
                htmlFor="connectionPreference"
                className="block text-gray-700 font-bold"
              >
                Are there specific certifications or training programs you
                prefer labourers to have?
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
              <label
                htmlFor="connectionPreference"
                className="block text-gray-700 font-bold"
              >
                What challenges, if any, have you encountered in recruiting and
                managing labourers for your farm?
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
              <label
                htmlFor="connectionPreference"
                className="block text-gray-700 font-bold"
              >
                How comfortable are you with using technology for farm
                management and labour recruitment?
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

            <button
              type="submit"
              className="bg-green text-black py-2 px-4 rounded-md hover:bg-green-600 transition-all w-full"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
