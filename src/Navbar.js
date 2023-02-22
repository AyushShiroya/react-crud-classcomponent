import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="topnav">
                <nav>
                    <Link to="/" className="a">Home</Link>
                    <Link to="/Intro" className="a">Intro</Link>
                    <Link to="/blogs" className="a">About us</Link>
                    <Link to="/contact" className="a">Contact</Link>
                    <Link to="/Table" className="a">Table</Link>
                </nav>
            </div>
            <Outlet />
        </>
    )
};

export default Layout;

