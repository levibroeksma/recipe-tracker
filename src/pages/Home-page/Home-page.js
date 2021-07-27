import "./Home-page.css"
import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import RecipeImage from "../../components/Recipe/RecipeImage";
import cookTime from "../../assets/clock.png";

export default function HomePage() {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(8);

    async function fetchAllRecipes() {
        try {
            const response = await axios.get(`http://localhost:8080/api/recipes`);
            const data = response.data;
            const slice = data.slice(offset, offset + perPage)

            setData(slice);
        } catch (error) {}
    }

    useEffect(()=>{
        fetchAllRecipes();
    },[offset])


    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <h1>Welcome to <img src={require('../../logo.svg').default} alt="logo RecipeTracker"/></h1>
                    <div className="welcome-text">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                    </div>
                </div>
            </div>
            <div className="page-wrapper blue">
                <div className="page-wrapper-inner">
                    <h2 className="h2-left">Latest recipe's</h2>

                    <div className="recipe-page-wrapper">
                        {data && data.map((recipe) => {
                            return <section className="recipe-holder" key={recipe.id}>
                                <Link to={`recipes/${recipe.id}`} className="recipe-link">
                                    <div className="img-holder">
                                        <RecipeImage
                                            recipeId={recipe.id}
                                        />
                                    </div>
                                    <div className="spec-holder">
                                        <div className="country-holder">
                                            {recipe.country !== "" ?
                                                (<img src={require(`../../assets/flags/${recipe.country}.png`).default}
                                                      alt={recipe.country}/>)
                                                :
                                                (<img src="//via.placeholder.com/60x60" alt="placeholder"/>)}
                                            <span>{recipe.country}</span>
                                        </div>
                                        <div className="prep-time-holder">
                                            <img src={cookTime} alt="prep time"/>
                                            <span>{recipe.cookingtime} min</span>
                                        </div>
                                    </div>
                                    <div className="text-holder">
                                        <h2>{recipe.title}</h2>
                                        <p>{recipe.description}</p>
                                    </div>
                                </Link>
                            </section>
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}