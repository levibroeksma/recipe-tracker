import {useAddRecipe} from "../../contexts/AddRecipeProvider";

export default function Step5() {
    const { handleSubmit, watch } = useAddRecipe();
    const {title, description, ingredients,directions, countryFlags, beef, fish, lamb, pork, vegan, vegetarian, spicy} = watch();

    function onSubmit(data) {
        console.log("ALLE DATA?", data);
    }

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