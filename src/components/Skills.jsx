import React from "react";

const Skills = () => {
  // Define the skills data
  const skills = {
    languages: [
      {
        id: 1,
        name: "Python",
        icon: <i className="bx bxl-python text-4xl mb-2"></i>, // Python icon
      },
      {
        id: 2,
        name: "Java",
        icon: <i className="bx bxl-java text-4xl mb-2"></i>, // Java icon
        
      },
      {
        id: 3,
        name: "JavaScript",
        icon: <i className="bx bxl-javascript text-4xl mb-2"></i>, // JavaScript icon
      },
      {
        id: 4,
        name: "PHP",
        icon: <i className="bx bxl-php text-4xl mb-2"></i>, // C++ icon
      },
      {
        id: 5,
        name: "HTML",
        icon: <i className="bx bxl-html5 text-4xl mb-2"></i>, // C++ icon
      },
      {
        id: 6,
        name: "CSS",
        icon: <i className="bx bxl-css3 text-4xl mb-2"></i>, // C++ icon
      },

    ],
    frameworks: [
      {
        id: 1,
        name: "ReactJS",
        icon: <i className="bx bxl-react text-4xl mb-2"></i>, // React icon
      },
      {
        id: 2,
        name: "ReactNative",
        icon: <i className="bx bxl-react text-4xl mb-2"></i>, // Node.js icon
      },
      {
        id: 3,
        name: "Django",
        icon: <i className="bx bxl-django text-4xl mb-2"></i>, // Django icon
      },
      {
        id: 4,
        name: "Laravel",
        icon: <i class="fa-brands fa-laravel text-4xl mb-2"></i>, // Django icon
      },
      {
        id: 5,
        name: "Flutter",
        icon: <i className="bx bxl-flutter text-4xl mb-2"></i>, // Django icon
      },
      {
        id: 6,
        name: "Bootstrap",
        icon: <i className="bx bxl-bootstrap text-4xl mb-2"></i>, // Django icon
      },
      {
        id: 7,
        name: "TailwindCSS",
        icon: <i className="bx bxl-tailwind-css text-4xl mb-2"></i>, // Django icon
      },
    ],
    // technologies: [
    //   {
    //     id: 1,
    //     name: "HTML",
    //     icon: <i className="bx bxl-html5 text-4xl mb-2"></i>, // HTML icon
    //   },
    //   {
    //     id: 2,
    //     name: "CSS",
    //     icon: <i className="bx bxl-css3 text-4xl mb-2"></i>, // CSS icon
    //   },
    //   {
    //     id: 3,
    //     name: "TailwindCSS",
    //     icon: <i className="bx bxl-tailwind-css text-4xl mb-2"></i>, // TailwindCSS icon
    //   },
    //   {
    //     id: 4,
    //     name: "Git",
    //     icon: <i className="bx bxl-git text-4xl mb-2"></i>, // Git icon
    //   },
    // ],
    databases: [
      {
        id: 1,
        name: "MySQL",
        icon: 
        <i class="devicon-mysql-original text-4xl mb-2"></i>
      , // MySQL icon
      },
      {
        id: 2,
        name: "MongoDB",
        icon: <i className="bx bxl-mongodb text-4xl mb-2"></i>, // MongoDB icon
      },
      {
        id: 3,
        name: "Supabase",
        icon: <i className="devicon-supabase-plain text-4xl mb-2"></i>, // PostgreSQL icon
      },
      
    ],
    tools: [
      {
        id: 1,
        name: "VS Code",
        icon: <i className="bx bxl-visual-studio text-4xl mb-2"></i>, // VS Code icon
      },
      {
        id: 2,
        name: "Figma",
        icon: <i className="bx bxl-figma text-4xl mb-2"></i>, // Figma icon
      },
      {
        id: 3,
        name: "Git",
        icon: <i className="bx bxl-git text-4xl mb-2"></i>, // Docker icon
      },
      {
        id: 4,
        name: "Postman",
        icon: <i class="devicon-postman-plain text-4xl mb-2"></i>, // Postman icon
      },
    ],
  };

  return (
    <section id="skills" className="py-16 text-gray-600">
      <div className="container px-6 lg:px-40">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

        {/* Grid for larger devices */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            {/* Languages */}
            <div className="container bg-white mb-12 p-6 border-2 border-gray-100 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Languages</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.languages.map((skill) => (
                  <div
                    key={skill.id}
                    className="bg-gray-50 p-4 sm:p-6 rounded-lg text-center border-2 border-gray-100 hover:bg-white transition duration-300"
                  >
                    {skill.icon}
                    <p className="text-sm sm:text-md ">{skill.name}</p> 
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="container bg-white mb-12 p-6 border-2 border-gray-100 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Databases</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.databases.map((skill) => (
                  <div
                    key={skill.id}
                    className="bg-gray-50 p-4 sm:p-6 rounded-lg text-center border-2 border-gray-100 hover:bg-white transition duration-300"
                  >
                    {skill.icon}
                    <p className="text-sm sm:text-md ">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            {/* <div className="container bg-white mb-12 p-6 border-2 border-gray-100 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.technologies.map((skill) => (
                  <div
                    key={skill.id}
                    className="bg-gray-50 p-4 sm:p-6 rounded-lg text-center border-2 border-gray-100 hover:bg-white transition duration-300"
                  >
                    {skill.icon}
                    <p className="text-sm sm:text-md ">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div> */}

            

            
          </div>

          {/* Right Column */}
          <div>
            {/* Frameworks */}
            <div className="container bg-white mb-12 p-6 border-2 border-gray-100 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Frameworks</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.frameworks.map((skill) => (
                  <div
                    key={skill.id}
                    className="bg-gray-50 p-4 sm:p-6 rounded-lg text-center border-2 border-gray-100 hover:bg-white transition duration-300"
                  >
                    {skill.icon}
                    <p className="text-sm sm:text-md ">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="container bg-white mb-12 p-6 border-2 border-gray-100 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Tools</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.tools.map((skill) => (
                  <div
                    key={skill.id}
                    className="bg-gray-50 p-4 sm:p-6 rounded-lg text-center border-2 border-gray-100 hover:bg-white transition duration-300"
                  >
                    {skill.icon}
                    <p className="text-sm sm:text-md ">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;