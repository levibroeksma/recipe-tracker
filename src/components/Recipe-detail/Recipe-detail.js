import './Recipe-detail.css'
import {Link} from "react-router-dom";

export default function RecipeDetail({title, ingredient, country, direction, username}) {
    return (
        <section className="recipe-detail-page">
            <div className="recipe-img-holder">
                {/*<img src="//via.placeholder.com/1280x275" alt="test"/>*/}
                <div className="country-flag">
                    <img src={country} alt="{country}"/>
                </div>
            </div>
            <div className="recipe-text-holder">
                <h1>{title}</h1>
                <article className="ingredients-holder">
                    <h2>Ingredients</h2>
                    <ul className="ingredients-list">
                        <li>{ingredient}</li>
                    </ul>
                </article>
                <article className="step-holder">
                    <h2>Directions</h2>
                    <ol>
                        <li>{direction}</li>
                    </ol>
                    <div className="bon-apetit">
                        <span>Bon apetit!</span>
                    </div>
                </article>
                <div className="account-holder">
                    <div className="account-image"></div>
                    <div className="text-account">
                        <h3>{username}</h3>
                        <Link href="#" className="link-account">See other recipe's...</Link>
                    </div>
                </div>
                <div className="recipe-nav-holder">
                    {/*<button className="btn">Previous</button>*/}
                    <button className="btn">Overview</button>
                    {/*<button className="btn">Next</button>*/}
                </div>
            </div>
        </section>
    )
}
