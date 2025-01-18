import React, { useState, useEffect } from "react";
import { content } from "../Content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Particles from "./Particles";

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

  return (
    <section
      id="home"
      className="overflow-hidden relative max-w-screen mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="min-h-[70vh] flex flex-col md:flex-row md:flex-wrap items-center justify-center relative gap-8 mt-20">
        <div
          className="text-white flex flex-col justify-center items-center md:items-center px-6 md:mr-10 text-center md:text-center"
          data-aos="fade-down"
        >
          <h1
            className="font-Poppins text-3xl sm:text-4xl md:text-6xl font-bold text-purple-500"
            style={{ textShadow: "0 0 25px purple, 0 0 25px white" }}
          >
            {header.firstName}
          </h1>
          <h1
            className="font-Poppins text-3xl sm:text-4xl md:text-6xl font-bold text-white"
            style={{ textShadow: "0 0 25px purple, 0 0 25px white" }}
          >
            {header.LastName}
          </h1>
          <h4 className="font-Poppins text-lg md:text-2xl mt-4 text-purple-500">
            {text}
            <span className="typing-cursor">|</span>
          </h4>

          <br />
          <div className="flex justify-center md:justify-start">
            <a
              href="/CV Andino Ferdiansah.docx"
              download="CV_Andino_Ferdiansah.docx"
              className="btn flex items-center gap-2 text-black bg-white px-3 py-2 sm:px-4 transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white hover:scale-105 shadow-neon"
            >
              <FontAwesomeIcon
                icon={faDownload}
                className="text-lg transition-none"
              />
              Download CV
            </a>
          </div>

          <div className="flex flex-col items-center md:items-center text-center gap-2 mt-10">
            {header.header_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                className="flex flex-col items-center md:items-center text-center md:text-left mb-4" // Kurangi margin-bottom
              >
                <p className="text-white text-xs md:items-center text-center sm:text-sm md:text-base leading-relaxed">
                  My name is Andino Ferdiansah.
                  <br />
                  I was born in Kediri on June 13, 2005.
                  <br />
                  Now I live in West Surabaya's Tandes
                  <br />
                  District. I am a newbie programmer,
                  <br />
                  but I have an interest in becoming a
                  <br />
                  professional programmer, and I am
                  <br />
                  ready to give my best.
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
            data-aos="fade-up"
            alt="..."
            className="rounded-full shadow-lg hover:scale-110 transition-transform duration-300 w-48 sm:w-60 h-48 sm:h-60 md:w-96 md:h-96 mb-12 animate-neonPulse"
            style={{
              animation: "neonPulse 2s infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
