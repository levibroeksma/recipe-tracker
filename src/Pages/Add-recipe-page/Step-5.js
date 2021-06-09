import "./Add-recipe-page.css"
import Dropzone from "../../components/Dropzone/Dropzone";
import {useHistory} from "react-router-dom";
import Button from "../../components/Button/Button";

function AddRecipeStep5() {
    const history = useHistory();
    const previousStep = () => {
        history.push("step-4");
    }

    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <h1>Upload an image</h1>
                    <div className="file-upload-wrapper">
                        <Dropzone />
                    </div>
                    <div className="button-wrapper">
                        <Button classNameButton="btn cancel" buttonTitle="Previous step" type="button" onClickEvent={previousStep}/>
                        <Button classNameButton="btn" buttonTitle="Save recipe" type="button"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddRecipeStep5;