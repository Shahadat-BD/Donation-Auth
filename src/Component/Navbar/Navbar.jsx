import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const link = (
    <>
      <li className="lg:px-8 px-2 font-semibold lg:text-lg text-sm">
        {" "}
        <NavLink
          className="p-0 rounded-none"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            borderBottom: isActive ? "2px solid red" : "none",
            background: isActive ? "none" : "none",
          })}
          to={"/"}
        >
          Home
        </NavLink>{" "}
      </li>

      <li className="lg:px-8 px-2 font-semibold lg:text-lg text-sm">
        {" "}
        <NavLink
          className="p-0 rounded-none"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            borderBottom: isActive ? "2px solid red" : "none",
            background: isActive ? "none" : "none",
          })}
          to={"/donation"}
        >
          Donation
        </NavLink>{" "}
      </li>

      <li className="lg:px-8 px-2 font-semibold lg:text-lg text-sm">
        {" "}
        <NavLink
          className="p-0 rounded-none"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            borderBottom: isActive ? "2px solid red" : "none",
            background: isActive ? "none" : "none",
          })}
          to={"/statistic"}
        >
          Statistic
        </NavLink>{" "}
      </li>
    </>
  );

  return (
    <div className="my-5 lg:w-[80%] m-auto w-full">
      <div className="navbar  flex lg:flex-row md:flex-row flex-col gap-3">
        <div className="flex-1">
          <img className="w-36 h-12" src={logo}  />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 bg-none">{link}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
