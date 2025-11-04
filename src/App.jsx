import Navbar from "./components/Navbar/navbar"
import Hero from "./components/Hero/home";
import AboutMe from "./components/About/about";
import MySkills from "./components/skills/skills";
import MyProjects from "./components/myprojects/project";
import Education from "./components/Education/education";
import GetInTouch from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <div className="bg-[#0a0f1c] min-h-screen text-white font-sans">
        <Navbar />
        <Hero />
        <AboutMe/>
        <MySkills/>
        <MyProjects/>
        <Education/>
        <GetInTouch/>
        <Footer/>
      </div>
    </>
  );
}

export default App
