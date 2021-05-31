import './Header.css';
import {NavLink, Link} from "react-router-dom";
import {useState} from "react";

function Header({logo, }) {
    // const history = useHistory();
    const [navScrolled, setNavScrolled] = useState(false);

    const changeMenuSize = () => {
        if(window.scrollY >= 40) {
            setNavScrolled(true);
        } else {
            setNavScrolled(false);
        }
    }

    window.addEventListener("scroll", changeMenuSize);

    return (
        <header className={navScrolled ? 'header scrolled' : 'header'}>
            <div className="header-holder">
                <div className="logo-holder">
                    <Link exact to="/">
                        <img src={logo} alt="Recipe tracker"/>
                    </Link>
                </div>
                <div className="nav-holder">
                    <nav>
                        <ul>
                            <li>
                                <NavLink exact to="/" activeClassName="active">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/recipes" activeClassName="active">
                                    Recipe's
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about-us" activeClassName="active">
                                    About us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" activeClassName="active">
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/account" activeClassName="active">
                                    Account
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}





export default Header;