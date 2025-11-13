import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#0a0f1c]/90 fixed top-0 w-full z-50 shadow-md border-b border-gray-700">
      <h1 className="text-2xl font-bold text-[#3b82f6]">Narendra</h1>

      <ul className="hidden md:flex space-x-8 text-gray-300 font-medium list-none">
        <li
          onClick={() => scrollToSection("home")}
          className="hover:text-[#3b82f6] cursor-pointer"
        >
          Home
        </li>
        <li
          onClick={() => scrollToSection("about")}
          className="hover:text-[#3b82f6] cursor-pointer"
        >
          About
        </li>
        <li
          onClick={() => scrollToSection("skills")}
          className="hover:text-[#3b82f6] cursor-pointer"
        >
          Skills
        </li>
        <li
          onClick={() => scrollToSection("projects")}
          className="hover:text-[#3b82f6] cursor-pointer"
        >
          Projects
        </li>
        <li
          onClick={() => scrollToSection("education")}
          className="hover:text-[#3b82f6] cursor-pointer"
        >
          Education
        </li>
        <li
          onClick={() => scrollToSection("contact")}
          className="hover:text-[#3b82f6] cursor-pointer"
        >
          Contact
        </li>
      </ul>

      <a
        href="https://drive.google.com/file/d/1mOjUhJPos8LoXvoA8Nnrg2WGDNgZhQOv/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block cursor-pointer"
      >
        <button className="bg-[#3b82f6] px-4 py-2 rounded-lg hover:bg-[#2563eb] transition font-medium cursor-pointer">
          View Resume
        </button>
      </a>
      <div
        className="md:hidden text-gray-300 text-2xl cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 text-left w-full bg-[#0a0f1c] text-gray-300 list-none flex flex-col items-center space-y-6 py-6 md:hidden z-40 shadow-lg">
          <li
            onClick={() => scrollToSection("home")}
            className="hover:text-[#3b82f6] cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className="hover:text-[#3b82f6] cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("skills")}
            className="hover:text-[#3b82f6] cursor-pointer"
          >
            Skills
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className="hover:text-[#3b82f6] cursor-pointer"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("education")}
            className="hover:text-[#3b82f6] cursor-pointer"
          >
            Education
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="hover:text-[#3b82f6] cursor-pointer"
          >
            Contact
          </li>
          <a
            href="https://drive.google.com/file/d/1q6IhGTclCeQ3rndUWf_bd5w5dEDlROaK/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#3b82f6] px-4 py-2 rounded-lg hover:bg-[#2563eb] transition font-medium">
              View Resume
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
