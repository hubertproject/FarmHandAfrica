import React, { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";

const About = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div style={{ backgroundColor: "#14431B" }} className="min-h-screen py-10 ">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:pr-8">
          <h1 className="text-4xl font-bold font-quicksand mb-20 text-white">About FarmHand</h1>
          <p className="text-white text-2xl font-quicksand mb-10">
            FarmHand is dedicated to enhancing agriculture productivity by seamlessly connecting farmers with skilled laborers. Our commitment lies in providing farmers with top-tier laborers while reducing the burden of recruitment. We recognize the pivotal role skilled laborers play in farm success, hence our mission to streamline the process for the farmers. With FarmHand, managing laborers is effortless, allowing farmers to focus on optimizing farm operations.
          </p>
           
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative">
            {loading ? (
              <div className="flex items-center justify-center h-96">
                <FadeLoader color={"#008000"} loading={loading} size={50} />
              </div>
            ) : (
              <img
                src="https://plus.unsplash.com/premium_photo-1682147003117-503b926d51d0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
                alt="About Image"
                className="rounded-lg shadow-lg mt-5"
                style={{ width: "100%", height: "600px" }} // Adjust image size here
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
