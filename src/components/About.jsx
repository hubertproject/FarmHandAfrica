/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

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
            <div className="w-full md:w-2/3 mb-5 mt-5">
              <img
                src="https://images.unsplash.com/photo-1605673349798-5580680c4dea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img"
                height="900"
                width="800"
              />
            </div>

            <div className="w-full md:w-3/4 text-center space-y-2 mb-4 text-left">
              <div className="text-left space-y-2 mb-2">
                <h1 className="text-left font-bold text-4xl mt-2 font-quicksand text-green mt-20">
                  About Us
                </h1>
                <p>
                  FarmHand is here to help farmers find reliable laborers
                  easily. Our goal is to make farm work simpler by connecting
                  you with skilled professionals. We understand how important it
                  is to have trustworthy laborers, so we carefully select and
                  vet each one. With FarmHand, you can spend less time worrying
                  about hiring and more time focusing on your farm. Let us
                  handle the laborer management while you manage your farm
                  efficiently.
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
