import React from "react";
import contact from "/socials/contact.png";
import location from "/socials/location.png";
import whatsapp from "/socials/whatsapp.png";
import twitter from "/socials/twitter.png";
import gmail from "/socials/gmail.png";
import linkedin from "/socials/linkedin.png";
import facebook from "/socials/facebook.png";
import github from "/socials/github.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div style={{ backgroundColor: "#14431B" }} className="py-2 mt-5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact Us Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
            <h2 className="text-white text-1xl font-bold mb-2">Contact Us</h2>
            <p className="text-white flex items-center mb-2">
              <img src={contact} alt="contact" className="w-6 h-6 mr-4" />
              +233 (0)53 013 5583
            </p>
            <div className="text-white flex items-center mb-2"> 
              <img src={whatsapp} alt="WhatsApp" className="w-6 h-6 mr-4" />
              +233 (0)54 272 1222
            </div>
            <div className="text-white flex items-center mb-2">  
              <img src={gmail} alt="Gmail" className="w-6 h-6 mr-2" />
              farmhand@gmail.com
            </div>
          </div>
          {/* Location Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
            <h2 className="text-white text-1xl font-bold mb-2">Location</h2>
            <p className="text-white flex items-center">
              <img src={location} alt="Location Icon" className="w-6 h-6 mr-2" />
              Torgbui Tawiah Building
            </p>
          </div>
          {/* Follow Us Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <h2 className="text-white text-1xl font-bold mb-2">Follow Us</h2>
            <div className="flex items-center text-white">
              <a href="#" className="mr-4">
                <img src={facebook} alt="Facebook Icon" className="w-6 h-6" />
              </a>
              <a href="#" className="mr-4">
                <img src={twitter} alt="Twitter Icon" className="w-6 h-6" />
              </a>
              <a href="#" className="mr-4">
                <img src={github} alt="Instagram Icon" className="w-6 h-6" />
              </a>
              <a href="#">
                <img src={linkedin} alt="LinkedIn Icon" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Text */}
        <div className="text-white text-center mt-4">
          <p>
            &copy; {currentYear} FarmhandAfrica | Powered By{" "}
            <a href="https://nodeeight.com" target="_blank" rel="noopener noreferrer" className="underline text-orange">
              NodeEight
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
