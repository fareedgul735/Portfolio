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
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: "Social Blogs Platform",
    description:
      "A blogging platform where users can create, read, update, and delete posts with authentication. Built using Next.js, Firebase, and Supabase for media storage.",
    image: "/UIUX.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 2,
    title: "Quiz App",
    description:
      "A React + TypeScript quiz application with dynamic questions, options, and score tracking.",
    image: "/quiz-project.jpg",
    link: "https://yourquizprojectlink.com",
  },
];
