import {NavLink, Link} from "react-router-dom";
import {useState, useContext} from "react";
import {authContext} from "../../contexts/AuthContext";
import './Header.css';

export default function Header({logo}) {

    const [navScrolled, setNavScrolled] = useState(false);
    const {isTokenValid} = useContext(authContext);
    const changeMenuSize = () => {
        if(window.scrollY >= 1) {
            setNavScrolled(true);
        } else {
            setNavScrolled(false);
        }
    }
    window.addEventListener("scroll", changeMenuSize);

    const { logout } = useContext(authContext);

    return (
        <header className={navScrolled ? 'header scrolled' : 'header'}>
            <div className="header-holder">
                <div className="logo-holder">
                    <Link to="/">
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
                                <NavLink exact to="/recipes" activeClassName="active">
                                    Recipe's
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/about-us" activeClassName="active">
                                    About us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/contact" activeClassName="active">
                                    Contact
                                </NavLink>
                            </li>

                            {!isTokenValid() ? (
                                <li>
                                    <NavLink exact to="/sign-in" activeClassName="active">
                                        Sign in
                                    </NavLink>
                                </li>
                                )
                                :
                                (
                                    <>
                                        <li>
                                            <NavLink exact to="/my-account" activeClassName="active" id="my-account">
                                                My account
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/" activeClassName="active" onClick={logout}>
                                                Log out
                                            </NavLink>
                                        </li>
                                    </>
                                )}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}