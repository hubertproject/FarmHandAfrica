 /* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

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

  const bulletListStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const pointStyle = {
    /* backgroundColor: "black", */ // Green color
    padding: "5px",
    borderRadius: "8px",
    marginBottom: "20px", // Adjust the margin to add more space
    color: "black",
    display: "flex",
    alignItems: "left", // Align icon vertically in the middle
  };

  const checkmarkStyle = {
    marginRight: "10px", // Adjust the spacing between icon and text
  };

  const strongTextStyle = {
    marginRight: "10px", // Adjust the spacing between strong text and next text
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
              <img src="https://plus.unsplash.com/premium_photo-1661812347879-4f953c3f2679?q=80&w=1449&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" height="980" width="100%" />
            </div>

            <div className="w-full md:w-3/4 text-center space-y-2 mb-4 text-left">
              <div className="text-left space-y-2 mb-2">
                <h1 className="text-black mt-5 text-left text-4xl font-bold font-quicksand">
                  Why Choose{" "}
                  <span className="text-green font-quicksand">FarmHand?</span>
                </h1>

                <ul style={bulletListStyle}>
                  <li style={pointStyle}>
                    <span style={checkmarkStyle}>✔</span>
                    <strong style={strongTextStyle}>Carefully Sourced Talent:</strong> Our laborers are
                    carefully chosen, ensuring they bring not only skills but
                    a commitment to excellence that aligns with your farm's
                    goals.
                  </li>

                  <li style={pointStyle}>
                    <span style={checkmarkStyle}>✔</span>
                    <strong style={strongTextStyle}>Streamlined Recruitment:</strong> Say goodbye to the
                    stress of finding the right laborers. FarmHand simplifies
                    the hiring process, delivering pre-vetted professionals
                    straight to your farm.
                  </li>

                  <li style={pointStyle}>
                    <span style={checkmarkStyle}>✔</span>
                    <strong style={strongTextStyle}>Reliability in Action:</strong> With FarmHand,
                    reliability is non-negotiable. Our laborers are not just
                    competent; they are dedicated to working on time, every
                    time, ensuring your farm operations stay on track.
                  </li>

                  <li style={pointStyle}>
                    <span style={checkmarkStyle}>✔</span>
                    <strong style={strongTextStyle}>Seasoned Expertise:</strong> Benefit from laborers
                    with a wealth of experience in farm work. FarmHand brings
                    individuals with proven track records, providing your farm
                    with a skilled workforce that understands the nuances of
                    agricultural operations.
                  </li>

                  <li style={pointStyle}>
                    <span style={checkmarkStyle}>✔</span>
                    <strong style={strongTextStyle}>Comprehensive Skillsets:</strong> Our laborers are
                    more than just workers; they are contributors. Expect a
                    comprehensive skill set that enhances your farm's
                    capabilities, bringing efficiency and expertise to every
                    task.
                  </li>
                </ul>
              </div>

              <Link to="contact" spy={true} smooth={true} duration={500}></Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Choose;
