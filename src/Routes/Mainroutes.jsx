import Home from "../Components/Home";
import Product from "../Components/Product";
import Service from "../Components/Service";
import About from "../Components/About";
import  Productdetails  from "../Components/Productdetails";
import ServiceDetail from "../Components/ServiceDetail";
import { Route, Routes } from "react-router-dom";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/detail/:name" element={<Productdetails />} />
      <Route path="/service" element={<Service />}> 
      <Route path="/service/detail" element={<ServiceDetail />} />

      </Route>
      
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Mainroutes;
