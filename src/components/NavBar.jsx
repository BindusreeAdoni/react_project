import {Link} from "react-router-dom";
import "../css/Navbar.css";

function NavBar(){
    return <nav className = "navbar">
        <div className = "navbar-brand">
            <Link to="/">Movie app</Link>
        </div>
        <div className = "navbar-links">
            <Link to="/" className = "nav-link">Home</Link>
            <br></br>
            <Link to="/favourites" className = "nav-link">favourites</Link>
        </div>
    </nav>
}

export default NavBar;