 /* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Button from '../layout/Button';

import { Link } from 'react-router-dom';
import Choose from "../components/Choose";

import FadeLoader from "react-spinners/FadeLoader";

const Home = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "600px", // Adjust the height as needed
    width: "100%", // Full width
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <FadeLoader color={"#008000"} loading={loading} size={50} />
        </div>
      ) : (
        <div>
          <div style={backgroundImageStyle}>
            <div className="min-h-[60vh] flex flex-col md:flex-row md:justify-between items-center md:mx-5 mx-5 mt-10">
              <div className="md:w-2/4 text-left rounded-lg p-2">
                <p className="text-green mt-10 text-left text-4xl font-bold font-quicksand">
                  Connect with Skilled Labourers{" "}
                  <p className="text-black font-quicksand">
                  For all your farm work needs
                  </p>
                </p>
                <p className="mt-10 text-start text-2xlg font-bold font-quicksand  text-white">
                  At FarmHand, we believe in cultivating connections that empower
                  agriculture. Our platform serves as the fertile ground where
                  farmers and skilled labourers come together to sow the seeds of
                  success. Welcome to a revolutionary way of building agricultural
                  teams. Register to get connected to over 100 skilled Labourers in our Community.
                </p>
                <div className="mt-5"></div>
                <Link to="/Form">
                  <Button title="Register Now" />
                </Link>
              </div>
            </div>
          </div>

          <Choose />
        </div>
      )}
    </div>
  );
};

export default Home;
