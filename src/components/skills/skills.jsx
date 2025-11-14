import React from "react";
import { FaGlobe, FaServer, FaDatabase } from "react-icons/fa";
import { FaLightbulb, FaUsers, FaBolt } from "react-icons/fa6";

const MySkills = () => {
  return (
    <div id="skills" className="bg-[black] py-16 px-4 font-sans text-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl pt-10 font-bold text-center mb-16 text-blue-400">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#181818] rounded-lg shadow-xl p-8 flex flex-col items-center text-center">
            <FaGlobe className="text-4xl text-blue-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-6">Frontend</h3>
            <div className="w-full space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg">HTML</span>
                <div className="bg-gray-700 h-2 w-32 rounded-full">
                  <div className="bg-blue-400 h-full rounded-full w-[95%]"></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg">CSS</span>
                <div className="bg-gray-700 h-2 w-32 rounded-full">
                  <div className="bg-blue-400 h-full rounded-full w-[85%]"></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg">JavaScript</span>
                <div className="bg-gray-700 h-2 w-32 rounded-full">
                  <div className="bg-blue-400 h-full rounded-full w-[90%]"></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg">React</span>
                <div className="bg-gray-700 h-2 w-32 rounded-full">
                  <div className="bg-blue-400 h-full rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#181818] rounded-lg shadow-xl p-8 flex flex-col items-center text-center">
            <FaServer className="text-4xl text-blue-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-6">Backend</h3>
            <div className="w-full space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg">Node.js</span>
                <div className="bg-gray-700 h-2 w-32 rounded-full">
                  <div className="bg-blue-400 h-full rounded-full w-[85%]"></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg">Express</span>
                <div className="bg-gray-700 h-2 w-32 rounded-full">
                  <div className="bg-blue-400 h-full rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#181818] rounded-lg shadow-xl p-8 flex flex-col items-center text-center">
            <FaDatabase className="text-4xl text-blue-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-6">Databases</h3>
            <div className="w-full space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg">MongoDB</span>
                <div className="bg-gray-700 h-2 w-32 rounded-full">
                  <div className="bg-blue-400 h-full rounded-full w-[90%]"></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg">SQL</span>
                <div className="bg-gray-700 h-2 w-32 rounded-full">
                  <div className="bg-blue-400 h-full rounded-full w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#181818] rounded-lg shadow-xl p-8 flex flex-col items-center text-center">
            <FaDatabase className="text-4xl text-blue-400 mb-4" />
            <h3 className="text-2xl font-semibold mb-6">Programming</h3>
            <div className="w-full space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg">Python</span>
                <div className="bg-gray-700 h-2 w-32 rounded-full">
                  <div className="bg-blue-400 h-full rounded-full w-[90%]"></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg">C++</span>
                <div className="bg-gray-700 h-2 w-32 rounded-full">
                  <div className="bg-blue-400 h-full rounded-full w-[75%]"></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg">Javascript</span>
                <div className="bg-gray-700 h-2 w-32 rounded-full">
                  <div className="bg-blue-400 h-full rounded-full w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-10 text-blue-400">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Problem-Solving */}
            <div className="flex flex-col items-center border border-gray-700 rounded-lg p-4">
              <FaLightbulb className="text-4xl text-blue-400 mb-2" />
              <h4 className="text-xl font-semibold mb-2">Problem-Solving</h4>
              <p className="text-gray-400 text-sm">
                Breaking down complex challenges into manageable solutions
              </p>
            </div>
            {/* Teamwork */}
            <div className="flex flex-col items-center border border-gray-700 rounded-lg p-4">
              <FaUsers className="text-4xl text-blue-400 mb-2" />
              <h4 className="text-xl font-semibold mb-2">Teamwork</h4>
              <p className="text-gray-400 text-sm">
                Collaborating effectively in cross-functional teams
              </p>
            </div>
            {/* Adaptability */}
            <div className="flex flex-col items-center border border-gray-700 rounded-lg p-4">
              <FaBolt className="text-4xl text-blue-400 mb-2" />
              <h4 className="text-xl font-semibold mb-2">Adaptability</h4>
              <p className="text-gray-400 text-sm">
                Quickly learning new technologies and methodologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
