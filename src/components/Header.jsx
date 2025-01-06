import React, { useState, useEffect } from "react";
import { content } from "../Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { header } = content;

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = [
    "Fullstack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Tech Innovator",
    "Software Engineer",
    "UI/UX Designer",
    "Database Architect",
    "AI Enthusiast",
    "Open Source Contributor",
    "Problem Solver",
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const delay = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      const currentRole = roles[index];

      if (isDeleting) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        setIsDeleting(true);
        setTimeout(() => clearTimeout(timeout), delay);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, roles]);

  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <section
      id="home"
      className="overflow-hidden relative max-w-screen mx-auto"
    >
      {/* Particles Container */}
      <div
        id="particles-js"
        className="absolute top-0 left-0 w-full h-full z-0 bg-black"
      ></div>

      {/* Konten Utama */}
      <div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-center relative px-4 md:px-6">
        {/* Kolom Kiri */}
        <div
          className="text-white flex flex-col justify-center items-center md:items-start px-6 md:mr-10 text-center md:text-left"
          data-aos="fade-down"
        >
          <h1
            className="font-Poppins text-4xl md:text-6xl font-bold text-red-600"
            style={{ textShadow: "0 0 25px white, 0 0 25px white" }}
          >
            {header.firstName}
          </h1>
          <h1
            className="font-Poppins text-4xl md:text-6xl font-bold text-white"
            style={{ textShadow: "0 0 25px red, 0 0 25px white" }}
          >
            {header.LastName}
          </h1>
          <h4 className="font-Poppins text-lg md:text-2xl mt-4 text-red-600">
            {text}
            <span className="typing-cursor">|</span>
          </h4>

          <br />
          <div className="flex justify-center md:justify-start">
            <a
              href="/CV Andino Ferdiansah.docx"
              download="CV_Andino_Ferdiansah.docx"
              className="btn flex items-center gap-2 text-black bg-white px-4 py-2"
            >
              <FontAwesomeIcon
                icon={faDownload}
                className="text-lg text-black"
              />
              Download CV
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start gap-10 mt-10">
            {header.header_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className="flex flex-col items-center md:items-start text-center md:text-left mb-6"
              >
                <h3 className="text-white text-2xl md:text-3xl font-bold">
                  {content.count}
                </h3>
                <p className="text-white text-sm md:text-base pb-4 md:pb-6">
                  {content.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan */}
        <div
          className="flex items-center justify-center"
          style={{
            height: "100%",
          }}
        >
          <img
            src={header.image}
            data-aos="slide-up"
            alt="..."
            className="rounded-full shadow-lg hover:scale-110 transition-transform duration-300 w-60 h-60 md:w-96 md:h-96 mb-8"
            style={{
              boxShadow: "0 0 20px 5px rgba(255, 0, 0, 1)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
