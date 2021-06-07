import React from "react";
import './Recipe.css';
import mexico from "../../assets/mexico.png"
import cookTime from "../../assets/clock.png"
import kcalImg from "../../assets/meal.png"
function Recipe( { title, preptime, kcalimage, kcal, description} ) {
    return(
        <section className="recipe-holder">
            <a href="#" className="recipe-link">
                <div className="img-holder">
                    <a href="#">
                        <img src="//via.placeholder.com/275x120" alt=""/>
                    </a>
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
                    <div className="kcal-holder">
                        <img src={kcalImg} alt="kcal count"/>
                        <span>{kcal} kcal</span>
                    </div>
                </div>
                <div className="text-holder">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </a>
        </section>
    )
}

export default Recipe;