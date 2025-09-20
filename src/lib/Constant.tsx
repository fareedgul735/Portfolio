import {
  AppstoreOutlined,
  HomeOutlined,
  MailOutlined,
  ProjectOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MdWork } from "react-icons/md";

export const NavLinks = [
  { title: "Home", path: "/", icon: <HomeOutlined /> },
  { title: "About", path: "/about", icon: <UserOutlined /> },
  { title: "Skills", path: "skills", icon: <ToolOutlined /> },
  { title: "Experience", path: "experience", icon: <MdWork /> },
  { title: "Services", path: "services", icon: <AppstoreOutlined /> },
  { title: "Projects", path: "projects", icon: <ProjectOutlined /> },
  { title: "Contact", path: "contact", icon: <MailOutlined /> },
];

export const servicesData = [
  {
    id: "web",
    title: "Web Development",
    img: "/develop.jpg",
    shortDesc:
      "I create modern, responsive, and fast websites using React.js, Next.js, and TypeScript.",
    longDesc:
      "My expertise includes frontend and full-stack development, REST APIs, Firebase, and Supabase integrations. I ensure clean code, performance, and SEO optimization.",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    img: "/UIUX.jpg",
    shortDesc:
      "I design user-friendly, elegant interfaces with smooth user experiences.",
    longDesc:
      "Using Figma and SCSS/Tailwind, I convert wireframes into interactive, pixel-perfect websites. I focus on accessibility and usability for all devices.",
  },
  {
    id: "Backend Development",
    title: "Backend Development",
    img: "/Backend.jpg",
    shortDesc:
      "I build and manage robust backend systems with secure APIs and databases.",
    longDesc:
      "From RESTful APIs to database management, I handle server-side logic and integrations using Node.js, Express, Firebase, and MongoDB. Ensuring scalability, authentication, and smooth communication between frontend and backend.",
  },
  {
    id: "SEO Optimization",
    title: "SEO Optimization",
    img: "/seo.png",
    shortDesc:
      "I optimize websites to rank higher in search engines and drive organic traffic.",
    longDesc:
      "With expertise in keyword research, on-page optimization, and technical SEO, I help businesses improve their search visibility and attract targeted audiences. My SEO strategies focus on long-term growth by boosting website rankings, enhancing user engagement, and increasing conversions.",
  },
  {
    id: "Digital Marketing",
    title: "Digital Marketing & Campaigns",
    img: "/markiting.webp",
    shortDesc:
      "I run effective digital marketing campaigns across Instagram, Facebook, and YouTube to grow brand awareness.",
    longDesc:
      "From social media campaigns to video marketing, I help brands reach their audience through engaging ads and strategies. I create and manage campaigns on Instagram, Facebook, and YouTube, ensuring maximum ROI with proper audience targeting, analytics tracking, and creative content. My approach combines organic growth with paid promotions to deliver impactful results.",
  },
];

