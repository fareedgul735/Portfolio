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
