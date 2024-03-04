import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="bg-ground text-white font-quicksand py-2 px-5 mt-5 rounded-lg transition duration-300 ease-in-out transform hover:shadow-md hover:bg-gold hover:text-black hover:ring-white text-xl">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
