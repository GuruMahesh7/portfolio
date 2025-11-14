import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si"; 

const projects = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqopG4q33b-UpMv6SQKV0iJDd6U3oApM-heQ&s",
    category: "MERN Stack",
    title: "Coupon Hub",
    description:
      "A smart and efficient coupon management system that lets admins create, track, validate, and analyze coupon performance with real-time insights.",
    technologies: [
      { icon: <SiReact className="text-blue-400" />, name: "React" },
      { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
      { icon: <SiExpress className="text-gray-400" />, name: "Express" },
    ],
    features: [
      "Create, update, and deactivate coupons",
      "Coupon usage tracking with analytics",
      "User-based coupon assignment",
      "Interactive dashboard with charts",
    ],
    liveDemo: "https://react-kft3.vercel.app/dashboard",
    githubLink: "https://github.com/GuruMahesh7/CouponHub",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/mentoring-puzzle-mentor-concept-image-female-hand-jigsaw-different-words-related-to-topic-35277853.jpg",
    category: "Full Stack",
    title: "Mentorify",
    description:
      "A functional clone of the Mentorify platform designed to replicate its learning experience, mentorship workflow, and dashboard structure using modern full-stack technologies.",
    technologies: [
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
      { icon: <SiExpress className="text-gray-400" />, name: "Express" },
      { icon: <SiReact className="text-blue-400" />, name: "React" },
      { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
    ],
    features: [
      "User Authentication (JWT)",
      "Clean and responsive UI inspired by Mentorify",
      "Student & mentor dashboard sections",
      "Course/skills listing module",
    ],
    liveDemo: "https://edu-tech-pro-ruby.vercel.app/",
    githubLink: "https://github.com/GuruMahesh7/Edu-Tech-Pro",
  },
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/90/62/d4/9062d416-ea0e-fcd8-2fd0-8ce332a2968b/AppIcon-0-0-1x_U007emarketing-0-0-0-11-0-0-sRGB-85-220.png/512x512bb.jpg",
    category: "Frontend",
    title: "Mini Games",
    description:
      "A collection of simple, fast, and engaging mini-games built to sharpen problem-solving and provide entertainment through clean design and smooth interactions.",
    technologies: [
      { icon: <SiReact className="text-blue-400" />, name: "React" },
      { icon: null, name: "JavaScript" },
    ],
    features: [
      "Multiple mini-games in one platform",
      "Clean visuals and user-friendly controls",
      "Beginner-friendly logic & interactive gameplay",
      "Lightweight design with smooth animations",
    ],
    liveDemo: "https://mini-games-khaki.vercel.app/",
    githubLink: "https://github.com/GuruMahesh7/MiniGames",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/futuristic-eye-technology-close-up-extreme-human-digital-enhancements-interface-elements-318316886.jpg",
    category: "Frontend",
    title: "Optisight",
    description:
      "A visually engaging, fully responsive website designed to educate users about the human eye, eye health tips, and vision-related topics.",
    technologies: [
      { icon: <SiReact className="text-blue-400" />, name: "HTML" },
      { icon: <SiReact className="text-blue-400" />, name: "CSS" },
      { icon: null, name: "JavaScript" },
    ],
    features: [
      "Clean and modern UI",
      "Informative blog-style content sections",
      "Fully responsive design",
      "Lightweight design with smooth animations",
    ],
    liveDemo: "https://optisight.niat.tech/",
    githubLink: "https://github.com/GuruMahesh7/",
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
