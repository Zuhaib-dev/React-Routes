import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
 const navigate =    useNavigate()
 const NavigateHandler = () => {
    navigate(-1)
    
    
 }
 
  return (
    <div>
        <h1 className="text-4xl mb-5">More services</h1>
      <h2 className="text-2xl  mb-8">Chose Us</h2>
      <button onClick={NavigateHandler} className="bg-white   text-black rounded-2xl px-4 py-2">
        Go Back!
      </button>
    </div>
  );
};

export default ServiceDetails;
