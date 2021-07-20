import { useHistory, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import "./RecipeDetailPage.css"
import LeaveComment from "../../components/Leave-comment/Leave-comment";
import AverageRating from "../../components/AverageRating/AverageRating";
import Comment from "../../components/Comment/Comment";

export default function RecipeDetailPage() {
    const [currentRecipe, setCurrentRecipe] = useState([]);
    const [blobRecipeImage, setBlobRecipeImage] = useState();
    const [allIngredients, setAllIngredients] = useState([]);
    const [allDirections, setAllDirections] = useState([]);

    const { id } = useParams();
    const history = useHistory();

    async function fetchRecipe() {
        try {
            const response = await axios.get(`http://localhost:8080/api/recipes/${id}`);
            setCurrentRecipe(response.data)
            setAllIngredients(response.data.ingredients)
            setAllDirections(response.data.directions)
        } catch (error) {}
    }

    async function fetchRecipeImage() {
        try {
            const result = await axios.get(`http://localhost:8080/api/recipes/${id}/fileName`, {
                responseType: 'blob',
            });
            const imageUrl = result.data;
            setBlobRecipeImage(URL.createObjectURL(imageUrl))
        } catch (e) {
            console.error(e);
        }
    }

    async function fetchRecipeFlag() {
        try {
            const result = await axios.get(`http://localhost:8080/api/recipes/${id}`);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(()=>{
        fetchRecipe();
        fetchRecipeImage();
        fetchRecipeFlag();
    },[])

    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <section className="recipe-detail-page">
                        <div className="recipe-img-holder">
                            <img src={blobRecipeImage} alt={currentRecipe.title}/>
                            <div className="country-flag">
                                {currentRecipe.country ? <img src={require(`../../assets/flags/${currentRecipe.country}.png`).default} alt={currentRecipe.country}/> : ("")}
                            </div>
                        </div>
                        <div className="recipe-text-holder">
                            <h1>{currentRecipe.title}</h1>
                            <article className="ingredients-holder">
                                <h2>Ingredients</h2>
                                <ul className="ingredients-list">
                                    {allIngredients && allIngredients.map(ingredient => {
                                        return <li key={"key" + ingredient.id}>{ingredient.name}</li>
                                    })}
                                </ul>
                            </article>
                            <article className="step-holder">
                                <h2>Preperations</h2>
                                <ol>
                                    {allDirections && allDirections.map(direction => {
                                        return <li key={"key" + direction.id}>{direction.name}</li>
                                    })}
                                </ol>
                                <div className="bon-apetit">
                                    <span>Bon apetit!</span>
                                </div>
                            </article>
                            <div className="account-holder">
                                <div className="account-image">
                                    {currentRecipe.userCountry ? (<img src={require(`../../assets/flags/${currentRecipe.userCountry}.png`).default} alt={currentRecipe.userCountry}/>) : ("")}
                                </div>
                                <div className="text-account">
                                    <h3>{currentRecipe.username}</h3>
                                </div>
                            </div>
                            <div className="recipe-nav-holder">
                                <button
                                    className="btn"
                                        onClick={()=>{history.push("/recipes")}}
                                >
                                    Overview
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="page-wrapper blue">
                <div className="page-wrapper-inner">
                    <div className="recipe-text-holder">
                    <LeaveComment/>
                    <AverageRating/>
                    </div>
                </div>
            </div>

            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <div className="comment-wrapper">
                        <Comment
                            comment="text is coming here"
                            username="Levi Broeksma"
                        />
                        <Comment
                            comment="text is coming here"
                            username="Levi Broeksma"
                        />
                        <Comment
                            comment="text is coming here"
                            username="Levi Broeksma"
                        />
                        <Comment
                            comment="text is coming here"
                            username="Levi Broeksma"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}