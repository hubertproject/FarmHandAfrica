import React, { useState, useEffect } from "react";
import Button from "../layout/Button";
import { Link } from "react-router-dom";
import Choose from "../components/Choose";
import About from "../components/About";
import ClockLoader from "react-spinners/ClockLoader";

const Home = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url("https://www.ada-microfinance.org/sites/default/files/inline-images/newslette%20dimension_0.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "550px",
    width: "100%",
    position: "relative",
  };

  const buttonStyle = {
    position: "absolute",
    bottom: "20px",
    left: "20px",
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ClockLoader color={"#008000"} loading={loading} size={30} />
        </div>
      ) : (
        <div>
          <div style={backgroundImageStyle}>
            <div className="min-h-[40vh] flex flex-col md:flex-row md:justify-between items-center md:mx-5">
              <div className="md:w-2/4 text-left rounded-lg p-2">
                <h1 className="text-snow mt-20 text-left text-4xl  font-aclonica font-bold ">
                  Connect with skilled laborers in no time for all your farm
                  work Say goodbye to delays and hello to productivity with our
                  platform
                </h1>

                <div className="mt-8"></div>
                <Link to="/Form">
                  <Button title="Register Now" style={buttonStyle} />
                </Link>
              </div>
            </div>
          </div>
          <Choose />
          <About />
        </div>
      )}
    </div>
  );
};

export default Home;
