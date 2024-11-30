import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react'; // Import the icons from lucide-react

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center text-center px-6">
        <div className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="text-gray-600 hover:text-gray-800">
            <Facebook size={20} />
          </a>
          <a href="https://instagram.com" className="text-gray-600 hover:text-gray-800">
            <Instagram size={20} />
          </a>
          <a href="https://twitter.com" className="text-gray-600 hover:text-gray-800">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
