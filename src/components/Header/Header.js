import './Header.css';
import {NavLink} from "react-router-dom";

function Header({logo, }) {
    // const history = useHistory();
    return (
        <header>
            <div className="header-holder">
                <div className="logo-holder">
                    <img src={logo} alt="Recipe tracker"/>
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