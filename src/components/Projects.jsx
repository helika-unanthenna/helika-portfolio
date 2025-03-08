// src/components/Projects.jsx
import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

import movierecommender1 from "../assets/images/project images/movie recommender/movierecommender1.jpg";
import movierecommender2 from "../assets/images/project images/movie recommender/movierecommender2.jpg";
import movierecommender3 from "../assets/images/project images/movie recommender/movierecommender3.jpg";
import movierecommender4 from "../assets/images/project images/movie recommender/movierecommender4.jpg";

import gymmatelogo from "../assets/images/project images/gym mate/gymmatelogo.png";

import ronlogo from "../assets/images/project images/ron/ronlogo.png";

import pawsitivecarelogo from "../assets/images/project images/pawsitivecare/pawsitivecarelogo.jpg";
import pawsitivecare1 from "../assets/images/project images/pawsitivecare/pawsitivecare1.jpg";


const projects = [
  {
    id: 1,
    title: "Movie Recommender",
    description: "Machine Learning Project",
    image: movierecommender2,
    images: [movierecommender1, movierecommender2, movierecommender3,movierecommender4], // Multiple images for the slider
    details:
     "This is a content-based movie recommender system designed to provide personalized movie suggestions based on user input. Built using Python and Streamlit, the system leverages advanced technologies like BERT embeddings and cosine similarity to deliver accurate and relevant recommendations. The dataset used for this project was sourced from Kaggle, ensuring a robust and diverse collection of movies for analysis. The system also integrates with The Movie Database (TMDb) API to fetch movie posters dynamically, enhancing the user experience.",
    technologies: ["Python", "Streamlit", "BERT Model", "Cosine Similarity", "Fuzzywuzzy", "TMDb API", "Pandas", "NumPy", "Scikit-learn"],
    link:"https://drive.google.com/file/d/17fCCWcMKncFy8G8-EAkgcz8IBR2P5Lna/view"
  },
  {
    id: 2,
    title: "GymMate",
    description: "Mobile App",
    image: gymmatelogo,
    details:
      "GymMate is a modern Android mobile app designed to revolutionize the traditional paper-based system in a paticular gym. It provides a user-friendly interface for gym members to interact with their coaches, access personalized meal and workout plans, and communicate directly with their coaches via WhatsApp. Built with React Native for cross-platform compatibility and Supabase for backend functionality, GymMate streamlines gym management and enhances user experience.",
    technologies: ["Android", "React Native", "TailwindCss", "Supabase"],
    link:"https://www.linkedin.com/posts/helika-unanthenna_gymmate-mobileappdevelopment-innovation-activity-7286643901698916352-I1hO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE5pJbQBdAkoNYf2AfqUJ3YtINclXGCv_SM"
    
  },
  {
    id: 3,
    title: "RON",
    description: "Web Application",
    image: ronlogo,

    details:
    "RON - Reach Out Now is a website designed to connect various student societies within a university. The platform serves as a centralized hub where students can learn more about different societies, stay updated on their activities and events, and sign up for events directly through dedicated society pages. By replacing the traditional WhatsApp-based communication system, RON streamlines information sharing and enhances student engagement.",


    technologies: ["HTML", "CSS", "Javascript", "MySQL"],
    link:""
  },
  {
    id: 4,
    title: "PAWsitive Care",
    description: "A Mobile App (Ongoing)",
    image: pawsitivecarelogo,
    images: [pawsitivecarelogo,pawsitivecare1],
    details: "Pawsitive Care is a mobile application designed to support stray and lost animals by helping them find homes and access medical care. The app enables users to create posts about lost or stray animals, engage with posts from other users, and interact with veterinarians offering medical assistance. Built with Flutter for cross-platform compatibility, Pawsitive Care connects the community, providing a platform for animal welfare and fostering collaboration between users and professionals.",
    technologies: ["Flutter", "Dart", "Firebase", "UI/UX Design"],
    link:""
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-16 text-gray-600 w-full">
      <div className="container w-full px-6 lg:px-40">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg border-2 border-gray-100 cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => openModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full bg-gray-100 h-48 object-contain rounded-lg mb-4"
              />
              <h3 className="text-xl text-gray-600 font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700">{project.description}</p>

              {/* Display technologies */}
              <div className="mt-2">
                <p className="text-md font-bold text-gray-500">
                  {project.technologies.join(" | ")}{" "}
                  {/* Join technologies with a pipe */}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Render the modal */}
        <ProjectModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          project={selectedProject}
        />
      </div>
    </section>
  );
};

export default Projects;
