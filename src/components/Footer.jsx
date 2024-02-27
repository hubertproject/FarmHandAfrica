import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#14431B" }} className="py-10 mt-5">
      <div className="container mx-auto">
        <div className="flex justify-between">
          {/* Contact Us Section */}
          <div className="w-1/3 flex flex-col items-center">
            <h2 className="text-white text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-white flex items-center">
              <i className="fas fa-phone-alt mr-2"></i>
              +233-5301-355-83
            </p>
          </div>
          {/* Location Section */}
          <div className="w-1/3 flex flex-col items-center">
            <h2 className="text-white text-2xl font-bold mb-4">Location</h2>
            <p className="text-white flex items-center">
              <i className="fas fa-map-marker-alt mr-2"></i>
              Togbui Tawiah Building
            </p>
          </div>
          {/* Follow Us Section */}
          <div className="w-1/3">
            <h2 className="text-white text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex items-center text-white">
              <a href="#" className="mr-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="mr-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
