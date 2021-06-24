import {NavLink, Link} from "react-router-dom";
import {useState, useContext} from "react";
import {HiSearch} from "react-icons/hi";
import {authContext} from "../../contexts/AuthContext";
import './Header.css';

function Header({logo}) {

    const [navScrolled, setNavScrolled] = useState(false);
    const changeMenuSize = () => {
        if(window.scrollY >= 1) {
            setNavScrolled(true);
        } else {
            setNavScrolled(false);
        }
    }
    window.addEventListener("scroll", changeMenuSize);

    const {
        logout,
        authState: { user },
    } = useContext(authContext);

    return (
        <header className={navScrolled ? 'header scrolled' : 'header'}>

            <div className="header-holder">
                <div className="logo-holder">
                    <Link exact to="/">
                        <img src={logo} alt="Recipe tracker"/>
                    </Link>
                </div>
                <div className="search-bar-holder">
                    <div className="search-bar">
                        <input
                            type="text"
                            id="searchbar"
                            placeholder="search..."/>
                        <HiSearch className="searchIcon"/>
                    </div>
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

                            {!user ? (
                                    <li>
                                        <NavLink to="/signin" activeClassName="active">
                                            Sign in
                                        </NavLink>
                                    </li>
                                )
                                :
                                (
                                    <>
                                        <li>
                                            <NavLink to="/my-account" activeClassName="active" id="my-account">
                                                My account
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="" activeClassName="active" onClick={logout}>
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

export default Header;