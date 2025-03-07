// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Example social icons

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-8 w-full">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {/* Social Media Links */}
          <a
            href="https://github.com/helika-unanthenna/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-2xl hover:text-3xl transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/helika-unanthenna/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 text-2xl hover:text-3xl transition duration-300"
          >
            <FaLinkedin />
          </a>
          
        </div>
        <p className="text-gray-500 font-medium">
          ©{new Date().getFullYear()} HelikaUnanthenna. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;