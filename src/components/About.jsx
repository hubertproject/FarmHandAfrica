import React, { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import frame40 from "../assets/frame40.png";

const About = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-0"></h1>
      <div className="relative">
        {loading ? (
          <div className="flex items-center justify-center h-96">
            <FadeLoader color={"#008000"} loading={loading} size={50} />
          </div>
        ) : (
          <img src={frame40} alt="About" className="mx-auto" />
        )}
      </div>
      {/* Add other content for the About page */}
    </div>
  );
};

export default About;
