import "./My-account-page.css"
import Recipe from "../../components/Recipe/Recipe";
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";

function MyAccount() {
    const history = useHistory();

    const toAddRecipe = () => {
        history.push("my-account/add-recipe")
    }

    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <h1>My account</h1>
                    <Button
                        type="button"
                        onClickEvent={toAddRecipe}
                        buttonTitle="Add a new recipe"
                        classNameButton="btn"
                    />
                </div>
            </div>
            <div className="page-wrapper blue">
                <div className="page-wrapper-inner left">
                    <h2>My recipe's</h2>
                    <div className="my-recipe-wrapper">
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                    </div>
                </div>
            </div>
            <div className="page-wrapper">
                <div className="page-wrapper-inner left">
                    <h2>My favorites</h2>
                    <div className="my-recipe-wrapper">
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30 minutes"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30 minutes"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30 minutes"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30 minutes"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                        <Recipe
                            title="Pasta Bolognese"
                            kcal="475 kcal"
                            preptime="30 minutes"
                            description="A classic pasta you can get at any Italian restaurant. But just as good homemade!"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyAccount;