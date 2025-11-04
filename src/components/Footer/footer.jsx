import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[black] text-white py-10 px-4 font-sans">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">
              Narendra
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer passionate about building scalable, modern
              applications with clean code and exceptional user experiences.
            </p>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-3">Let's Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/narendranaragani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-blue-400 transition-colors duration-200"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/narendra-naragani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-blue-400 transition-colors duration-200"
              >
                <FaLinkedin />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Always open to discussing new opportunities and collaborations.
            </p>
          </div>
        </div>

        <hr className="border-gray-700 mb-4" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-2 md:space-y-0">
          <p>
            © 2025 Narendra. Built with using React
          </p>
          <p>
            Designed & Developed by{" "}
            <span className="text-blue-400 font-semibold">Narendra</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
