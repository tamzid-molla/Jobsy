import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../AuthContext/GoogleContext";
import { signOut } from "firebase/auth";
import { auth } from "../FireBase/Firebase_init";
import { toast } from "react-toastify";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogOut = () => {
    signOut(auth).then(() => {
      toast.success("LogOut Successfully");
      navigate("/")
    }).catch(error => {
      toast.warn(`Opp !!${error.message}, tray again`);
    })
  };


  const links = (
    <>
      <li className="flex">
        <NavLink to="/" className="flex items-center text-lg px-4 ">Home</NavLink>
      </li>
      <li className="flex">
        <NavLink to="/about" className="flex items-center text-lg px-4 ">About</NavLink>
      </li>
      <li className="flex">
        <NavLink to="/terms" className="flex items-center text-lg px-4 ">Terms</NavLink>
      </li>
      <li className="flex">
        <NavLink to="/Blogs" className="flex items-center text-lg px-4 ">Blogs</NavLink>
      </li>
    </>
  );
  return (
    <nav className={`p-4 sticky top-0 z-50 bg-white shadow-sm`}>
      <div className="w-11/12 flex justify-between h-16 mx-auto">
        <div className="flex items-center gap-2">
        <Link rel="noopener noreferrer" className="flex items-center p-2">
          <img src={logo} className="w-16 h-12 bg-white rounded-full" alt="" />
        </Link>
        <p className="text-3xl font-semibold text-primary">J0B <span className="text-black">S</span> <span className="text-black">Y</span></p>
        </div>
        <div className="flex gap-16">
          <ul className="items-stretch hidden space-x-3 lg:flex">{links}</ul>
          <div className="items-center gap-12 flex-shrink-0 hidden lg:flex">
            <Link to="/register"> <button className="btn btn-primary self-center px-8 py-3 rounded">
              Register
            </button> </Link>
            {
              user ? <button onClick={()=>{handleLogOut()}} className="btn btn-primary self-center px-8 py-3 rounded">
              Logout
              </button>
                :
                <Link to="/login">
            <button className="btn btn-primary self-center px-8 py-3 rounded">
                Login
            </button>
            </Link>
}

          </div>
          <div className="flex gap-5">
            {
              user?.photoURL ? <img src={user.photoURL} className="cursor-pointer" alt="" />
                : <button>
              <CgProfile size={30} className="cursor-pointer" />
            </button>
            }
            
            <button onClick={toggleSidebar} className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <span
            className="text-primary font-bold text-2xl cursor-pointer float-right"
            onClick={toggleSidebar}
          >
            ✕
          </span>
          <ul className="mt-16 space-y-4">{links}</ul>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-[#1111116c] bg-opacity-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } z-40`}
        onClick={toggleSidebar}
      ></div>
    </nav>
  );
};

export default Nav;
