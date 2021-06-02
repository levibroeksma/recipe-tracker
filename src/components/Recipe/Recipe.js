import React from "react";
import './Recipe.css';

function Recipe( {imagecountry, title, preptimeimage, preptime, kcalimage, kcal, description} ) {
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
                        <img src={imagecountry} alt={title}/>
                        <span>Mexican</span>
                    </div>
                    <div className="prep-time-holder">
                        <img src={preptimeimage} alt="prep time"/>
                        <span>{preptime}</span>
                    </div>
                    <div className="kcal-holder">
                        <img src={kcalimage} alt="kcal count"/>
                        <span>{kcal}</span>
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