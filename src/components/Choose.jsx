import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
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
          <FadeLoader color={"#008000"} loading={loading} size={50} />
        </div>
      ) : (
        <>
          
          <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-5 mx-5 mt-5 ">
            <div className="w-full md:w-2/3 mb-2 mt-5 relative ">
              
              <img
                src={farm2}
                alt="farm2"
                style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
              />
              <img
                src={farm1}
                alt="farm1"
                style={{ width: "100%", maxHeight: "300px", objectFit: "cover", marginTop: "10px" }}
              />
            </div>

            <div className="w-full md:w-3/4 text-center space-y-2 mb-4 text-left">
              <div className="text-left space-y-2 mb-2">
              <h1 className="text-black mb-10 text-center text-4xl font-bold font-quicksand">
            Why Choose <span className="text-green">FarmHand?</span>
          </h1>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li style={{ padding: "10px", borderRadius: "8px", marginBottom: "40px", color: "black", display: "flex", alignItems: "left" }}>
                    <span style={{ marginRight: "10px" }}>✔</span>
                    <strong style={{ marginRight: "10px" }}>Carefully Sourced Talent:</strong> FarmHand provides access to carefully sourced and vetted farm professionals, ensuring reliability and quality in every hire.
                  </li>
                  <li style={{ padding: "5px", borderRadius: "8px", marginBottom: "40px", color: "black", display: "flex", alignItems: "left" }}>
                    <span style={{ marginRight: "10px" }}>✔</span>
                    <strong style={{ marginRight: "10px" }}>Streamlined Recruitment:</strong> Simplify the process of hiring quality laborers with FarmHand, alleviating the stress and time drain of recruitment.
                  </li>
                  <li style={{ padding: "5px", borderRadius: "8px", marginBottom: "40px", color: "black", display: "flex", alignItems: "left" }}>
                    <span style={{ marginRight: "10px" }}>✔</span>
                    <strong style={{ marginRight: "10px" }}>Reliability in Action:</strong> Our platform connects you with reliable laborers possessing expertise to ensure timely and purpose-driven farm work completion.
                  </li>
                   
                  <li style={{ padding: "5px", borderRadius: "8px", marginBottom: "40px", color: "black", display: "flex", alignItems: "left" }}>
                    <span style={{ marginRight: "10px" }}>✔</span>
                    <strong style={{ marginRight: "10px" }}>Comprehensive Skillsets:</strong> Our laborers are more than just workers; they are contributors. Expect a comprehensive skill set that enhances your farm's capabilities, bringing efficiency and expertise to every task.
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
