import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";
import { NavLinks } from "./lib/Constant";
import { Drawer, Tooltip } from "antd";
import {
  CloseOutlined,
  MenuOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { useState, type FC } from "react";

const Layout: FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="layout-wrapper">
      <div className="navbar-wrapper">
        <div className="logo">{"< Fareed Gul />"}</div>
        <div className="nav-links">
          {NavLinks.map((item, index) => {
            return (
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                key={index}
                to={item.path}
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="navbar-small-screen">
        <div className="small-logo">{"< FG />"}</div>
        <div className="menu-btn" onClick={showDrawer}>
          <span>
            <MenuOutlined
              className="menu-icon"
              style={{
                fontSize: "20px",
                fontWeight: "900",
                color: "white",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
            />
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
              <span className="drawer-logo">{"< Fareed Gul />"}</span>
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
                className={({ isActive }) =>
                  isActive ? "active-link" : "nav-link"
                }
                onClick={onClose}
              >
                <span className="link-icon">{item.icon}</span>
                <span className="link-text">{item.title}</span>
              </NavLink>
            ))}
          </div>
        </Drawer>
      </div>

      <Tooltip
        title={<span style={{ fontWeight: "bold" }}>Hire Me on WhatsApp</span>}
        color="green"
      >
        <a
          href="https://wa.me/923222156119"
          target="_blank"
          rel="noopener noreferrer"
          className="hire-me"
        >
          <WhatsAppOutlined />
        </a>
      </Tooltip>

      <div className="main-container">
        <div className="outlet-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
