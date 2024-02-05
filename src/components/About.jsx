/* eslint-disable no-unused-vars */
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
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <FadeLoader color={"#008000"} loading={loading} size={50} />
        </div>
      ) : (
        <>
          <div className="md:min-h-screen flex flex-col-reverse md:flex-row  gap-5 md:mx-5 mx-5 mt-5">
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
                <h1 className="py-5">
                  FarmHand is here to help farmers find reliable laborers
                  easily. Our goal is to make farm work simpler by connecting
                  you with skilled professionals. We understand how important it
                  is to have trustworthy laborers, so we carefully select and
                  vet each one. With FarmHand, you can spend less time worrying
                  about hiring and more time focusing on your farm. Let us
                  handle the laborer management while you manage your farm
                  efficiently.
                </h1>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
