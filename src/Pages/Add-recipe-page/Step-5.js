import "./Add-recipe-page.css"
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import Button from "../../components/Button/Button";

function AddRecipeStep5() {
    const {handleSubmit, register, formState: { errors }} = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        console.log(data)
    }

    const previousStep = () => {
        history.push("step-4");
    }

    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <h2>Upload an image</h2>

                    <div className="file-upload-wrapper">

                    </div>

                    <Button
                        classNameButton="btn cancel"
                        buttonTitle="Previous step"
                        type="submit"
                        onClickEvent={previousStep}
                    />
                </div>
            </div>
        </>
    )
}

export default AddRecipeStep5;