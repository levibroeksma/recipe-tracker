import AddDirections from "../../components/AddDirections/AddDirections";
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import AddIngredients from "../../components/AddIngredients/AddIngredients";

function AddRecipeStep2() {
    const history= useHistory();

    const nextStep = () => {
        history.push("step-3")
    }
    const previousStep = () => {
        history.push("/my-account/add-recipe");
    }

    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <h1>Add a new recipe</h1>
                    <div className="add-ingredient-wrapper">
                        <AddIngredients/>
                    </div>
                </div>
            </div>
            <div className="page-wrapper blue">
                <div className="page-wrapper-inner">
                    <div className="button-wrapper">
                        <Button
                            classNameButton="btn cancel"
                            buttonTitle="Previous step"
                            type="submit"
                            onClickEvent={previousStep}
                        />
                        <Button
                            classNameButton="btn"
                            buttonTitle="Save and continue"
                            type="submit"
                            onClickEvent={nextStep}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddRecipeStep2;