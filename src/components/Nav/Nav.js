import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
    return (
        <nav className="Nav">
            <Link to="/home" className="Nav-link">
                Home
            </Link>

            <div className="Nav-links-container">
                <Link to="/profile" className="Nav-link">
                    Perfil
                </Link>
                <Link to="" className="Nav-link">
                    Sair
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
