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
    hosting: "Hosting: GitHub Netlify Vercel AWS Firebase",
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
      "A full-stack blogging platform built with **HTML, CSS, JavaScript** on the frontend and **Firebase & Supabase** for backend services.  The design takes inspiration from Facebook, but with a unique blogging style.  It includes **secure authentication** where users must sign up or log in before accessing the dashboard. Once logged in, they can explore blogs from around the world with images, like and share posts, and view detailed blog pages.  Users can also **create, edit, and delete their own blogs** with images. A dedicated **Profile Page** allows them to manage their personal information, while additional pages such as **About** and **Help Center** enhance the user experience.  This project demonstrates my ability to build a **complete full-stack application** with authentication, real-time database management, and modern UI/UX.",
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
];

export const categories = [
  "All",
  "Javascript",
  "Typescript",
  "NextJs",
  "ReactJs",
];
