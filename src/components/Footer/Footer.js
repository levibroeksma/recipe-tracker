import './Footer.css';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";

function Footer() {

    const mail = <FontAwesomeIcon icon={faEnvelope}/>
    const phone = <FontAwesomeIcon icon={faPhone}/>

    return (
        <footer>
            <div className="footer-position-holder">
                <div className="main-footer">
                    <section className="footer-section">
                        <div className="h2">Recepten</div>
                        <ul className="link-holder">

                        </ul>
                    </section>
                    <section className="footer-section">
                        <div className="h2">Other</div>
                        <ul className="link-holder">
                            <li><Link to="/recipes">Recipe's</Link></li>
                            <li><Link to="/about-us">About us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/account">Account</Link></li>
                        </ul>
                    </section>
                    <section className="footer-section">
                        <div className="h2">Contact</div>
                        <span>RecipeTracker</span>
                        <a href="mailto:info@recipetracker.com" className="mail">{mail}info@recipetracker.com</a>

                        <a href="tel:+31123456789" className="phone-number"><strong>{phone}</strong> + 31 (0) 12 345 67 89</a>
                    </section>
                </div>
            </div>
            <div className="copyright-bar">
                <span>RecipeTracker ©</span>
                <span className="seperator">|</span>
                <span>All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer;