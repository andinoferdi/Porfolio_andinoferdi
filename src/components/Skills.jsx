import { createElement, useState } from "react";
import { content } from "../Content";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract categories (ignore undefined categories)
  const categories = [
    "All",
    ...new Set(
      skills.skills_content.map((skill) => skill.category).filter(Boolean)
    ),
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills.skills_content
      : skills.skills_content.filter(
          (skill) => skill.category === activeCategory
        );

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary relative" id="skills">
      {/* SVG Wave (Bagian Atas) */}
      <div className="custom-shape-divider-top-custom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V40C40,55,90,75,150,65C210,55,290,25,380,35C470,45,570,90,660,105C750,120,840,100,930,80C1020,60,1110,40,1155,30L1200,20V0Z"
            opacity=".2"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V20C30,40,70,60,120,70C180,90,260,70,340,50C420,30,510,10,590,30C670,50,760,80,850,95C940,110,1030,100,1120,85C1160,75,1200,60,1200,60V0Z"
            opacity=".4"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5C100,30,250,80,400,70C550,60,700,10,850,5C1000,0,1150,20,1200,30V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
          <li>Lorem ipsum dolor sit, ame.</li>
          <li>Lorem ipsum dolor sit, amet consectetur</li>
          <li>
            Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est
            beatae quos rem.
          </li>
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>

      {/* Content */}
      <div className="md:container px-5 py-14">
        <h1 className="title" data-aos="fade-down">
          {skills.title}
        </h1>
        <h6 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h6>

        {/* Categories */}
        <div className="flex justify-center gap-4 py-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`relative px-6 py-2 rounded-lg border-2 transition-all duration-300 ease-in-out ${
                activeCategory === category
                  ? "border-red-500 bg-gradient-to-r from-red-500 via-black to-black text-white shadow-md scale-105"
                  : "border-gray-700 bg-gray-800 text-gray-300 hover:border-red-500 hover:text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-4 justify-center">
          {filteredSkills.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer 
              relative group w-full flex items-center
              gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
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
