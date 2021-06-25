import React from "react";
import { useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateActions from "./updateActions";
import Input from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button/Button";

function Step1New() {
    const {state, action} = useStateMachine(updateActions)
    const {handleSubmit, errors, register} = useForm({
        defaultValues: state.yourRecipe
    });
    const history = useHistory();
    function onSubmit(data) {
        action(data);
        history.push("/step2new");
    }

    return (
        <>
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
        </>
    )
}

export default Step1New;