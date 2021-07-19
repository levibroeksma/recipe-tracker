import { useHistory, useParams} from "react-router-dom";
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
    const [countryFlag, setCountryFlag] = useState("");
    const [userFlag, setUserFlag] = useState("");

    async function fetchAllRecipes() {
        try {
            const response = await axios.get(`http://localhost:8080/api/recipes/${id}`);
            setCurrentRecipe(response.data)
        } catch (error) {}
    }

    async function fetchRecipeImage() {
        try {
            const result = await axios.get(`http://localhost:8080/api/recipes/${id}`, {
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
            const flag = result.data.country
            const flagUser = result.data.userCountry

            setCountryFlag(<img src={require(`../../assets/flags/${flag}.png`).default} alt={flag}/>)
            setUserFlag(<img src={require(`../../assets/flags/${flagUser}.png`).default} alt={flagUser}/>)
            console.log(result.data)
        } catch (e) {
            console.error(e);
        }
    }


    useEffect(()=>{
        fetchAllRecipes();
        fetchRecipeImage();
        fetchRecipeFlag();
    },[])
    console.log(currentRecipe)
    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <section className="recipe-detail-page">
                        <div className="recipe-img-holder">
                            <img src={blobRecipeImage} alt={currentRecipe.title}/>
                            <div className="country-flag">
                                {countryFlag}
                            </div>
                        </div>
                        <div className="recipe-text-holder">
                            <h1>{currentRecipe.title}</h1>
                            <article className="ingredients-holder">
                                <h2>Ingredients</h2>
                                <ul className="ingredients-list">

                                </ul>
                            </article>
                            <article className="step-holder">
                                <h2>Preperations</h2>
                                <ol>
                                </ol>
                                <div className="bon-apetit">
                                    <span>Bon apetit!</span>
                                </div>
                            </article>
                            <div className="account-holder">
                                <div className="account-image">
                                    {/*{currentRecipe.userCountry}*/}
                                    {userFlag}
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