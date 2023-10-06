import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(()=>{
         console.log('log out successfully');
    })
    .catch((error)=>{
      console.log(error);
    })
 }


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
    <div className="my-5 lg:w-[90%] m-auto w-full">
      <div className="navbar flex justify-around lg:flex-row md:flex-row flex-col gap-3">
        <div className="">
          <img className="w-36 h-12" src={logo}  />
        </div>
        <div className="">
          <ul className="menu menu-horizontal px-1 bg-none">{link}</ul>
        </div>
        <div className="">
          {
            user ?    
            <img className="w-10 h-10 rounded-full mr-2" src={user.photoURL} alt="" srcset="" />
            :
             ''
          }
          {
              user ? 
               <button onClick={handleLogOut} className="lg:px-8 px-4 file: py-2 rounded-md  font-semibold bg-red-500
              text-white lg:text-lg text-sm">
                logOut
              </button> 
              : 
               <NavLink to={"/login"}> 
               <button className="lg:px-8 px-4 file: py-2 rounded-md  font-semibold bg-red-500
               text-white lg:text-lg text-sm">
                 Login
               </button>
               </NavLink>
          }

         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
