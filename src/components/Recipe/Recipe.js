import React from "react";
import './Recipe.css';
import {Link} from "react-router-dom";
import cookTime from "../../assets/clock.png"
import RecipeImage from "./RecipeImage";

export default function Recipe( { title, preptime, description, country, link} ) {

    return(
        <section className="recipe-holder">
            <Link to={link} className="recipe-link">
                <div className="img-holder">
                    <RecipeImage

                    />
                </div>
                <div className="spec-holder">
                    <div className="country-holder">
                        {country !== "" ?
                            (<img src={require(`../../assets/flags/${country}.png`).default} alt={country}/>)
                            :
                            (<img src="//via.placeholder.com/60x60" alt="placeholder"/>)}
                        <span>{country}</span>
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