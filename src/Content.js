// Header assets
import Header_person from "/src/assets/images/Header/Foto.jpg";

// Skills assets
import figma from "/src/assets/images/Skills/figma.png";
import sketch from "/src/assets/images/Skills/sketch.png";
import ps from "/src/assets/images/Skills/ps.png";
import reactjs from "/src/assets/images/Skills/react.png";
import nodejs from "/src/assets/images/Skills/node.png";
import python from "/src/assets/images/Skills/python.png";

// Services assets
import services_logo1 from "/src/assets/images/Services/logo1.png";
import services_logo2 from "/src/assets/images/Services/logo2.png";
import services_logo3 from "/src/assets/images/Services/logo3.png";

// Projects assets
import project1 from "/src/assets/images/Projects/img1.png";
import project2 from "/src/assets/images/Projects/img2.png";
import project3 from "/src/assets/images/Projects/img3.png";
import person_project from "/src/assets/images/Projects/person.png";

// Testimonials assets
import avatar1 from "/src/assets/images/Testimonials/avatar1.png";
import avatar2 from "/src/assets/images/Testimonials/avatar2.png";
import avatar3 from "/src/assets/images/Testimonials/avatar3.png";
import avatar4 from "/src/assets/images/Testimonials/avatar4.png";

// Hireme assets
import Hireme_person from "/src/assets/images/Hireme/person.png";
import Hireme_person2 from "/src/assets/images/Hireme/person2.png";

// React Icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],

  header: {
    title: "Web Developer",
    firstName: "Andino",
    LastName: "Ferdiansah",
    btnText: "Hire Me",
    image: Header_person,
    header_content: [
      {
        count: "3+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "5+",
        text: "Projects Completed",
      },
    ],
  },

  skills: {
    title: "Knowledge",
    subtitle: "These are the knowledge that I know",
    skills_content: [
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
        category: "Design Tools",
      },
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
        category: "Design Tools",
      },
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
        category: "Design Tools",
      },
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
        category: "Design Tools",
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
        category: "Frameworks",
      },
      {
        name: "Adobe Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: ps,
        category: "Design Tools",
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
        category: "Frameworks",
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
        category: "Programming Languages",
      },
    ],
    icon: MdArrowForward,
  },

  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
