import React, { useState, useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader";

const Form = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    farmerName: "",
    farmOperated: "",
    farmAcres: "",
    labourersRequired: "",
    specificSeason: "",
    tasks: "",
    onlinePlatform: "",
    taskCommunication: "",
    paymentPlatform: "",
    training: "",
    challenges: "",
    technology: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "farmerName",
      "farmOperated",
      "farmAcres",
      "labourersRequired",
      "specificSeason",
      "tasks",
      "onlinePlatform",
      "taskCommunication",
      "paymentPlatform",
      "training",
      "challenges",
      "technology",
    ];

    const hasMissingFields = requiredFields.some((field) => !data[field]);

    if (hasMissingFields) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/damashub/google_sheets/CAtZXohQFjhACDWH?tabId=Sheet2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              data.farmerName,
              data.farmOperated,
              data.farmAcres,
              data.labourersRequired,
              data.specificSeason,
              data.tasks,
              data.onlinePlatform,
              data.taskCommunication,
              data.paymentPlatform,
              data.training,
              data.challenges,
              data.technology,
              new Date().toLocaleString(),
            ],
          ]),
        }
      );

      if (response.ok) {
        setSuccessMessage("Form submitted successfully!");
        setData({
          farmerName: "",
          farmOperated: "",
          farmAcres: "",
          labourersRequired: "",
          specificSeason: "",
          tasks: "",
          onlinePlatform: "",
          taskCommunication: "",
          paymentPlatform: "",
          training: "",
          challenges: "",
          technology: "",
        });
        setErrorMessage("");
      } else {
        setSuccessMessage("");
        setErrorMessage("Failed to submit form. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSuccessMessage("");
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div className="form-container" style={{ marginTop: "20px" }}>
        {loading ? (
          <div className="flex items-center justify-center ">
            <ClockLoader color={"#008000"} loading={loading} size={30} />
          </div>
        ) : (
          <div className="container mx-auto">
            <div className="max-w-md mx-auto p-10 bg-white rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-bold mb-4 text-green">
                Please fill the Form to get Connected
              </h2>
              <form
                onSubmit={handleSubmit}
                style={{ backgroundColor: "#E5E7EB" }}
              >
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
                    value={data.farmerName}
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
                    value={data.farmOperated}
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
                    value={data.farmAcres}
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
                    value={data.labourersRequired}
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
                    Are there specific seasons or times of the year when you
                    need more labour?
                  </label>
                  <input
                    type="text"
                    id="specificSeason"
                    name="specificSeason"
                    value={data.specificSeason}
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
                    value={data.tasks}
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
                    value={data.onlinePlatform}
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
                    value={data.taskCommunication}
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
                    value={data.paymentPlatform}
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
                    value={data.training}
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
                    What challenges, if any, have you encountered in recruiting
                    and managing labourers for your farm?
                  </label>
                  <input
                    type="text"
                    id="challenges"
                    name="challenges"
                    value={data.challenges}
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
                    value={data.technology}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                  <div className="flex justify-end items-center">
                  {successMessage && (
                    <p className="text-green-500 mt-3">{successMessage}</p>
                  )}
                  {errorMessage && (
                    <p className="text-red-500 mt-3">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    className="bg-green text-black py-2 px-4 rounded-md hover:bg-green-600 transition-all w-full"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;