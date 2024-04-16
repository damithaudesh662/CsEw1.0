import React from 'react';
import Icon from "../Assets/images/logo white.png"

import {HeartIcon} from "@heroicons/react/24/outline"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container flex items-center justify-between pl-4 pr-4">
        <div className="flex items-center">
          <img src={Icon} alt="Logo" className="object-contain h-6 mr-4" />
          <span className="text-sm">Made with</span>
            <HeartIcon className='h-8 w-8'/>
          <span className="text-sm">by CSEw Team</span>
        </div>
        <div>
          <span className="text-sm">© 2024 All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
