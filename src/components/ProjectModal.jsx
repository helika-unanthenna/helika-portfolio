import React, { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "../index.css";

// Set the root element for accessibility (required by react-modal)
Modal.setAppElement("#root");

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
  const [isFullScreen, setIsFullScreen] = useState(false); // State for full-screen mode
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image in full-screen

  if (!project) return null; // Return null if no project is selected

  // Use the `images` array for the slider
  const images = project.images || [project.image]; // Fallback to single image if no array is provided

  // Handle image click to open full-screen view
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsFullScreen(true);
  };

  // Close full-screen view
  const closeFullScreen = () => {
    setIsFullScreen(false);
    setSelectedImage(null);
  };

  return (
    <>
      {/* Main Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="modal"
        overlayClassName="modal-overlay"
        style={{
          content: {
            top: "6rem", // Space below the navbar
            //bottom: "2rem", // Space at the bottom
            left: "50%",
            transform: "translateX(-50%)",
            width: "90vw",
            maxWidth: "800px",
            padding: "0",
            overflow: "hidden",
          },
        }}
      >
        {/* Close Button (Absolute Position inside Modal) */}
        <button
          onClick={onRequestClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl bg-white rounded-full w-10 h-10 flex items-center justify-center z-50 shadow-lg"
        >
          &times;
        </button>

        {/* Scrollable Content */}
        <div className="bg-white p-4 md:p-8 rounded-lg w-full h-full text-gray-600 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 ">
          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            className="mb-4 md:mb-6"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-48 md:h-64 object-contain rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(image)} // Open full-screen on click
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Project Details */}
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">{project.title}</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
  <p className="text-sm md:text-base text-gray-700">{project.description}</p>
  
  {project.link && (
    
    <div className="flex flex-row items-center gap-2">
      <p className="text-sm md:text-base text-gray-700"> | </p>
      <a
        href={project.link} // Use the project's link
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Security best practice for external links
        className="text-sm md:text-base font-medium text-gray-500 hover:text-gray-700 hover:underline"
      >
        Link
      </a>
    </div>
  )}
</div>
          
          <p className="text-sm md:text-base text-gray-500 mb-4 text-justify">{project.details}</p>

          {/* Display technologies */}
          <div className="mt-2">
            <p className="text-sm md:text-md font-bold text-gray-500 text-justify">
              {project.technologies.join(" | ")} {/* Join technologies with a pipe */}
            </p>
          </div>
          
        </div>
      </Modal>

      {/* Full-Screen Image Viewer */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={closeFullScreen}
            className="absolute top-4 right-4 text-white text-2xl bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center z-60 hover:bg-gray-400"
          >
            &times;
          </button>

          {/* Full-Screen Swiper */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            className="w-full h-full"
            initialSlide={images.indexOf(selectedImage)} // Start from the selected image
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default ProjectModal;