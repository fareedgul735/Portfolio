import { AppstoreOutlined, HomeOutlined, MailOutlined, ProjectOutlined, SettingTwoTone, ToolOutlined, UserOutlined } from "@ant-design/icons";

export const NavLinks = [
    { title: "Home", path: "/", icon: <HomeOutlined /> },
    { title: "About", path: "/about", icon: <UserOutlined /> },
    { title: "Skills", path: "skills", icon: <ToolOutlined /> },
    { title: "Services", path: "services", icon: <AppstoreOutlined /> },
    { title: "Projects", path: "projects", icon: <ProjectOutlined /> },
    { title: "Contact", path: "contact", icon: <MailOutlined /> },
]

export const Themes = [
    { title: "Themes", icon: <SettingTwoTone /> }

]