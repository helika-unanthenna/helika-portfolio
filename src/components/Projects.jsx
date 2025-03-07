// src/components/Projects.jsx
import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

import movierecommender1 from "../assets/images/project images/movie recommender/movierecommender1.jpg";
import movierecommender2 from "../assets/images/project images/movie recommender/movierecommender2.jpg";
import movierecommender3 from "../assets/images/project images/movie recommender/movierecommender3.jpg";

import gymmatelogo from "../assets/images/project images/gym mate/gymmatelogo.png";

const projects = [
  {
    id: 1,
    title: "Movie Recommender",
    description: "A Machine Learning Project",
    image: movierecommender1,
    images: [movierecommender1, movierecommender2, movierecommender3], // Multiple images for the slider
    details:
      "This is a content-based movie recommender. Using Python, Streamlit. Used Bert-Model,Cosine-similarity and many tehnologies in order to get the expected results. Dataset is taken from Kaggle. Hope to further improve the system to give the results based on popularity",
    technologies: ["Python", "Streamlit", "BERT Model", "Cosine Similarity"],
  },
  {
    id: 2,
    title: "GymMate",
    description: "A Mobile App",
    image: gymmatelogo,
    details:
      "GymMate is an android mobile app we developed to revolutionaize the traditional paper-base system in GYMs. We provide a user-friendly interface for users to interact with the coaches. Coaches are able to give users personalized meal-plans and workoutplans and users can access them through their user-dashboard. We also allow users to get in touch with their coach through whatsapp via the mobile app.",
    technologies: ["Android", "Java", "Firebase", "UI/UX Design"],
  },
  {
    id: 3,
    title: "RON",
    description: "A Web Application",
    image: "/src/assets/project images/RON/RONLogo.png",

    details:
      "RON - Reach Out Now, is a website we made to connect the various student societies in the university. We wanted to create a platform where students can know more about the societies. As societies typically communicate through whatsapp to share information about their activities,events etc,we want to join all the societies together to post on their events and members can sign uo for them through the pages dedicated to paticular society",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "PAWsitive Care",
    description: "A Mobile App",
    image: "/src/assets/project images/PAWsitiveCare/PawsitivecareLogo.png",
    details: "",
    technologies: ["Flutter", "Dart", "Firebase", "UI/UX Design"],
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
