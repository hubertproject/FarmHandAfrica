/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import lab from "../assets/lab.jpeg";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import FadeLoader from "react-spinners/FadeLoader";

const Choose = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const pointStyle = {
    backgroundColor: "#008000", // Green color
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    color: "white",
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <FadeLoader color={"#008000"} loading={loading} size={50} />
        </div>
      ) : (
        <>
          <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-5 mx-5 mt-5">
            <div className="w-full md:w-2/3 mb-2 mt-5">
              <img src={lab} alt="img" height="980" width="800" />
            </div>

            <div className="w-full md:w-3/4 text-center space-y-2 mb-4 text-left">
              <div className="text-left space-y-2 mb-2">
                <h1 className="text-left font-bold text-3xl mt-2 font-yeseva text-green">
                  Why Choose Us As Your Trusted Partner
                </h1>

                <div style={pointStyle}>
                  <p>
                    <strong>Carefully Sourced Talent:</strong> Our laborers are
                    meticulously chosen, ensuring they bring not only skills but
                    a commitment to excellence that aligns with your farm's
                    goals.
                  </p>
                </div>

                <div style={pointStyle}>
                  <p>
                    <strong>Streamlined Recruitment:</strong> Say goodbye to the
                    stress of finding the right laborers. FarmHand simplifies
                    the hiring process, delivering pre-vetted professionals
                    straight to your farm.
                  </p>
                </div>
                <div style={pointStyle}>
                  <p>
                    <strong>Reliability in Action:</strong> With FarmHand,
                    reliability is non-negotiable. Our laborers are not just
                    competent; they are dedicated to working on time, every
                    time, ensuring your farm operations stay on track.
                  </p>
                </div>

                <div style={pointStyle}>
                  <p>
                    <strong>Seasoned Expertise:</strong> Benefit from laborers
                    with a wealth of experience in farm work. FarmHand brings
                    individuals with proven track records, providing your farm
                    with a skilled workforce that understands the nuances of
                    agricultural operations.
                  </p>
                </div>
                <div style={pointStyle}>
                  <p>
                    <strong>Comprehensive Skillsets:</strong> Our laborers are
                    more than just workers; they are contributors. Expect a
                    comprehensive skill set that enhances your farm's
                    capabilities, bringing efficiency and expertise to every
                    task.
                  </p>
                </div>

                {/* Repeat the above structure for each point */}
              </div>

              <Link to="contact" spy={true} smooth={true} duration={500}></Link>
            </div>
          </div>
         {/*  <div className="h-60 bg-gradient-to-r from-blue-500 to-red-900 md:mx-40 mx-2 mb-10 rounded-t-2xl rounded-b-2xl flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1.5, scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            ></motion.div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Choose;
