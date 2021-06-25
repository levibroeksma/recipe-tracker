import React from "react";
import './Recipe.css';
import {Link} from "react-router-dom";
import mexico from "../../assets/mexico.png"
import cookTime from "../../assets/clock.png"
function Recipe( { title, preptime, kcalimage, kcal, description} ) {
    return(
        <section className="recipe-holder">
            <Link to="#" className="recipe-link">
                <div className="img-holder">
                        <img src="//via.placeholder.com/275x120" alt=""/>
                </div>
                <div className="spec-holder">
                    <div className="country-holder">
                        <img src={mexico} alt={title}/>
                        <span>Mexican</span>
                    </div>
                    <div className="prep-time-holder">
                        <img src={cookTime} alt="prep time"/>
                        <span>{preptime} min</span>
                    </div>
                </div>
                <div className="text-holder">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </Link>
        </section>
    )
}

export default Recipe;