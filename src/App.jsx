import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Layouts/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      offset: 100,
      once: true,
      disable: false,
    });

    const preloader = document.getElementById("preloader");
    const duration = 1300;

    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.transition = "opacity 0.5s ease-out";
        setTimeout(() => {
          preloader.remove();
        }, 500);
      }, duration);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Header />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center bg-gray-900 text-gray-300">
        <h6 className="mb-3 font-bold">Andino Ferdiansah</h6>
        <p>codeaprogram © All CopyRights Reserved 2022</p>
      </footer>
    </div>
  );
};

export default App;
