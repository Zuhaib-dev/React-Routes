import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Productdetails = () => {
 const navigate =    useNavigate()
 const NavigateHandler = () => {
    navigate(-1)
    
    
 }
 const params =  useParams()
    console.log(params);
  return (
    <div>
        <h1 className="text-4xl mb-5">{params.name}</h1>
      <h2 className="text-2xl  mb-8">Product detail</h2>
      <button onClick={NavigateHandler} className="bg-white   text-black rounded-2xl px-4 py-2">
        Go Back!
      </button>
    </div>
  );
};

export default Productdetails;
