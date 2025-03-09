import React from "react";
import { Link } from "react-scroll"; 
import { FaUser, FaCode, FaProjectDiagram, FaAddressBook, FaDownload } from "react-icons/fa"; 
import './../index.css';
import cv from '../assets/cv/Helika Unanthenna CV.pdf'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white text-gray-800 p-2 md:p-4 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-xl font-bold text-gray-600">Portfolio</div>

       
        <ul className="flex space-x-4 sm:space-x-8">
          
          <li className="hidden lg:block">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-600 hover:font-bold hover:text-lg"
            >
              About
            </Link>
          </li>
          <li className="hidden lg:block">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-600 hover:font-bold hover:text-lg"
            >
              Skills
            </Link>
          </li>
          <li className="hidden lg:block">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-600 hover:font-bold hover:text-lg"
            >
              Projects
            </Link>
          </li>
          <li className="hidden lg:block">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-600 hover:font-bold hover:text-lg"
            >
              Contact
            </Link>
          </li>
          <li className="hidden lg:block">
            <a
            href={cv}
            download="Helika Unanthenna CV.pdf" 
              className="cursor-pointer hover:text-gray-600 hover:font-bold hover:text-lg"
            >
              DownloadCV
            </a>
          </li>

          
          <li className="lg:hidden relative group">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer text-base text-gray-400 hover:text-gray-600"
              title="About"
            >
              <FaUser />
            </Link>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-8 text-xs bg-gray-700 text-white px-2 py-1 rounded group-hover:opacity-100 transition opacity-100 custom-tooltip">
              About
            </span>
          </li>
          <li className="lg:hidden relative group">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer text-base text-gray-400 hover:text-gray-600"
              title="Skills"
            >
              <FaCode />
            </Link>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-8 text-xs bg-gray-700 text-white px-2 py-1 rounded group-hover:opacity-100 transition opacity-100 custom-tooltip">
              Skills
            </span>
          </li>
          <li className="lg:hidden relative group">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer text-base text-gray-400 hover:text-gray-600"
              title="Projects"
            >
              <FaProjectDiagram />
            </Link>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-8 text-xs bg-gray-700 text-white px-2 py-1 rounded group-hover:opacity-100 transition opacity-100 custom-tooltip">
              Projects
            </span>
          </li>
          <li className="lg:hidden relative group">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-base text-gray-400 hover:text-gray-600"
              title="Contact"
            >
              <FaAddressBook />
            </Link>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-8 text-xs bg-gray-700 text-white px-2 py-1 rounded group-hover:opacity-100 transition opacity-100 custom-tooltip">
              Contact
            </span>
          </li>
          <li className="lg:hidden relative group">
            <a
              href={cv} 
              download="Helika Unanthenna CV.pdf" 
              className="cursor-pointer text-base text-gray-400 hover:text-gray-600 duration-300"
              title="DownloadCV"
            >
              <FaDownload />
            </a>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-8 text-xs bg-gray-700 text-white px-2 py-1 rounded group-hover:opacity-100 transition opacity-100 custom-tooltip">
              DownloadCV
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;