/* eslint-disable react/prop-types */
 // eslint-disable-next-line no-unused-vars
 import React from "react";

 const Button = (props) => {
   return (
     <div>
       <button className="bg-ground text-white font-bold py-2 px-10 mt-10 rounded-lg transition duration-300 ease-in-out transform hover:shadow-md hover:bg-gold hover:text-black hover:ring-white text-xl">
         {props.title}
       </button>
     </div>
   );
 };
 
 export default Button;