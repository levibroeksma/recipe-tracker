import "./Add-recipe-page.css"
import {useForm} from "react-hook-form";
import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import FlagSelector from "../../components/CountryFlagSelector/FlagSelector";

function AddRecipeStep4() {
    const {handleSubmit, register, formState: { errors }} = useForm();
    const history = useHistory();

    const onSubmit = (data) => {
        console.log(data)
        nextStep();
    }

    const nextStep = () => {
        history.push("step-5");
    }

    const previousStep = () => {
        history.push("step-3");
    }

    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <h1>Additional details</h1>
                    <form onSubmit={handleSubmit(onSubmit)} id="recipe-detail-form">
                        <FlagSelector
                            id="country-flag-choice"
                            name="country-flag-choice"
                            placeholder="Country of origin"
                            required={true}
                            errors={errors}
                            requiredError="Required."
                            register={register}
                        />
                        <Input
                            register={register}
                            errors={errors}
                            required={true}
                            requiredError="Required."
                            labelId="prepTimeId"
                            name="prepTime"
                            placeholder="Preperation time in minutes"
                            type="number"
                        />
                        <Input
                            register={register}
                            errors={errors}
                            labelId="kcalId"
                            name="kcal"
                            placeholder="Ammount of calories"
                            type="number"
                        />
                        <div className="checkbox-wrapper">
                            <div className="checkbox-wrapper-inner">
                                <Checkbox
                                    labelTitle="Vegetarian"
                                    name="vegetarian"
                                    labelId="vegetarianId"
                                    required={false}
                                    register={register}
                                    errors={errors}
                                />
                                <Checkbox
                                    labelTitle="Vegan"
                                    name="vegan"
                                    labelId="veganId"
                                    required={false}
                                    register={register}
                                    errors={errors}
                                />
                                <Checkbox
                                    labelTitle="Fish"
                                    name="fish"
                                    labelId="fishId"
                                    required={false}
                                    register={register}
                                    errors={errors}
                                />
                                <Checkbox
                                    labelTitle="Beef"
                                    name="beef"
                                    labelId="beefId"
                                    required={false}
                                    register={register}
                                    errors={errors}
                                />
                                <Checkbox
                                    labelTitle="Pork"
                                    name="pork"
                                    labelId="porkId"
                                    required={false}
                                    register={register}
                                    errors={errors}
                                />
                                <Checkbox
                                    labelTitle="Lamb"
                                    name="lamb"
                                    labelId="lambId"
                                    required={false}
                                    register={register}
                                    errors={errors}
                                />
                                <Checkbox
                                    labelTitle="Spicy"
                                    name="spicy"
                                    labelId="spicyId"
                                    required={false}
                                    register={register}
                                    errors={errors}
                                />
                            </div>
                        </div>
                        <div className="button-wrapper">
                            <Button
                                classNameButton="btn cancel"
                                buttonTitle="Previous step"
                                type="button"
                                onClickEvent={previousStep}
                            />
                            <Button
                                classNameButton="btn"
                                buttonTitle="Save and continue"
                                type="submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddRecipeStep4;