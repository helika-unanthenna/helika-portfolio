import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons
import { Link } from "react-scroll"; // For smooth scrolling
import profilepic from "../assets/images/profilepic.jpg"; // Import your photo
import cv from "../assets/cv/Helika Unanthenna CV.pdf"; // Import the CV file

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center text-gray-600 w-full overflow-hidden mt-16"
    >
      <div className="container flex flex-col w-full justify-center items-center px-6 lg:px-40 gap-6">
        {/* Intro Content (Text + Image) */}
        <div className="flex flex-col lg:flex-row w-full items-center gap-6">
          {/* Photo (Display first on mobile and tablet) */}
          <div className="w-full lg:w-1/4 flex justify-center items-center order-1 lg:order-2 lg:pb-23">
            <img
              src={profilepic}
              alt="Hey"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg "
            />
          </div>

          {/* Text Content (Display below photo on mobile and tablet) */}
          <div className="w-full lg:w-3/4 flex-grow-0 text-center lg:text-left lg:p-8 order-2 lg:order-1">
            <h1 className="font-sans text-3xl md:text-4xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="font-sans text-3xl md:text-4xl relative inline-block text-gray-500">
                <span>myname yo</span>
              </span>
            </h1>
            <p className="text-md md:text-lg mb-6 text-justify leading-relaxed whitespace-normal break-words">
              I am a passionate and driven Computer Science undergraduate at the
              University of [Name], with a strong interest in software
              development and cutting-edge technologies.
              <br /> My hands-on experience spans mobile app development, web
              development, and Python programming, with a particular enthusiasm
              for Python development.
              <br /> As a machine learning and AI enthusiast, I am constantly
              exploring ways to apply these technologies to solve real-world
              problems.
              <br />
              I am currently seeking internship opportunities in areas such as
              mobile app development, web development, and Python development.
              If you have openings or projects in these fields, I would love to
              connect and contribute my skills and enthusiasm to your team. Feel
              free to reach out to me for collaboration or internship
              opportunities!
            </p>

            {/* Social Media Links */}
            <div className="flex lg:justify-start justify-center items-center space-x-6 mb-6">
              <a
                href="https://github.com/helika-unanthenna/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-600 hover:text-gray-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/helika-unanthenna/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-600 hover:text-gray-300"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* Buttons (View My Work + Download My CV) */}
            <div className="flex flex-col justify-center items-center md:flex-row gap-6 md:justify-start w-full">
              <div>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-300 hover:text-gray-600 hover:font-bold cursor-pointer inline-block"
                >
                  View My Work
                </Link>
              </div>
              <div>
                <a
                  href={cv} // Replace with the actual path to your CV file
                  download="Helika Unanthenna CV.pdf" // Specify the downloaded file name
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-300 hover:text-gray-600 hover:font-bold cursor-pointer inline-block"
                >
                  Download My CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex ">
        <div className="animate-bounce absolute bottom-8 left-48 flex flex-row items-center">
          <div>
            <p>Scroll</p>
          </div>

          <div className="">
            <i className="bx bx-mouse text-2xl text-gray-600 "></i>{" "}
            {/* Boxicons mouse icon */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;