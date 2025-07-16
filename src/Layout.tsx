import { Link, NavLink, Outlet } from "react-router-dom"
import "./Layout.css"
import { NavLinks } from "./lib/Constant"
import { Button, Drawer, Popover } from "antd"
import { BulbOutlined, CloseSquareFilled, DesktopOutlined, MenuOutlined, MoonOutlined, SettingTwoTone } from '@ant-design/icons';
import { useState, type FC } from "react";

const Layout: FC = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    const settingContent = (
        <div className="theme-settings">
            <div className="theme-option">
                <BulbOutlined className="theme-icon" />
                <span>Light Theme</span>
            </div>
            <div className="theme-option">
                <MoonOutlined className="theme-icon" />
                <span>Dark Theme</span>
            </div>
            <div className="theme-option">
                <DesktopOutlined className="theme-icon" />
                <span>System Theme</span>
            </div>
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
                    <Popover
                        placement="bottom"
                        title={<span className="popover-title">Theme Settings</span>}
                        content={settingContent}
                        trigger="click"
                    >
                        <Button>Themes</Button>
                    </Popover>
                </div>
            </div>

            <div className="navbar-small-screen">
                <div className="small-logo">
                    {"< FK />"}
                </div>
                <div className="menu-btn">
                    <Button
                        type="none"
                        icon={<MenuOutlined className="menu-icon" style={{
                            fontSize: '20px',
                            fontWeight: "900",
                            color: 'white',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                        }}
                        />}
                        onClick={showDrawer}
                    />
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
                    closeIcon={<CloseSquareFilled className="custom-close" />}
                    key="top"
                    open={open}
                    onClose={onClose}
                    height={400}
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
