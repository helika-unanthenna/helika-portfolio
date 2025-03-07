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
      >
        <div className="bg-white p-4 md:p-8 rounded-lg w-full max-w-[90vw] md:max-w-2xl mx-auto text-gray-600">
          <button
            onClick={onRequestClose}
            className="absolute top-2 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          >
            &times;
          </button>

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
          <p className="text-sm md:text-base text-gray-700 mb-2">{project.description}</p>
          <p className="text-sm md:text-base text-gray-500 mb-4">{project.details}</p>

          {/* Display technologies */}
          <div className="mt-2">
            <p className="text-sm md:text-md font-bold text-gray-500">
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