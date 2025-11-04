import React from "react";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="bg-[black] min-h-screen text-white p-12 font-sans"
    >
      <h1 className="text-4xl pt-10 font-bold text-center mb-10 text-blue-400">
        About Me
      </h1>
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-12">
        <div className="md:w-2/3">
          <p className="text-lg leading-relaxed mb-6">
            Hello, I'm{" "}
            <span className="text-blue-400 font-semibold">Narendra</span>, a
            motivated Full Stack Developer and a student at NIAT. My journey
            began with a curiosity for how technology works, which quickly
            evolved into a passion for building robust and elegant web
            applications.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I thrive on solving complex problems and am dedicated to writing
            clean, efficient code that powers seamless user experiences. Whether
            it's crafting intuitive frontend interfaces or building scalable
            backend systems, I approach every project with enthusiasm and
            attention to detail.
          </p>
          <p className="text-lg leading-relaxed">
            When I'm not coding, you'll find me watching movies or exploring new
            technologies. I believe that the best solutions come from continuous
            learning and staying curious about the world around us.
          </p>
        </div>

        <div className="md:w-1/3 bg-[#181818] rounded-lg shadow-xl p-6 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center mb-4">
            <span className="text-5xl font-bold text-white">N</span>
          </div>
          <h2 className="text-2xl font-semibold">Full Stack Developer</h2>
          <p className="text-gray-400 text-sm mb-6">Student at NIAT</p>
          <div className="w-full space-y-4">
            <div>
              <p className="text-sm text-gray-400">Problem Solving</p>
              <div className="bg-gray-700 h-2 rounded-full mt-1">
                <div className="bg-blue-400 h-full rounded-full w-[90%]"></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400">Team Collaboration</p>
              <div className="bg-gray-700 h-2 rounded-full mt-1">
                <div className="bg-blue-400 h-full rounded-full w-[70%]"></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400">Adaptability</p>
              <div className="bg-gray-700 h-2 rounded-full mt-1">
                <div className="bg-blue-400 h-full rounded-full w-[85%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
