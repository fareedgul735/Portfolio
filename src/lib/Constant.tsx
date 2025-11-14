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
      "Worked as a Frontend Developer (6 months) where I handled Next.js, TypeScript and SCSS for build a project.",
    longDesc:
      "The project idea was to create a platform where school,college or tuition heads/owners can send and manage students’documents, signatures and messages via email. Multiplerecipients can receive any file and perform actions. This experience gave me 6 months of valuable hands-on experience in frontend development.",
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
    id: 10,
    title: "Ticket Management System",
    description:
      "A professional Ticket Management System built with React.js, designed to streamline issue tracking and task management. The project implements Redux Toolkit and Context API for powerful state management, along with Redux Persist to maintain state across sessions. Firebase is integrated for real-time database and authentication. Users can create, assign, update, and resolve tickets, making it an efficient solution for handling customer support requests, IT helpdesk queries, or internal project tasks. The system provides a clean and responsive UI with reliable functionality.",
    image: "/tms.png",
    link: "https://ticket-management-chi.vercel.app",
    categories: "ReactJs",
  },

  {
    id: 10,
    title: "Health Mate",
    description:"I created an AI-Powered Health Companion App jahan user apni health ke bare mein AI se baat kar sakta hai, apni reports save kar sakta hai, aur apna health data analyze kar sakta hai — jaise sugar, BP, aur temperature tracking. Real-life problem solve karne ka try kiya hai — kai logon ko apni purani reports ya medical data track karna mushkil lagta hai. Is app mein user easily apni health history save kar sakta hai aur AI se suggestions bhi le sakta hai, jaise doctor ke advice type answers.",
    image: "/health.png",
    link: "https://health-mate-two-sandy.vercel.app",
    categories: "ReactJs",
  },
];

