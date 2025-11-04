import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si"; 

const projects = [
  {
    image:
      "https://i.pinimg.com/736x/c8/e8/8a/c8e88aaa69c1fe3a12b816cc8052e993.jpg",
    category: "MERN Stack",
    title: "Spotify Clone",
    description:
      "A web application for streaming music and managing playlists with real-time playback functionality.",
    technologies: [
      { icon: <SiReact className="text-blue-400" />, name: "React" },
      { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
      { icon: <SiExpress className="text-gray-400" />, name: "Express" },
    ],
    features: [
      "User authentication",
      "Playlist creation",
      "Real-time music playback",
    ],
    liveDemo: " https://spotify-clone-sigma-green.vercel.app/",
    githubLink: "https://github.com/narendranaragani/spotify-clone",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/businessman-using-laptop-personal-information-600nw-2446054229.jpg",
    category: "Full Stack",
    title: "Contact-Manager",
    description:
      "A full-stack contact management system where users can securely create, update, search, and delete contacts. Built using MERN stack with authentication and clean UI.",
    technologies: [
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
      { icon: <SiExpress className="text-gray-400" />, name: "Express" },
      { icon: <SiReact className="text-blue-400" />, name: "React" },
      { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
    ],
    features: [
      "User Authentication (JWT)",
      "Create, Read, Update, Delete Contacts",
      "Edit Form with Pre-filled Fields",
      "Search Functionality",
      "Responsive UI with Tailwind CSS",
    ],
    liveDemo: "https://contact-manager-xi-lac.vercel.app/",
    githubLink: "https://github.com/narendranaragani/contact-manager",
  },
  {
    image:
      "https://i.pinimg.com/736x/2e/b0/33/2eb0336898648e83cdb8182c04e9b4e2.jpg",
    category: "Frontend",
    title: "Food-Express",
    description:
      "A modern food delivery application with user authentication and order management.",
    technologies: [
      { icon: <SiReact className="text-blue-400" />, name: "React" },
      { icon: null, name: "Authentication" },
    ],
    features: [
      "User authentication",
      "Food ordering",
      "Restaurant listings",
      "Order tracking",
    ],
    liveDemo: "https://food-app-k553.vercel.app",
    githubLink: "https://github.com/narendranaragani/food-app",
  },
];

const MyProjects = () => {
  return (
    <div id="projects" className="bg-[black] py-16 px-4 font-sans text-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl pt-10 font-bold text-center mb-16 text-blue-400">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#181818] rounded-lg shadow-xl overflow-hidden flex flex-col 
              border border-transparent hover:border-blue-400 transition-colors duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="mr-2" /> View Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
                  >
                    <FaGithub className="mr-2" /> 
                  GitHub</a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <span className="inline-block bg-blue-500 bg-opacity-20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-blue-400 font-semibold mb-2">
                    Technologies Used:
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="flex items-center text-gray-300"
                      >
                        {tech.icon && <span className="mr-1">{tech.icon}</span>}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-blue-400 font-semibold mb-2">
                    Key Features:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 m-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="mr-2" />View Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
