import { AppstoreOutlined, BgColorsOutlined, BulbOutlined, HomeOutlined, MailOutlined, MoonOutlined, ProjectOutlined, SettingTwoTone, SunOutlined, ToolOutlined, UserOutlined } from "@ant-design/icons";

export const NavLinks = [
    { title: "Home", path: "/", icon: <HomeOutlined /> },
    { title: "About", path: "/about", icon: <UserOutlined /> },
    { title: "Skills", path: "skills", icon: <ToolOutlined /> },
    { title: "Services", path: "services", icon: <AppstoreOutlined /> },
    { title: "Projects", path: "projects", icon: <ProjectOutlined /> },
    { title: "Contact", path: "contact", icon: <MailOutlined /> },
]

export const ThemeContent = [
    { title: "Light Theme", icon: <SunOutlined /> },
    { title: "Dark Theme", icon: <MoonOutlined /> },
    { title: "Gradient Theme", icon: <BgColorsOutlined /> }
]