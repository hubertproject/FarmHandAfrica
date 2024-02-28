import React, { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
  // Assuming your Navbar component is in a separate file

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
      
      <div className="form-container" style={{ marginTop: "20px" }}>
        {loading ? (
          <div className="flex items-center justify-center ">
            <FadeLoader color={"#008000"} loading={loading} size={50} />
          </div>
        ) : (
          <div className="container mx-auto">
            <div className="max-w-md mx-auto p-10 bg-white rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-bold mb-4 text-green">
                Please fill the Form to get Connected
              </h2>
          <form onSubmit={handleSubmit} style={{ backgroundColor: "#E5E7EB"}}>
            <div className="mb-4">
              <label
                htmlFor="farmerName"
                className="block text-gray-700 font-bold"
              >
                Please enter your full name
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
                htmlFor="farmOperated"
                className="block text-gray-700 font-bold"
              >
                What type of farm do you operate?
              </label>
              <input
                type="text"
                id="farmOperated"
                name="farmOperated"
                value={formData.farmOperated}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="farmAcres"
                className="block text-gray-700 font-bold"
              >
                How many acres is your farm?
              </label>
              <input
                type="text"
                id="farmAcres"
                name="farmAcres"
                value={formData.farmAcres}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="labourersRequired"
                className="block text-gray-700 font-bold"
              >
                On average, how many labourers do you require for your farm
                operations?
              </label>
              <input
                type="text"
                id="labourersRequired"
                name="labourersRequired"
                value={formData.labourersRequired}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="specificSeason"
                className="block text-gray-700 font-bold"
              >
                Are there specific seasons or times of the year when you need
                more labour?
              </label>
              <input
                type="text"
                id="specificSeason"
                name="specificSeason"
                value={formData.specificSeason}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="tasks"
                className="block text-gray-700 font-bold"
              >
                What types of tasks do you typically hire labourers for?
              </label>
              <input
                type="text"
                id="tasks"
                name="tasks"
                value={formData.tasks}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="onlinePlatform"
                className="block text-gray-700 font-bold"
              >
                Would you be open to using online platforms or services for
                recruiting labourers?
              </label>
              <input
                type="text"
                id="onlinePlatform"
                name="onlinePlatform"
                value={formData.onlinePlatform}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="taskCommunication"
                className="block text-gray-700 font-bold"
              >
                How do you communicate tasks, schedules, and expectations to
                your labourers?
              </label>
              <input
                type="text"
                id="taskCommunication"
                name="taskCommunication"
                value={formData.taskCommunication}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="paymentPlatform"
                className="block text-gray-700 font-bold"
              >
                Are you open to different payment methods, such as digital
                transactions or mobile payments?
              </label>
              <input
                type="text"
                id="paymentPlatform"
                name="paymentPlatform"
                value={formData.paymentPlatform}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="training"
                className="block text-gray-700 font-bold"
              >
                Are there specific certifications or training programs you
                prefer labourers to have?
              </label>
              <input
                type="text"
                id="training"
                name="training"
                value={formData.training}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="challenges"
                className="block text-gray-700 font-bold"
              >
                What challenges, if any, have you encountered in recruiting and
                managing labourers for your farm?
              </label>
              <input
                type="text"
                id="challenges"
                name="challenges"
                value={formData.challenges}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="technology"
                className="block text-gray-700 font-bold"
              >
                How comfortable are you with using technology for farm
                management and labour recruitment?
              </label>
              <input
                type="text"
                id="technology"
                name="technology"
                value={formData.technology}
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
          </div>
        )}
      </div>
    </div>
  );
};
export default Form;
