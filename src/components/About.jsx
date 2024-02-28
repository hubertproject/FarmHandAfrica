import React, { useState, useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader";

const About = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div style={{ backgroundColor: "#14431B" }} className="mt-5 py-5">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:pr-8">
          <h1 className="text-4xl font-bold font-quicksand mb-10 text-white text-center">About FarmHand</h1>
          <p className="text-white text-xl font-quicksand mb-10 text-left">
            FarmHand is dedicated to enhancing agriculture productivity by seamlessly connecting farmers with skilled laborers. Our commitment lies in providing farmers with top-tier laborers while reducing the burden of recruitment. We recognize the pivotal role skilled laborers play in farm success, hence our mission to streamline the process for the farmers. With FarmHand, managing laborers is effortless, allowing farmers to focus on optimizing farm operations.
          </p>
           
        </div>
        <div className="w-full lg:w-2/4">
          <div className="relative">
            {loading ? (
              <div className="flex items-center justify-center h-96">
                <ClockLoader color={"#008000"} loading={loading} size={30} />
              </div>
            ) : (
              <img
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
                alt="About Image"
                className="rounded-xl shadow-lg gap-5 md:mx-5 mx-2  mt-5"
                style={{ width: "600px", height: "400px" }} // Adjust image size here
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
