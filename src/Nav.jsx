import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-center p-5 gap-10 text-xl bg ">
      <NavLink
        className={(e) => (e.isActive ? "text-rose-400" : "")}
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-rose-400" : "")}
        to="/product"
      >
        Product
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-pink-400" : "")}
        to="/service"
      >
        service
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-pink-400" : "")}
        to="/About"
      >
        About
      </NavLink>
    </div>
  );
};

export default Nav;
