import { createElement, useState, useEffect } from "react";
import { content } from "../Content";
import Modal from "react-modal";
import Aos from "aos";
import "aos/dist/aos.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "95%", // Responsif untuk ponsel
  },
  overlay: {
    padding: "1rem",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState(skills.skills_content);
  const [animationClass, setAnimationClass] = useState("opacity-100");

  // Extract categories (ignore undefined categories)
  const categories = [
    "All",
    ...new Set(
      skills.skills_content.map((skill) => skill.category).filter(Boolean)
    ),
  ];

  // Filter data berdasarkan kategori dengan animasi
  useEffect(() => {
    setAnimationClass("opacity-0 translate-y-5"); // Tambahkan kelas animasi keluar
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
      setAnimationClass("opacity-100 translate-y-0"); // Tambahkan kelas animasi masuk
    }, 300); // Durasi animasi keluar

    return () => clearTimeout(timeout);
  }, [activeCategory, skills.skills_content]);

  // Re-inisialisasi AOS setiap kali data di-render ulang
  useEffect(() => {
    Aos.refresh();
  }, [filteredSkills]);

  // Inisialisasi AOS saat komponen pertama kali dimuat
  useEffect(() => {
    Aos.init({
      duration: 1200, // Durasi default 1200ms
      once: false, // Animasi berjalan setiap kali di-scroll
    });
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section
      className="min-h-fit bg-white relative overflow-hidden" // Ganti background menjadi putih
      id="skills"
    >
      {/* SVG Wave (Bagian Atas) */}
      <div
        className="custom-shape-divider-top-custom"
        style={{
          marginTop: "-1px", // Menghilangkan celah putih
          position: "relative", // Pastikan posisi tetap
        }}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            filter: "drop-shadow(0 0 10px #FF0000)", // Neon Effect
          }}
        >
          {/* Path Pertama: Abu-abu */}
          <path
            d="M0,0V40C40,55,90,75,150,65C210,55,290,25,380,35C470,45,570,90,660,105C750,120,840,100,930,80C1020,60,1110,40,1155,30L1200,20V0Z"
            fill="#B0B0B0"
            opacity="1"
          ></path>

          {/* Path Kedua: Merah */}
          <path
            d="M0,0V20C30,40,70,60,120,70C180,90,260,70,340,50C420,30,510,10,590,30C670,50,760,80,850,95C940,110,1030,100,1120,85C1160,75,1200,60,1200,60V0Z"
            fill="#FF0000"
            opacity="0.9"
          ></path>

          {/* Path Ketiga: Hitam */}
          <path
            d="M0,0V5C100,30,250,80,400,70C550,60,700,10,850,5C1000,0,1150,20,1200,30V0Z"
            fill="#000000"
          ></path>
        </svg>
      </div>

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
            backgroundColor: "#F9F9F9", // Latar belakang abu-abu terang untuk modal
            borderRadius: "8px",
            border: "1px solid #ddd",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)", // Tambahkan bayangan halus
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay semi-transparan
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
      <div className="w-full max-w-screen-lg mx-auto px-4 md:px-6 py-8">
        <h1
          className="text-center text-2xl md:text-3xl font-bold mb-4 text-gray-900" // Warna teks abu-abu gelap
          data-aos="fade-down"
        >
          {skills.title}
        </h1>
        <h6
          className="text-center text-sm md:text-base text-gray-600 mb-6" // Warna teks abu-abu
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
              className={`relative px-6 py-2 rounded-lg border-2 transition-all duration-300 ease-in-out min-w-[120px] ${
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
              data-aos-delay={i * 100}
              className="bg-gray-100 sm:cursor-pointer 
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
