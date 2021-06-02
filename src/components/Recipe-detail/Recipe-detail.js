import mexico from "../../assets/mexico.png";
import './Recipe-detail.css'

function RecipeDetail() {
    return (
        <section className="recipe-detail-page">
            <div className="recipe-img-holder">
                <img src="//via.placeholder.com/1280x275" alt=""/>
                <button className="favorite">&#60;3</button>
                <div className="country-flag">
                    <img src={mexico} alt="Mexico"/>
                </div>
            </div>
            <div className="recipe-text-holder">
                <h1>Chipotle Chicken Taco’s with blue corn tortilla’s</h1>
                <article className="ingredients-holder">
                    <h2>Ingredients</h2>
                    <ul className="ingredients-list">
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quo.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quo.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quo.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quo.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quo.</li>
                    </ul>
                </article>
                <article className="step-holder">
                    <h2>Preperations</h2>

                    <ol>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad eius eligendi fugit porro quod rerum sed sequi! Accusantium ad aliquid assumenda aut cum dignissimos distinctio earum esse est excepturi fuga id incidunt, iure maiores optio quia sapiente similique, velit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad eius eligendi fugit porro quod rerum sed sequi! Accusantium ad aliquid assumenda aut cum dignissimos distinctio earum esse est excepturi fuga id incidunt, iure maiores optio quia sapiente similique, velit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad eius eligendi fugit porro quod rerum sed sequi! Accusantium ad aliquid assumenda aut cum dignissimos distinctio earum esse est excepturi fuga id incidunt, iure maiores optio quia sapiente similique, velit.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad eius eligendi fugit porro quod rerum sed sequi! Accusantium ad aliquid assumenda aut cum dignissimos distinctio earum esse est excepturi fuga id incidunt, iure maiores optio quia sapiente similique, velit.</li>
                    </ol>

                    <div className="bon-apetit">
                        <span>Bon apetit!</span>
                    </div>
                </article>
                <div className="account-holder">
                    <div className="account-image"></div>
                    <div className="text-account">
                        <h3>Mariá Rodriquez</h3>
                        <span className="caption">
                                Home cook &#8226; Mom
                            </span>
                        <a href="#" className="link-account">See other recipe's...</a>
                    </div>
                </div>
                <div className="recipe-nav-holder">
                    <button className="btn">Previous</button>
                    <button className="btn">Overview</button>
                    <button className="btn">Next</button>
                </div>
            </div>
        </section>
    )
}

export default RecipeDetail;