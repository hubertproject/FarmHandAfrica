/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import lab1 from "../assets/lab1.jpeg";
import { Link } from "react-router-dom";

// import { motion } from "framer-motion";

import FadeLoader from "react-spinners/FadeLoader";

const About = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <FadeLoader color={"#008000"} loading={loading} size={50} />
        </div>
      ) : (
        <>
          <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-5 mx-5 mt-5">
            <div className="w-full md:w-2/3 mb-10 mt-10">
              <img src={lab1} alt="img" height="900" width="800" />
            </div>

            <div className="w-full md:w-3/4 text-center space-y-2 mb-4 text-left">
              <div className="text-left space-y-2 mb-2">
              <h1 className="text-left font-bold text-3xl sm:text-4xl mt-2 font-yeseva text-green mt-20">
  About Us
</h1>
                <p>
                   Welcome to FarmHand, where we redefine
                  agriculture by providing carefully selected, highly skilled
                  laborers. We go beyond conventional recruitment, offering a
                  transformative experience that enhances your farm operations.
                  At FarmHand, we understand the unique needs of farmers. Our
                  commitment is to simplify the process of finding reliable and
                  skilled laborers, eliminating the stress associated with
                  recruitment. We bring a curated pool of professionals who not
                  only possess the necessary skills but also embody a dedication
                  to excellence. Choose FarmHand for a streamlined and efficient
                  recruitment process that ensures punctual and reliable
                  laborers. Our seasoned professionals bring a wealth of
                  experience to your farm, contributing to its success. FarmHand
                  is more than a platform; it's a commitment to elevating
                  agriculture through a workforce that exceeds expectations.
                  Join us in cultivating a future where every farm thrives,
                  empowered by the excellence of FarmHand laborers.
                </p>
              </div>

              <Link to="contact" spy={true} smooth={true} duration={500}></Link>
            </div>
          </div>
        {/*   <div className="h-60 bg-gradient-to-r from-blue-500 to-red-900 md:mx-40 mx-2 mb-10 rounded-t-2xl rounded-b-2xl flex flex-col justify-center items-center">
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

export default About;
