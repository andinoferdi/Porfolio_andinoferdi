import { createElement, useState, useEffect } from "react";
import { content } from "../Content";
import Modal from "react-modal";
import Divider from "./Divider";
import Particles from "./Particles";

Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState(skills.skills_content);
  const [animationClass, setAnimationClass] = useState("opacity-100");
  const [modalAnimation, setModalAnimation] = useState("fade-in");

  const categories = [
    "All",
    ...new Set(
      skills.skills_content.map((skill) => skill.category).filter(Boolean)
    ),
  ];

  useEffect(() => {
    setAnimationClass("opacity-0 translate-y-5");
    const timeout = setTimeout(() => {
      if (activeCategory === "All") {
        setFilteredSkills(skills.skills_content);
      } else {
        setFilteredSkills(
          skills.skills_content.filter(
            (skill) => skill.category === activeCategory
          )
        );
      }
      setAnimationClass("opacity-100 translate-y-0");
    }, 300);

    return () => clearTimeout(timeout);
  }, [activeCategory, skills.skills_content]);

  function openModal() {
    setIsOpen(true);
    setModalAnimation("fade-in");
  }

  function closeModal() {
    setModalAnimation("fade-out");
    setTimeout(() => {
      setIsOpen(false);
      setModalAnimation("fade-in");
    }, 300);
  }

  return (
    <section className="min-h-fit relative overflow-hidden" id="skills">
      {/* <Divider /> */}
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "25rem",
            width: "90%",
            backgroundColor: "#F9F9F9",
            borderRadius: "8px",
            border: "1px solid #ddd",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            opacity: modalAnimation === "fade-out" ? "0" : "1",
            transition: "opacity 300ms ease-out",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <p className="italic">{selectSkill?.description}</p>
        </ul>
        <br />
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Content */}
      <div className="w-full max-w-screen-lg mx-auto px-4 md:px-6 py-8 mt-[20rem]">
        <h1
          className="text-center text-2xl md:text-3xl font-bold mb-4 text-white"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
          }}
          data-aos="fade-down"
        >
          {skills.title}
        </h1>
        <h6
          className="text-center text-sm md:text-base text-white mb-6"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
          }}
          data-aos="fade-down"
        >
          {skills.subtitle}
        </h6>

        {/* Categories */}
        <div
          className="flex flex-wrap justify-center gap-4 py-4"
          data-aos="fade-down"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`relative px-6 py-2 rounded-lg border-2 transition-all duration-300 ease-in-out min-w-[120px] bg-white ${
                activeCategory === category
                  ? "border-red-500 bg-gradient-to-r from-red-500 via-black to-black text-white shadow-md scale-105"
                  : "border-gray-300 bg-gray-100 text-gray-600 hover:border-red-500 hover:text-black"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div
          className={`flex flex-wrap gap-4 justify-center transition-all duration-500 ${animationClass}`}
        >
          {filteredSkills.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="bg-white sm:cursor-pointer 
                   relative group w-full flex items-center
                   gap-5 p-5 max-w-sm rounded-md border-2 border-black shadow-none transition-all duration-300"
            >
              {/* Neon Effect */}
              <div
                className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-red-500 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_20px_#FF0000] transition-all duration-300"
                aria-hidden="true"
              ></div>
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6 className="text-gray-900">{skill.name}</h6>
                <p className="italic text-gray-600">{skill.para}</p>
                <div
                  onClick={() => {
                    setSelectSkill(skill);
                    openModal();
                  }}
                  className="text-xl absolute top-3 right-3"
                >
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
