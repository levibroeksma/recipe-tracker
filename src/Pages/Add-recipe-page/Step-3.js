import "./Add-recipe-page.css"

import Button from "../../components/Button/Button";
import AddDirections from "../../components/AddDirections/AddDirections";
import {useHistory} from "react-router-dom";

function AddRecipeStep3() {
    const history = useHistory();
    const nextStep = () => {
        history.push("step-4");
    }
    const previousStep = () => {
        history.push("step-2");
    }
    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <h2>Add directions</h2>
                    <div className="add-ingredient-wrapper">
                        <AddDirections/>
                    </div>
                </div>
            </div>

            <div className="page-wrapper">
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

export default AddRecipeStep3;