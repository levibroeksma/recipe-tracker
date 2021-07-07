import {useAddRecipe} from "../../contexts/AddRecipeProvider";
import axios from "axios";
import {authContext} from "../../contexts/AuthContext";
import {useContext} from "react";

export default function Step5() {
    const { user } = useContext(authContext);
    const { handleSubmit, watch } = useAddRecipe();
    const {title, description, ingredients,directions, countryFlags, beef, fish, lamb, pork, vegan, vegetarian, spicy} = watch();

    async function onSubmit(data) {
        console.log("ALLE DATA?", data);
        try {
            const response = await axios.post("http://localhost:8080/api/recipes", {
                title: data.title,
                description: data.description,
                username: user.username,
                country: data.countryFlags
            });
            console.log("DIT IS DE RESPONSE LOG", response)
        } catch (error) {
            alert(`Something went wrong, please check if you have filled out all the required fields: ${error}`)
        }
    }

    // async function onSubmit(data) {
    //     console.log("DATA VAN DE GEBRUIKER??", data);
    //     try {
    //         setLoading(true);
    //         const response = await axios.post("http://localhost:8080/users", {
    //             email: data.email,
    //             password: data.password,
    //             username: data.username,
    //             firstName: data.firstName,
    //             lastName: data.lastName,
    //             newsLetter: data.newsLetter,
    //         });
    //         const postRole = await axios.post(`http://localhost:8080/users/${data.username}/authorities`, {
    //             username: data.username,
    //             authority: "USER"
    //         })
    //         console.log("Dit is de response log: " + response);
    //         setSucces(true);
    //         setTimeout(() => history.push("/signin"), 1000);
    //     } catch (error) {
    //         alert(`Something went wrong, registration failed ${error}`)
    //     }
    //     setLoading(false);
    // }

    const flag = require(`../../assets/flags/${countryFlags}.png`).default


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="new-recipe-form">
                <div className="preview-wrapper">
                    <div className="header-preview">
                        <img src={flag} alt="flag"/>
                        <div className="title-wrapper">
                            <h2>{title}</h2>
                            <h3>{description}</h3>
                        </div>
                    </div>
                    <div className="boolean-wrapper">
                        <span>{beef === true ? "Beef" : ""}</span>
                        <span>{fish === true ? "Fish" : ""}</span>
                        <span>{pork === true ? "Pork" : ""}</span>
                        <span>{lamb === true ? "Lamb" : ""}</span>
                        <span>{vegan === true ? "Vegan" : ""}</span>
                        <span>{vegetarian === true ? "Vegetarian" : ""}</span>
                        <span>{spicy === true ? "Spicy" : ""}</span>
                    </div>
                </div>
                <div className="step-holder-preview">
                    <div className="step-holder-preview-inner">
                        <h3>Ingredients</h3>
                        <ul className="ingredients-overview">
                            {ingredients?.map((ingredient, index) => {
                                let ingredientList = ingredient?.ingredient;
                                if (ingredientList.length !== 0) {
                                    return <li key={"ing" + index}>{ingredientList}</li>;
                                }
                            })}
                        </ul>
                    </div>
                    <div className="step-holder-preview-inner">
                        <h3>Directions</h3>
                        <ol className="directions-overview">
                            {directions?.map((direction, index) => {
                                let directionList = direction?.direction;
                                if (directionList.length !== 0) {
                                return <li key={"ing" + index}>{directionList}</li>;
                                }
                            })}
                        </ol>
                    </div>
                </div>
                <button type="submit" className="btn">Add my recipe</button>
            </form>
        </>
    )
}