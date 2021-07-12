import {Link, useHistory, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import "./RecipeDetailPage.css"
import LeaveComment from "../../components/Leave-comment/Leave-comment";
import AverageRating from "../../components/AverageRating/AverageRating";
import Comment from "../../components/Comment/Comment";

export default function RecipeDetailPage() {
    const [currentRecipe, setCurrentRecipe] = useState([]);
    const { id } = useParams();
    const history = useHistory();
    const [blobRecipeImage, setBlobRecipeImage] = useState();

    async function fetchAllRecipes() {
        try {
            const response = await axios.get(`http://localhost:8080/api/recipes/${id}`);
            setCurrentRecipe(response.data)
            // console.log("all recipes in async: ", currentRecipe)

        } catch (error) {}
    }

    async function fetchRecipeImage() {
        try {
            const result = await axios.get(`http://localhost:8080/api/recipes/${id}/fileName`, {
                responseType: 'blob',
            });
            console.log(result.data)
            const imageUrl = result.data;
            setBlobRecipeImage(URL.createObjectURL(imageUrl))
        } catch (e) {
            console.error(e);
        }
    }


    console.log(currentRecipe)

    useEffect(()=>{
        fetchAllRecipes();
        fetchRecipeImage()
    },[])

    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <section className="recipe-detail-page">
                        <div className="recipe-img-holder">
                            <img src={blobRecipeImage} alt={currentRecipe.title}/>
                            <div className="country-flag">
                                {/*<img src={require(`../../assets/flags/${currentRecipe.country}.png`).default} alt={currentRecipe.country}/>*/}
                            </div>
                        </div>
                        <div className="recipe-text-holder">
                            <h1>{currentRecipe.title}</h1>
                            <article className="ingredients-holder">
                                <h2>Ingredients</h2>
                                <ul className="ingredients-list">
                                    <li>test</li>
                                </ul>
                            </article>
                            <article className="step-holder">
                                <h2>Preperations</h2>
                                <ol>
                                    <li>test</li>
                                </ol>
                                <div className="bon-apetit">
                                    <span>Bon apetit!</span>
                                </div>
                            </article>
                            <div className="account-holder">
                                <div className="account-image">

                                </div>
                                <div className="text-account">
                                    {/*<h3>{currentRecipe.username}</h3>*/}
                                    <h3>Levi Broeksma</h3>
                                </div>
                            </div>
                            <div className="recipe-nav-holder">
                                {/*<button */}
                                {/*    className="btn"*/}
                                {/*    onClick={()=>{history.push(`/recipes${currentRecipe.id - 1}`)}}*/}
                                {/*    disabled={currentRecipe.id === 1}*/}
                                {/*>*/}
                                {/*    Previous*/}
                                {/*</button>*/}
                                <button
                                    className="btn"
                                        onClick={()=>{history.push("/recipes")}}
                                >
                                    Overview
                                </button>
                                {/*<button*/}
                                {/*    className="btn"*/}
                                {/*    onClick={()=>{history.push(`/recipes/${currentRecipe.id + 1}`)}}*/}
                                {/*>*/}
                                {/*    Next*/}
                                {/*</button>*/}
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

            {/*<div className="page-wrapper">*/}
            {/*    <div className="page-wrapper-inner">*/}
            {/*        <div className="comment-wrapper">*/}
            {/*            <Comment*/}
            {/*                comment="text is coming here"*/}
            {/*                username="Levi Broeksma"*/}
            {/*            />*/}
            {/*            <Comment*/}
            {/*                comment="text is coming here"*/}
            {/*                username="Levi Broeksma"*/}
            {/*            />*/}
            {/*            <Comment*/}
            {/*                comment="text is coming here"*/}
            {/*                username="Levi Broeksma"*/}
            {/*            />*/}
            {/*            <Comment*/}
            {/*                comment="text is coming here"*/}
            {/*                username="Levi Broeksma"*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}