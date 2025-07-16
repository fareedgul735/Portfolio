import { NavLink, Outlet } from "react-router-dom"
import "./Layout.css"
import { NavLinks, ThemeContent } from "./lib/Constant"
import { Drawer, Popover, Select } from "antd"
import { BgColorsOutlined, CloseOutlined, MenuOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useState, type FC } from "react";
import { Option } from "antd/es/mentions";

const Layout: FC = () => {
    const [open, setOpen] = useState(false);

    const [visible, setVisible] = useState(false);

    const handleVisible = (visibility: boolean) => {
        setVisible(visibility)
    }

    const handleVisibleClick = () => {
        setVisible(false)
    }


    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    const themeSetting = (
        <div className="theme-settings">
            {ThemeContent.map((item, index) => {
                return (
                    <div className="theme-option" key={index} onClick={handleVisibleClick}>
                        <span className="theme-icon">{item.icon}</span>
                        <span className="popover-title">{item.title}</span>
                    </div>
                )
            })}
        </div>
    );

    return (
        <div className="layout-wrapper">
            <div className="navbar-wrapper">
                <div className="logo">
                    {"< Fareed Khan />"}
                </div>
                <div className="nav-links">
                    {
                        NavLinks.map((item, index) => {
                            return (
                                <NavLink className={({ isActive }) => isActive ? "active" : ""} key={index} to={item.path}>
                                    {item.title}
                                </NavLink>
                            )
                        })
                    }

                </div>
                <Popover
                    placement="bottom"
                    title={<span className="popover-title">Theme Settings</span>}
                    content={themeSetting}
                    trigger="click"
                    open={visible}
                    onOpenChange={handleVisible}
                >
                    <button className="theme-toggle-btn">Switch Theme</button>

                </Popover>
            </div>

            <div className="navbar-small-screen">
                <div className="small-logo">
                    {"< FK />"}
                </div>
                <div className="menu-btn" onClick={showDrawer}>
                    <span>
                        <MenuOutlined className="menu-icon" style={{
                            fontSize: '20px',
                            fontWeight: "900",
                            color: 'white',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                        }} />
                    </span>

                </div>
                <Drawer
                    title={
                        <div className="drawer-title-wrapper">
                            <img
                                src="https://i.pravatar.cc/100"
                                alt="avatar"
                                className="drawer-avatar"
                            />
                            <span className="drawer-logo">{"< Fareed Khan />"}</span>
                        </div>
                    }
                    placement="top"
                    closable={true}
                    closeIcon={<CloseOutlined className="custom-close" />}
                    key="top"
                    open={open}
                    onClose={onClose}
                    height={550}
                    className="drawer-custom"
                >
                    <div className="nav-links-small">
                        {NavLinks.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
                                onClick={onClose}
                            >
                                <span className="link-icon">{item.icon}</span>
                                <span className="link-text">{item.title}</span>
                            </NavLink>
                        ))}
                    </div>
                    <div className="selector-wrap">
                        <Select
                            defaultValue="Theme Setting"
                            className="theme-select"
                            size="small"
                        >
                            <Option value="light"><SunOutlined /> Light</Option>
                            <Option value="dark"><MoonOutlined /> Dark</Option>
                            <Option value="system"> <BgColorsOutlined />Gradient Theme</Option>
                        </Select>
                    </div>
                </Drawer>

            </div >

            <div className="main-container">
                <div className="outlet-wrapper">
                    <Outlet />
                </div>
            </div>
        </div >
    )
}

export default Layout
