import React, { useState, useEffect } from "react";

import ClockLoader from "react-spinners/ClockLoader";
import farm1 from "../assets/farm1.png";
import farm2 from "../assets/farm2.png";

const Choose = () => {
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
          <ClockLoader color={"#008000"} loading={loading} size={30} />
        </div>
      ) : (
        <>
          <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-10 md:mx-5 mx-5 mt-5 ">
            <div className="w-full md:w-1/3 mt-2 mt-2 relative">
              <img
                src={farm2}
                alt="farm2"
                style={{
                  width: "100%",
                  maxHeight: "300px",
                  objectFit: "cover",
                  marginBottom: "20px",
                }}
              />
              <img
                src={farm1}
                alt="farm1"
                style={{
                  width: "100%",
                  maxHeight: "300px",
                  objectFit: "cover",
                  marginBottom: "20px",
                }}
              />
            </div>

            <div className="w-full md:w-3/4 text-center space-y-2 mb-10 text-left">
              <div className="text-left space-y-2 mb-10">
                <h1 className="text-black mb-12 text-left text-4xl font-bold font-quicksand">
                  Why <span className="text-green">FarmHand?</span>
                </h1>
                FarmHand provides access to carefully sourced and vetted farm
                professionals, ensuring reliability and quality in every hire.
                <li
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    marginTop: "40px",
                    color: "black",
                    display: "flex",
                    alignItems: "left",
                    
                  }}
                >
                  Simplify the process of hiring quality laborers with FarmHand,
                  alleviating the stress and time drain of recruitment.
                </li>
                <li
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    marginTop: "40px",
                    color: "black",
                    display: "flex",
                    alignItems: "left",
                     
                  }}
                >
                  Our platform connects you with reliable laborers possessing
                  expertise to ensure timely and purpose-driven farm work
                  completion.
                </li>
                <li
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    marginTop: "40px",
                    color: "black",
                    display: "flex",
                    alignItems: "left",
                     
                  }}
                >
                  Our laborers are more than just workers; they are
                  contributors. Expect a comprehensive skill set that enhances
                  your farm's capabilities, bringing efficiency and expertise to
                  every task. 
                </li>
                <li
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    marginTop: "5px",
                    color: "black",
                    display: "flex",
                    alignItems: "left",
                    
                  }}
                ></li>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Choose;
