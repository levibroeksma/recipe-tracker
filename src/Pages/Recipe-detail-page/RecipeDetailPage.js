import { useHistory, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import "./RecipeDetailPage.css"
import LeaveComment from "../../components/Leave-comment/Leave-comment";
import Button from "../../components/Button/Button";
import {FaTrash} from "react-icons/fa";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {authContext} from "../../contexts/AuthContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function RecipeDetailPage() {
    const [currentRecipe, setCurrentRecipe] = useState([]);
    const [blobRecipeImage, setBlobRecipeImage] = useState();
    const [allIngredients, setAllIngredients] = useState([]);
    const [allDirections, setAllDirections] = useState([]);
    const [allReviews, setAllReviews] = useState([]);

    const [hasReviewed, setHasReviewed] = useState("");

    const {user, isTokenValid} = useContext(authContext);
    const star = <FontAwesomeIcon icon={faStar}/>

    const { id } = useParams();
    const history = useHistory();

    async function fetchRecipe() {
        try {
            const response = await axios.get(`http://localhost:8080/api/recipes/${id}`);
            setHasReviewed(false)
            setCurrentRecipe(response.data)
            setAllIngredients(response.data.ingredients)
            setAllDirections(response.data.directions)
            setAllReviews(response.data.reviews.sort((a,b) => {
                if (a.id > b.id) {return -1}
                if (a.id < b.id) {return 1}
                return 0;
            }))
        } catch (error) {
            console.error('Something went wrong', error)
        }
    }

    async function fetchRecipeImage() {
        try {
            const token = localStorage.getItem("token");
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
            const token = localStorage.getItem("token");
            const result = await axios.get(`http://localhost:8080/api/recipes/${id}`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
        } catch (e) {
            console.error(e);
        }
    }

    async function deleteReview(review) {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.delete(`http://localhost:8080/api/reviews/${review.id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                })
        } catch (error) {
            console.error("You couldn't delete this review", error);
        }
        window.location.reload(false)
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
            {isTokenValid() ? (

                <>
                    <div className="page-wrapper blue">
                        <div className="page-wrapper-inner">
                            <div className="recipe-text-holder">
                                <LeaveComment
                                    recipeId={id}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )
                :
            (<></>)}
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <div className="comment-wrapper">

                        {allReviews && allReviews.map(review => {
                            return <section className="comment-holder" key={"key" + review.id}>
                                {user && user.authority === "ADMIN" && isTokenValid() &&
                                (
                                    <div className="delete-button">
                                        <Button
                                            type="submit"
                                            buttonTitle={<FaTrash/>}
                                            classNameButton="btn delete-comment"
                                            onClickEvent={() => deleteReview(review)}
                                        />
                                    </div>
                                )
                                }
                                <div className="text-holder">
                                    <p>{review.review}</p>
                                </div>
                                <div className="bottom-wrap">
                                    <div className="account-comment-holder">
                                        <div className="account-comment-image">
                                            {review.userCountry ?
                                                (
                                                    <img
                                                        src={require(`../../assets/flags/${review.userCountry}.png`).default}
                                                        alt={review.userCountry}
                                                    />
                                                ) :
                                                ("")
                                            }

                                        </div>
                                        <div className="account-comment-text">
                                            <h3>{review.username}</h3>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <div className="star-holder">
                                            {review.stars === 1 &&
                                            <div className="star-holder-one">
                                                {star}{star}{star}{star}{star}
                                            </div>
                                            }
                                            {review.stars === 2 &&
                                            <div className="star-holder-two">
                                                {star}{star}{star}{star}{star}
                                            </div>
                                            }
                                            {review.stars === 3 &&
                                            <div className="star-holder-three">
                                                {star}{star}{star}{star}{star}
                                            </div>
                                            }
                                            {review.stars === 4 &&
                                            <div className="star-holder-four">
                                                {star}{star}{star}{star}{star}
                                            </div>
                                            }
                                            {review.stars === 5 &&
                                            <div className="star-holder-five">
                                                {star}{star}{star}{star}{star}
                                            </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </section>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}