import React from "react";

const Hero = () => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      className="bg-cover flex flex-col items-center justify-center text-center pt-32 md:pt-40 px-6 bg-[url('https://i.pinimg.com/1200x/c9/f8/81/c9f881093779ea40ad535783883010a6.jpg')]"
    >
      <div className="flex justify-center mb-6 md:mb-8">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dswwx0axn/image/upload/v1749710082/pp_zcengv.jpg"
            alt="Narendra - Full Stack Developer"
            className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover border-4 border-solid border-[#19537d]"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
        </div>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-white">
        Narendra.
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-[#3b82f6] mt-2">
        A Full Stack Developer.
      </h2>
      <p className="mt-4 max-w-md sm:max-w-xl text-gray-400 text-base sm:text-lg md:text-2xl">
        Building scalable, modern applications with a passion for
        problem-solving.
      </p>
      <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => scrollToSection("projects")}
          className="bg-[#3b82f6] px-6 py-3 rounded-lg hover:bg-[#2563eb] transition font-medium"
        >
          Explore My Work
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition font-medium"
        >
          Get in Touch
        </button>
      </div>

      <div className="flex space-x-6 mt-10 text-2xl">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#3b82f6]"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#3b82f6]"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
