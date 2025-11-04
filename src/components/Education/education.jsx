import React from "react";
import {
  FaGraduationCap,
  FaCertificate,
  FaAward,
  FaLightbulb,
  FaBookOpen,
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa";

const Education = () => {
  return (
    <div id="education" className="bg-[black] py-16 px-4 font-sans text-white">
      <h1 className="text-5xl pt-10 font-bold text-center mb-16 text-blue-400">
        Education
      </h1>
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#181818] rounded-lg shadow-xl p-8 flex flex-col">
          <div className="flex items-start mb-6">
            <FaGraduationCap className="text-4xl text-blue-400 mr-4" />
            <div>
              <h3 className="text-3xl font-semibold text-white">
                Nxtwave Institute of Advanced Technologies
              </h3>
              <p className="text-green-400 text-lg">NIAT</p>
              <p className="text-gray-400 text-sm">Current Student</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-400 mb-2">
              Focus Areas
            </h4>
            <p className="text-gray-400 text-sm">
              Specializing in full-stack web development with emphasis on modern
              JavaScript frameworks, backend systems, and database design.
              Building practical experience through hands-on projects and
              collaborative learning environments.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-400 mb-2">
              Relevant Coursework
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-400 list-disc list-inside">
              <li>Data Structures & Algorithms</li>
              <li>Web Development Fundamentals</li>
              <li>Database Management Systems</li>
              <li>Software Engineering Principles</li>
              <li>Computer Networks</li>
              <li>Object-Oriented Programming</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-2">
              Learning Philosophy
            </h4>
            <blockquote className="italic text-gray-400 text-sm border-l-4 border-blue-400 pl-4">
              "Education is not just about acquiring knowledge, but applying it
              to solve real-world problems. My approach is hands-on, focusing on
              building and creating."
            </blockquote>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-6 text-white text-center">
            Key Achievements
          </h3>
          <div className="space-y-6">
            <div className="bg-[#181818] rounded-lg shadow-xl p-6 flex items-start">
              <FaLightbulb className="text-3xl text-blue-400 mr-4" />
              <div>
                <h4 className="text-xl font-semibold mb-1">
                  Problem-Solving Excellence
                </h4>
                <p className="text-gray-400 text-sm">
                  Demonstrated strong analytical skills through complex project
                  implementations
                </p>
              </div>
            </div>

            <div className="bg-[#181818] rounded-lg shadow-xl p-6 flex items-start">
              <FaBookOpen className="text-3xl text-blue-400 mr-4" />
              <div>
                <h4 className="text-xl font-semibold mb-1">
                  Continuous Learning
                </h4>
                <p className="text-gray-400 text-sm">
                  Self-directed learning in modern web technologies and best
                  practices
                </p>
              </div>
            </div>

            <div className="bg-[#181818] rounded-lg shadow-xl p-6 flex items-start">
              <FaLaptopCode className="text-3xl text-blue-400 mr-4" />
              <div>
                <h4 className="text-xl font-semibold mb-1">
                  Project-Based Learning
                </h4>
                <p className="text-gray-400 text-sm">
                  Completed impactful personal projects showcasing full-stack
                  capabilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
