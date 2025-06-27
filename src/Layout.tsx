import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <div className="navbar-wrapper">
                <div className="log">
                    Navbar
                </div>
                <div className="nav-links">
                    <Link to={"/"}>
                        <i> Home</i>
                    </Link>
                    <Link to={"/about"}>
                        <i> About</i>
                    </Link>
                    <Link to={"/services"}>
                        <i>Services</i>
                    </Link>
                    <Link to={"/projects"}>
                        <i>Projects</i>
                    </Link>
                    <Link to={"/skills"}>
                        <i>Skills</i>
                    </Link>
                    <Link to={"/contact"}>
                        <i>Contact</i>
                    </Link>
                </div>
            </div>
            <div className="main-container">
                <div className="outlet-wrapper">
                    <Outlet />
                </div>
            </div>
            <div className="footer-wrapper">
                Footer
            </div>
        </>
    )
}

export default Layout
