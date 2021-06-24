import "./Add-recipe-page.css"
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";


function Step1() {
    const history= useHistory();
    const {handleSubmit, register, formState: { errors }} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        history.push("step-2")
    }
    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <h1>Upload your own recipe</h1>
                    <form onSubmit={handleSubmit(onSubmit)} id="newRecipeForm">
                        <Input
                            name="recipeTitle"
                            labelId="recipeTitleId"
                            register={register}
                            errors={errors}
                            placeholder="Recipe title"
                            maxLength={50}
                            maxLengthError="You can't use more than 50 characters"
                            required={true}
                            requiredError="Required."
                        />
                        <Textarea
                            name="recipeCaption"
                            labelId="recipeCaptionId"
                            register={register}
                            errors={errors}
                            placeholder="Enter a caption for this recipe."
                            maxLength={100}
                            maxLengthError="You can't use more than 100 characters"
                            required={true}
                            requiredError="Required."
                        />
                        <Button
                            classNameButton="btn"
                            buttonTitle="Save and continue"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Step1;