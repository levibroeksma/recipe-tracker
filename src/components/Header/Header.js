import './Header.css';

function Header({logo, }) {
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
                                <a href="#" className="active">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Recipe's
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Account
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}





export default Header;