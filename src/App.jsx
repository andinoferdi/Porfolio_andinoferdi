import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Layouts/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Comments from "./components/Comments";
import Contact from "./components/Contact";
import Parallax from "./components/Parallax";

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
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
      <Parallax />

      {/* <div class="scrollElement"></div> */}

      <div className="main" style={{ position: "relative", zIndex: 5 }}>
        <Navbar />
        <Header />
        <Skills />
        <Service />
        <Projects />
        <Testimonials />
        <Comments />
        <Contact />
        <footer className="p-3 text-center bg-[#ffff] py-14 relative">
          <h6 className="mb-3 font-bold">Andino Ferdiansah</h6>
          <p>© CopyRights 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
