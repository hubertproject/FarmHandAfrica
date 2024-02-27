import React, { useState, useEffect } from "react";
import Button from "../layout/Button";
import { Link } from "react-router-dom";
import Choose from "../components/Choose";
import About from "../components/About";
import FadeLoader from "react-spinners/FadeLoader";

const Home = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url("https://www.worldfinance.com/wp-content/uploads/2020/04/West_African_chocolate.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px", // Adjust the height as per your requirement
    width: "100%",
    position: "relative", // Add position relative to position children elements
  };

  const buttonStyle = {
    position: "absolute",
    bottom: "20px", // Adjust bottom position as per your requirement
    left: "20px", // Adjust left position as per your requirement
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
            <div className="min-h-[40vh] flex flex-col md:flex-row md:justify-between items-center md:mx-5">
              <div className="md:w-2/4 text-left rounded-lg p-2">
                <p className="text-white mt-20 text-left text-4xl font-bold font-quicksand">
                  Connect with skilled laborers
                </p>
                <p className="text-white font-quicksand text-4xl font-bold">in no time for all your farm</p>
                <p className="text-white font-quicksand text-4xl font-bold">work needs</p>
                <div className="mb-16"></div>
                <Link to="/Form">
                  <Button title="Register Now" style={buttonStyle} />
                </Link>
              </div>
            </div>
          </div>
          <Choose />
          <About/>
        </div>
      )}
    </div>
  );
};

export default Home;
