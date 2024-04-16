import React from 'react';
import Icon from "../Assets/images/logo white.png"
import { Outlet,Link } from 'react-router-dom';

const Navbar = ({ icon }) => {
  return (
    <nav className="fixed top-0 w-full p-4 flex justify-between items-center z-10 h-20" style={{ backgroundColor: '#388697', fontFamily:'Raleway', fontWeight:'600' }}>
      {/* Left Section */}
      <div className="flex items-center">
        {/* Icon */}
        <div className="text-white mr-4">
          <img src={Icon} className='object-contain h-8'/>
        </div>
        {/* Navbar Items */}
        <div className="text-white mr-4">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/" >About us</Link>
        </div>
      </div>
      {/* Right Section */}
      <div>
        {/* Get Started Button */}
        <Link to={"/sign-up"}>
        <button className="text-black px-4 py-2 shadow-md" style={{ backgroundColor: '#FFDC5F', borderRadius: '30px'}}>
          Get Started
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;