/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import twitter from "/socials/twitter.png";
import whatsapp from "/socials/whatsapp.png";
import gmail from "/socials/gmail.png";
import FadeLoader from "react-spinners/FadeLoader";

const Footer = () => {
  // Function to open WhatsApp direct message
  const openWhatsApp = () => {
    window.location.href = "https://wa.me/233542721222"; // Replace with your WhatsApp number
  };
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
          <FadeLoader color={"#D0021B"} loading={loading} size={50} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center mt-4 md:mx-5">
            <div className="md:w-2/4">
              <div className="ml-2">
                {/* Email Icon */}
                <p className="text-2xl mb-1">
                  <span role="img" aria-label="Email">
                    ✉️
                  </span>{" "}
                  farmhand@gmail.com
                </p>
                {/* Phone Icons */}
                <p className="text-2xl mb-1">
                  <span role="img" aria-label="Phone">
                    📞
                  </span>{" "}
                  +233 50-392-9152
                </p>
                <p className="text-2xl mb-1">
                  <span role="img" aria-label="Phone">
                    📞
                  </span>{" "}
                  +233 20-323-2550
                </p>
                {/* Address Icon */}
                <p className="text-2xl">
                  <span role="img" aria-label="Address">
                    🏠
                  </span>{" "}
                  Node Eight. Ho, Ghana
                </p>

                {/* "Connect with us now" text */}
                <p className="text-xl mt-20">Connect directly with us now: </p>

                {/* Social Media Icons with Links */}
                <div className="flex flex-wrap justify-left space-x-10 mt-2 ml-4">
                  <img
                    src={whatsapp}
                    alt="Whatsapp"
                    onClick={openWhatsApp}
                    style={{ cursor: "pointer" }}
                  />
                  <a href="/" target="_blank" rel="noreferrer">
                    <img src={gmail} alt="Gmail" />
                  </a>
                  <a href="/" target="_blank" rel="noreferrer">
                    <img src={twitter} alt="Twitter" />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-3/3 mt-4 object-cover object-contain object-center md:p-0 p-6">
              <iframe
                title="Google Map"
                className="p-6 md:p-0"
                style={{ border: 2 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                // Set specific dimensions for big screens
                width="450"
                height="300"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15853.28974592265!2d0.4711075!3d6.6067962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1027251acb4fb667%3A0x53e41668dd70c8b7!2sNode%20Eight!5e0!3m2!1sen!2sgh!4v1707151019549!5m2!1sen!2sgh"
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <footer className="text-center text-gray-500 text-md mt-5">
        &copy; 2024 FarmHand. All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;
