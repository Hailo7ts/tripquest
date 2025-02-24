import React, { useEffect, useState } from 'react';
import { Link } from "react-router";
import '../App.css'

const NavBar = () => {


  return (


    <>
    
      <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.23/dist/full.min.css" rel="stylesheet" type="text/css" />
      
      <div className="shadow-md navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#e4654f">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to='/'>Homepage</Link></li>
              <li><Link to='/posts/new'>upload</Link></li>
              <li><Link to='/'>About</Link></li>
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <a className="text-[#e4654f] btn btn-ghost text-xl">TripQuest</a>
        </div>

        <div className="navbar-end">



          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="TripQuest logo"
                  src="./trip-quest-logo.png" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">       
              <li><Link to='/register'>Signup</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><a href='/logout'>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
    
  );
};


export default NavBar;