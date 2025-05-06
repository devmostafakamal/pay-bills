import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../firebase.init";

function Navbar() {
  const { user } = useContext(AuthContext);

  const commonLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white hover:bg-[#f1c685] bg-[#27bdb5]"
              : "text-white hover:bg-[#85f1ec]"
          }
        >
          Home
        </NavLink>
      </li>
    </>
  );

  const protectedLinks = user && (
    <>
      <li>
        <NavLink
          to="/bills"
          className={({ isActive }) =>
            isActive
              ? "text-white hover:bg-[#f1c685] bg-[#27bdb5]"
              : "text-white hover:bg-[#85f1ec]"
          }
        >
          Bills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "text-white hover:bg-[#f1c685] bg-[#27bdb5]"
              : "text-white hover:bg-[#85f1ec]"
          }
        >
          Profile
        </NavLink>
      </li>
    </>
  );

  const authButtons = !user ? (
    <>
      <button className="btn hover:bg-[#65b898] bg-[#921092] text-white">
        <NavLink to="/login">Login</NavLink>
      </button>
      <button className="btn hover:bg-[#65b898] bg-[#a618ca] text-white">
        <NavLink to="/register">Register</NavLink>
      </button>
    </>
  ) : (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            src={user.photoURL || "/default-profile.png"}
            alt="User Profile"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li className="px-4 py-2">Balance: 10000 BDT</li>
        <li>
          <button onClick={() => auth.signOut()} className="text-error">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="navbar bg-[#1473e1] shadow-sm rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 bg-[#29dbb5] rounded-sm"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#29dbb5] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {commonLinks}
            {protectedLinks}
          </ul>
        </div>
        <NavLink to="/" className="text-xl">
          <img
            src="/assets/paybill.jpg"
            className="h-10 w-10 m-3 rounded-full"
            alt="Logo"
          />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {commonLinks}
          {protectedLinks}
        </ul>
      </div>
      <div className="navbar-end gap-1 lg:gap-5 lg:mr-3">{authButtons}</div>
    </div>
  );
}

export default Navbar;
