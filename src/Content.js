// Header assets
import Header_person from "/src/assets/images/Header/Foto.jpg";

// Skills assets
import laravel from "/src/assets/images/Skills/laravel.png";
import vue from "/src/assets/images/Skills/vue.png";
import next from "/src/assets/images/Skills/next.png";
import bootstrap from "/src/assets/images/Skills/bootstrap.png";
import tailwind from "/src/assets/images/Skills/tailwind.png";
import flutter from "/src/assets/images/Skills/flutter.png";
import vite from "/src/assets/images/Skills/vite.png";
import figma from "/src/assets/images/Skills/figma.png";
import photoshop from "/src/assets/images/Skills/photoshop.png";
import ilustrator from "/src/assets/images/Skills/ilustrator.png";
import premiere from "/src/assets/images/Skills/premiere.png";
import audition from "/src/assets/images/Skills/audition.png";
import html from "/src/assets/images/Skills/html.png";
import css from "/src/assets/images/Skills/css.png";
import js from "/src/assets/images/Skills/js.png";
import sass from "/src/assets/images/Skills/sass.png";
import jquery from "/src/assets/images/Skills/jquery.png";
import react from "/src/assets/images/Skills/react.png";
import php from "/src/assets/images/Skills/php.png";
import java from "/src/assets/images/Skills/java.png";
import python from "/src/assets/images/Skills/python.png";
import firebase from "/src/assets/images/Skills/firebase.png";
import node from "/src/assets/images/Skills/node.png";
import mysql from "/src/assets/images/Skills/mysql.png";
import mariadb from "/src/assets/images/Skills/mariadb.png";
import mongodb from "/src/assets/images/Skills/mongodb.png";
import postgresql from "/src/assets/images/Skills/postgresql.png";
import sqlite from "/src/assets/images/Skills/sqlite.png";
import github from "/src/assets/images/Skills/github.png";
import git from "/src/assets/images/Skills/git.png";
import gitlab from "/src/assets/images/Skills/gitlab.png";
import npm from "/src/assets/images/Skills/npm.png";
import postman from "/src/assets/images/Skills/postman.png";
import terminal from "/src/assets/images/Skills/terminal.png";
import powershell from "/src/assets/images/Skills/powershell.png";
import netlify from "/src/assets/images/Skills/netlify.png";
import vercel from "/src/assets/images/Skills/vercel.png";

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
    header_content: [{}],
  },

  skills: {
    title: "Knowledge",
    subtitle: "These are the knowledge that I know",
    skills_content: [
      {
        name: "Laravel",
        para: "A PHP framework for web application development.",
        logo: laravel,
        category: "Frameworks",
        description:
          "Laravel is a powerful PHP framework for building modern web applications. With features like routing, ORM (Eloquent), and the Blade templating system, Laravel simplifies development with its MVC approach and strong database integration.",
      },
      {
        name: "Vue.js",
        para: "A JavaScript framework for user interfaces.",
        logo: vue,
        category: "Frameworks",
        description:
          "Vue.js is a progressive JavaScript framework designed to build interactive user interfaces. Known for its ease of use, high performance, and clear documentation, Vue is ideal for projects ranging from small to large-scale applications.",
      },
      {
        name: "Next.js",
        para: "A React framework for front-end development.",
        logo: next,
        category: "Frameworks",
        description:
          "Next.js is a popular React framework for building full-stack web applications with server-side rendering (SSR), static site generation (SSG), and built-in SEO optimization. It enables fast and efficient modern application development.",
      },
      {
        name: "Bootstrap",
        para: "A CSS framework for responsive design.",
        logo: bootstrap,
        category: "Frameworks",
        description:
          "Bootstrap is a CSS framework used to quickly create responsive designs. With ready-to-use UI components such as buttons, navigation bars, and grid systems, Bootstrap accelerates the process of user interface development.",
      },
      {
        name: "Tailwind",
        para: "A utility-first CSS framework.",
        logo: tailwind,
        category: "Frameworks",
        description:
          "Tailwind CSS is a utility-first framework that allows developers to design interfaces with flexible styles directly in the HTML markup. Without relying on prebuilt components, Tailwind supports full customization.",
      },
      {
        name: "Flutter",
        para: "A framework for cross-platform application development.",
        logo: flutter,
        category: "Frameworks",
        description:
          "Flutter is a framework by Google for building cross-platform applications (Android, iOS, Web) with a single codebase. Using the Dart language, Flutter offers rich custom widgets and high performance for seamless user experiences.",
      },
      {
        name: "Vite.js",
        para: "A modern bundler for front-end development.",
        logo: vite,
        category: "Frameworks",
        description:
          "Vite is a modern build tool designed for fast front-end development. It supports hot module replacement (HMR) with blazing speed and simple configuration, making it ideal for JavaScript and TypeScript projects.",
      },
      {
        name: "Figma",
        para: "A cloud-based design platform for collaboration.",
        logo: figma,
        category: "Design Tools",
        description:
          "Figma is a cloud-based design tool that allows designers and teams to collaborate on UI/UX designs. With features like interactive prototypes, live comments, and plugin integrations, Figma streamlines dynamic design processes.",
      },
      {
        name: "Adobe Photoshop",
        para: "A tool for image editing and graphic design.",
        logo: photoshop,
        category: "Design Tools",
        description:
          "Adobe Photoshop is a leading software for image editing and graphic design. With features like layers, masking, and advanced effects, Photoshop is highly flexible for creative needs, from photo retouching to digital art creation.",
      },
      {
        name: "Adobe Illustrator",
        para: "Software for professional vector design.",
        logo: ilustrator,
        category: "Design Tools",
        description:
          "Adobe Illustrator is the ideal tool for creating vector-based designs, such as logos, illustrations, and infographics. With high precision and powerful drawing tools, Illustrator provides freedom to create high-quality designs.",
      },
      {
        name: "Adobe Premiere Pro",
        para: "A tool for professional video editing.",
        logo: premiere,
        category: "Design Tools",
        description:
          "Adobe Premiere Pro is video editing software used by professionals to create high-quality content. With a flexible timeline, color correction tools, and integration with other Adobe applications, Premiere Pro enables precise video editing.",
      },
      {
        name: "Adobe Audition",
        para: "Software for professional audio production.",
        logo: audition,
        category: "Design Tools",
        description:
          "Adobe Audition is a powerful tool for audio editing and production. With features like noise reduction, multitrack mixing, and audio effects, Audition is perfect for creating podcasts, music, or sound post-production for videos.",
      },
      {
        name: "HTML",
        para: "A basic markup language for creating web structures.",
        logo: html,
        category: "Frontend",
        description:
          "HTML (HyperText Markup Language) is the foundational language for web development. It is used to create the structure of web pages with elements like headers, paragraphs, links, and more.",
      },
      {
        name: "CSS",
        para: "A language for designing web page layouts.",
        logo: css,
        category: "Frontend",
        description:
          "CSS (Cascading Style Sheets) is a language used to design and structure web page layouts. With CSS, you can customize colors, fonts, margins, animations, and other visual elements.",
      },
      {
        name: "JavaScript",
        para: "A programming language for adding interactivity.",
        logo: js,
        category: "Frontend",
        description:
          "JavaScript is a programming language used to make web pages dynamic and interactive. With JavaScript, you can handle user events, manipulate the DOM, and develop modern web applications.",
      },
      {
        name: "Sass",
        para: "A CSS preprocessor for writing efficient code.",
        logo: sass,
        category: "Frontend",
        description:
          "Sass (Syntactically Awesome Stylesheets) is a CSS preprocessor that extends CSS functionality with features like variables, nested rules, mixins, and inheritance. Sass helps make CSS code more structured and manageable.",
      },
      {
        name: "jQuery",
        para: "A JavaScript library for easy DOM manipulation.",
        logo: jquery,
        category: "Frontend",
        description:
          "jQuery is a JavaScript library designed to simplify DOM manipulation, event handling, and animations. Although its popularity has declined with modern frameworks, jQuery is still used in legacy projects.",
      },
      {
        name: "React.js",
        para: "A UI library for building user interfaces.",
        logo: react,
        category: "Frontend",
        description:
          "React.js is a popular JavaScript library for building user interfaces using a component-based approach. With features like the virtual DOM and state management, React supports fast and efficient web application development.",
      },
      {
        name: "PHP",
        para: "A scripting language for server-side development.",
        logo: php,
        category: "Backend",
        description:
          "PHP is a popular scripting language used for building dynamic and server-side web applications. It supports many frameworks like Laravel and CodeIgniter to streamline development.",
      },
      {
        name: "Java",
        para: "An object-oriented programming language.",
        logo: java,
        category: "Backend",
        description:
          "Java is an object-oriented programming language widely used for backend, web, and enterprise application development. With the JVM (Java Virtual Machine), Java enables cross-platform portability.",
      },
      {
        name: "Python",
        para: "A versatile language for various applications.",
        logo: python,
        category: "Backend",
        description:
          "Python is a versatile programming language often used for backend development, data analysis, AI, and machine learning. Frameworks like Django and Flask make Python ideal for building modern web applications.",
      },
      {
        name: "Firebase",
        para: "A backend-as-a-service platform by Google.",
        logo: firebase,
        category: "Backend",
        description:
          "Firebase is a backend-as-a-service (BaaS) platform that provides various services like authentication, real-time databases, cloud storage, and hosting. It is ideal for web and mobile applications that require fast development.",
      },
      {
        name: "Node.js",
        para: "A JavaScript runtime for server-side development.",
        logo: node,
        category: "Backend",
        description:
          "Node.js is a JavaScript runtime based on the V8 engine that enables server-side application development. It supports rapid and scalable application development with its non-blocking, event-driven architecture.",
      },
      {
        name: "MySQL",
        para: "A popular open-source relational database.",
        logo: mysql,
        category: "Databases",
        description:
          "MySQL is an open-source relational database management system (RDBMS) widely used for web applications. It supports SQL queries and is well-suited for managing data on small to large scales.",
      },
      {
        name: "MariaDB",
        para: "A fork of MySQL with improved performance.",
        logo: mariadb,
        category: "Databases",
        description:
          "MariaDB is a fork of MySQL offering high performance and additional features. It is used as an alternative to MySQL for more complex database needs with full compatibility.",
      },
      {
        name: "MongoDB",
        para: "A NoSQL database based on documents.",
        logo: mongodb,
        category: "Databases",
        description:
          "MongoDB is a NoSQL database designed for document-based data management. It supports high flexibility with JSON-like (BSON) formats, making it suitable for modern applications requiring scalability.",
      },
      {
        name: "PostgreSQL",
        para: "A relational database with advanced features.",
        logo: postgresql,
        category: "Databases",
        description:
          "PostgreSQL is an open-source relational database management system with advanced features such as JSON support, robust indexing, and reliable transaction capabilities. It is ideal for applications requiring reliability and scalability.",
      },
      {
        name: "SQLite",
        para: "A lightweight database integrated with applications.",
        logo: sqlite,
        category: "Databases",
        description:
          "SQLite is a lightweight, self-contained relational database. It requires no separate server, making it well-suited for mobile applications, IoT devices, or quick prototyping.",
      },
      {
        name: "GitHub",
        para: "A platform for storing and sharing code repositories.",
        logo: github,
        category: "Tools",
        description:
          "GitHub is a Git-based hosting platform used for storing, managing, and sharing code repositories. It includes features like pull requests, issue tracking, and GitHub Actions for CI/CD.",
      },
      {
        name: "Git",
        para: "A distributed version control system.",
        logo: git,
        category: "Tools",
        description:
          "Git is a distributed version control system designed to track changes in files and support collaboration in software development. It is widely used by developers for both individual and team projects.",
      },
      {
        name: "GitLab",
        para: "A Git-based DevOps platform for project management.",
        logo: gitlab,
        category: "Tools",
        description:
          "GitLab is a Git-based DevOps platform that provides repository management, CI/CD, and team collaboration features. With an all-in-one solution, GitLab supports development, testing, and deployment.",
      },
      {
        name: "NPM",
        para: "A package manager for the Node.js ecosystem.",
        logo: npm,
        category: "Tools",
        description:
          "NPM (Node Package Manager) is a package manager for the Node.js ecosystem that allows developers to download, manage, and share JavaScript libraries or modules. Ideal for both front-end and back-end development.",
      },
      {
        name: "Postman",
        para: "A powerful and user-friendly API testing tool.",
        logo: postman,
        category: "Tools",
        description:
          "Postman is a tool for API testing that simplifies the creation, management, and testing of API endpoints. Equipped with features like collections, automated testing, and CI/CD integrations.",
      },
      {
        name: "Windows Terminal",
        para: "A modern terminal application for Windows.",
        logo: terminal,
        category: "Tools",
        description:
          "Windows Terminal is a modern terminal application for Windows users that supports various shells like Command Prompt, PowerShell, and WSL. With customizable UI and tab features, it supports high productivity.",
      },
      {
        name: "PowerShell",
        para: "A command-line shell for system task automation.",
        logo: powershell,
        category: "Tools",
        description:
          "PowerShell is a command-line shell designed for automating administrative tasks and system management. It supports powerful scripting and interaction with various Windows services and cloud platforms like Azure.",
      },
      {
        name: "Netlify",
        para: "A modern hosting platform for web applications.",
        logo: netlify,
        category: "Others",
        description:
          "Netlify is a cloud-based hosting platform designed for modern web applications. With features like continuous deployment, serverless functions, and built-in CDN, Netlify allows developers to host applications quickly and easily.",
      },
      {
        name: "Vercel",
        para: "A hosting platform for React and Next.js applications.",
        logo: vercel,
        category: "Others",
        description:
          "Vercel is a hosting platform optimized for React and Next.js applications. With features like automatic deployment, on-demand scaling, and full integration with modern frameworks, Vercel is an excellent solution for front-end developers.",
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
