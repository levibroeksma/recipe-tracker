import "./Add-recipe-page.css"
import {useForm} from "react-hook-form";
import Input from "../../components/Input/Input";
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/Button/Button";

function AddRecipeStep4() {
    const {handleSubmit, register, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <h2>Additional details</h2>
                    <form onSubmit={handleSubmit(onSubmit)} id="recipe-detail-form">
                        <Input
                            register={register}
                            errors={errors}
                            required={true}
                            requiredError="Required."
                            labelId="countryId"
                            name="country"
                            placeholder="Country of origin"
                            type="text"
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
                            required={true}
                            requiredError="Required."
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
                        <Button
                            type="submit"
                            buttonTitle="Save recipe"
                            classNameButton="btn"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddRecipeStep4;