export const experienceData = [
  {
    id: "frontendExperienceLetter",
    title: "Frontend Development Internship",
    img: "/FareedExperienceLetterPic.jpg",
    shortDesc:
      "Worked as a Frontend Developer Intern(3 months) where I handled Next.js, TypeScript and SCSS for building a project.",
    longDesc:
      "The project idea was to create a platform where school,college or tuition heads/owners can send and manage students’documents, signatures and messages via email. Multiplerecipients can receive any file and perform actions. Thisinternship gave me  3 months of valuable hands-on experience in frontend development.",
  },
];

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  categories: string;
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: "BlogsLife",
    description:
      "A full-stack blogging platform built with **HTML, CSS, JavaScript** on the frontend and **Firebase & Supabase** for backend services.  The design takes inspiration from Facebook, but with a unique blogging style.  It includes **secure authentication** where users must sign up or log in before accessing the dashboard. Once logged in, they can explore blogs from around the world with images, and detailed blog pages.  Users can also **create, edit, and delete their own blogs** with images. A dedicated  while additional pages such as **About** and **Help Center** enhance the user experience.  This project demonstrates my ability to build a **complete full-stack application** with authentication, real-time database management, and modern UI/UX.",
    image: "/BlogsLife.webp",
    link: "https://blogs-life.vercel.app",
    categories: "Javascript",
  },
  {
    id: 2,
    title: "Calcualtor",
    description:
      "A simple Calculator built with HTML, CSS, and vanilla JavaScript — supports basic arithmetic, keyboard input, clear/backspace, and a responsive layout.",
    image: "/Calculator.jpeg",
    link: "https://calculator-gilt-two-37.vercel.app",
    categories: "Javascript",
  },
  {
    id: 3,
    title: "JS Online Compiler",
    description:
      "An online JavaScript compiler built with HTML, Tailwind CSS, and vanilla JavaScript. The purpose of this project is to provide a simple in-browser editor where users can write and execute JavaScript code instantly.",
    image: "/javascript-736400_1280.webp",
    link: "https://free-online-compiler-js.vercel.app",
    categories: "Javascript",
  },
  {
    id: 4,
    title: "Snake Game",
    description:
      "A classic Snake Game built with HTML, CSS, and vanilla JavaScript. Developed with the help of AI tools, this project focuses on game logic, keyboard controls, and dynamic rendering. While not fully responsive, it works seamlessly on larger screens.",
    image: "/sanke.jpeg",
    link: "https://snake-game-one-liart.vercel.app",
    categories: "Javascript",
  },
  {
    id: 5,
    title: "To-Do List",
    description:
      "A simple To-Do List application built with HTML, CSS, and vanilla JavaScript. Users can add, delete, and mark tasks as completed. Designed to practice DOM manipulation, event handling, and local storage for task persistence.",
    image: "/todo.jpg",
    link: "https://todo-rosy-alpha-32.vercel.app",
    categories: "Javascript",
  },
  {
    id: 6,
    title: "Prayer Times",
    description:
      "A simple Prayer Times app built with HTML, CSS, and JavaScript. It dynamically shows the daily timings for all 5 prayers (Fajr, Dhuhr, Asr, Maghrib, Isha) along with Tahajjud and Ishraq. The background also changes based on the time of day, making the experience more interactive.",
    image: "/prayer.jpg",
    link: "https://prayers-times-three.vercel.app",
    categories: "Javascript",
  },
  {
    id: 7,
    title: "Quiz App",
    description:
      "A quiz application built with React and TypeScript (TSX). The app presents dynamic questions, tracks user answers and points, calculates the final score and percentage, and provides instant pass/fail feedback. Users who score 70% or above are marked as 'Pass', while scores below 70% show 'Fail'. The interface displays a clear results breakdown to help learners identify strengths and areas to improve.",
    image: "/QuizImage.jpg",
    link: "https://js-quiz-learn.vercel.app",
    categories: "Typescript",
  },
  {
    id: 8,
    title: "To-Do List",
    description:
      "A professional To-Do List application built with React and TypeScript. It supports creating, editing, deleting, and marking tasks as completed or incomplete. Users can filter tasks (All, Completed, Incomplete) for better management. The app leverages Context API for global state management and Local Storage for data persistence, ensuring tasks remain saved even after refresh. This project demonstrates a complete CRUD workflow with clean architecture and reusability.",
    image: "/todolist.png",
    link: "https://todo-list-mu-wine-78.vercel.app",
    categories: "Typescript",
  },

  {
    id: 9,
    title: "Horror Layout Website",
    description:
      "A multi-page horror-themed layout built with Next.js and TypeScript (TSX). The project features a spooky modern UI with multiple pages, smooth navigation, and a responsive design. Leveraging Next.js capabilities such as file-based routing and optimized performance, this project highlights how powerful and developer-friendly the framework is. Built purely for design and experimentation, it reflects creativity and love for Next.js.",
    image: "/anabelle.jpg",
    link: "https://haunt-flix.vercel.app",
    categories: "NextJs",
  },
  {
    id: 10,
    title: "Ticket Management System",
    description:
      "A professional Ticket Management System built with React.js, designed to streamline issue tracking and task management. The project implements Redux Toolkit and Context API for powerful state management, along with Redux Persist to maintain state across sessions. Firebase is integrated for real-time database and authentication. Users can create, assign, update, and resolve tickets, making it an efficient solution for handling customer support requests, IT helpdesk queries, or internal project tasks. The system provides a clean and responsive UI with reliable functionality.",
    image: "/tms.png",
    link: "https://ticket-management-chi.vercel.app",
    categories: "ReactJs",
  },
  {
    id: 11,
    title: "Todo App",
    description:
      "A feature-rich Todo App built with React.js, implementing full CRUD operations. Tasks can be created, updated, deleted, and marked as complete/incomplete. The app uses LocalStorage for data persistence, ensuring tasks remain saved even after refresh. SweetAlert is integrated for beautiful confirmation modals and alerts, enhancing the overall user experience. A clean, responsive design makes task management smooth and intuitive.",
    image: "/todoapp.webp",
    link: "https://todo-list-react-js-1eh6.vercel.app",
    categories: "ReactJs",
  },
  {
    id: 12,
    title: "GymScanner",
    description:
      "A feature-rich GymScanner built with React.js, & tailwind.css full Dynamic content. using the reuseable components!",
    image: "/Background_Image.png",
    link: "https://gym-scanner-flame.vercel.app/",
    categories: "ReactJs",
  },
];

export const categories = [
  "All",
  "Javascript",
  "Typescript",
  "NextJs",
  "ReactJs",
];
