import {useContext, useState} from "react";
import Button from "../../components/Button/Button";
import FlagSelector from "../../components/CountryFlagSelector/FlagSelector";
import axios from "axios";
import {TiDelete} from "react-icons/ti"
import {useFieldArray, useForm} from "react-hook-form";
import {authContext} from "../../contexts/AuthContext";
import "./Add-recipe-page.css"
import {useHistory} from "react-router-dom";
import Input from "../../components/Input/Input";

export default function AddRecipe() {

    const {user} = useContext(authContext);

    const [step, setStep] = useState(1);
    const {handleSubmit, register, formState: {errors}} = useForm({mode: "onBlur"});
    const { control } = useForm();
    const { fields, append, remove } = useFieldArray({
            control,
            name: "ingredients"
        }, {control, name:"directions"});

    const history = useHistory();

    async function onSubmit(data) {
        try {
            const formData = new FormData();
            formData.append("file", data.file[0]);
            formData.append("title", data.title);
            formData.append("description", data.description);
            formData.append("country", data.country);
            formData.append("cookingTime", data.cookingTime);
            formData.append("calories", data.calories);
            formData.append("beef", data.beef);
            formData.append("fish", data.fish);
            formData.append("pork", data.pork);
            formData.append("lamb", data.lamb);
            formData.append("vegan", data.vegan);
            formData.append("vegetarian", data.vegetarian);
            formData.append("spicy", data.spicy);
            formData.append("username", user.username);

            const response = await axios.post('http://localhost:8080/api/recipes',
                formData,
            )
            console.log(data)
            history.push("/recipe-uploaded");
        } catch (e) {
            console.error("Something went wong" , e);
        }
    }

    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Add your recipe</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="new-recipe-form">
                    {step === 1 && (
                        <div>
                            <label>
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    {...register("file")}
                                />
                            </label>
                        </div>

                    )}
                    {step === 2 && (
                        <>
                            <label id="titleLabel" htmlFor="title">
                                <input
                                    className="textInput"
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Title..."
                                    {...register("title")}
                                    required
                                />
                                {errors.title && errors.title.type === "required" && <span className="errorMessage">Required.</span>}
                                {/*<Input*/}
                                {/*    labelId="titleLabel"*/}
                                {/*    name="title"*/}
                                {/*    type="text"*/}
                                {/*    placeholder="Title..."*/}
                                {/*    register={register}*/}
                                {/*    errors={errors}*/}
                                {/*    required={true}*/}
                                {/*    requiredError="Required."*/}
                                {/*/>*/}

                            </label>
                            <label htmlFor="description">
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder="Description.."
                                    {...register("description")}
                                />
                                {errors.description && errors.description.type === "required" && <span className="errorMessage">Required</span>}
                            </label>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            { fields.map(({ id }, index) => {

                                return (
                                    <div className="ingredient-input-holder" key={id}>
                                        <label htmlFor={`ingredients[${index}].ingredient`}>
                                            <input
                                                className="textInput"
                                                name={`ingredients[${index}].ingredient`}
                                                {...register(`ingredients[${index}].ingredient`)}
                                            />
                                        </label>
                                        <Button
                                            type="button"
                                            classNameButton="btn remove"
                                            buttonTitle={<TiDelete />}
                                            onClickEvent={() => remove(index)}
                                        />

                                    </div>
                                );
                            })}

                            <Button
                                type="button"
                                classNameButton="btn"
                                onClickEvent={() => append({})}
                                buttonTitle="Add an ingredient"
                            />
                        </>
                    )}
                    {step === 4 && (
                        <>
                            { fields.map(({ id }, index) => {
                                return (
                                    <div key={id}>
                                        <div className="direction-input-holder">
                                            <label htmlFor={`directions[${index}].direction`}>
                                <textarea
                                    name={`directions[${index}].direction`}
                                    {...register(`directions[${index}].direction`)}
                                />
                                            </label>
                                            <Button
                                                type="button"
                                                classNameButton="btn"
                                                buttonTitle={<TiDelete />}
                                                onClickEvent={() => remove(index)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                            <Button
                                type="button"
                                classNameButton="btn"
                                onClickEvent={() => append({})}
                                buttonTitle="Add an directions"
                            />
                        </>
                    )}
                    {step === 5 && (
                        <>
                            <label htmlFor="country" className="details">
                                <input
                                    list="country"
                                    placeholder="Country of origin"
                                    className="textInput"
                                    name="country"
                                    {...register("country")}
                                />
                            </label>
                            <FlagSelector/>
                            <label htmlFor="cookingTime" className="details">
                                <input
                                    type="number"
                                    className="textInput"
                                    placeholder="Cooking time in minutes"
                                    name="cookingTime"
                                    {...register("cookingTime")}
                                    required
                                />
                            </label>
                            <label htmlFor="calories" className="details">
                                <input
                                    type="number"
                                    className="textInput"
                                    placeholder="Calories"
                                    name="calories"
                                    {...register("calories")}
                                />
                            </label>
                            <div className="checkbox-wrapper">
                                <div className="checkbox-wrapper-inner">
                                    <label htmlFor="vegetarian">
                                        <input
                                            type="checkbox"
                                            name="vegetarian"
                                            {...register("vegetarian")}
                                        /> Vegetarian
                                    </label>
                                    <label htmlFor="vegan">
                                        <input
                                            type="checkbox"
                                            name="vegan"
                                            {...register("vegan")}
                                        /> Vegan
                                    </label>
                                    <label htmlFor="beef">
                                        <input
                                            type="checkbox"
                                            name="beef"
                                            {...register("beef")}
                                        /> Beef
                                    </label>
                                    <label htmlFor="fish">
                                        <input
                                            type="checkbox"
                                            name="fish"
                                            {...register("fish")}
                                        /> Fish
                                    </label>
                                    <label htmlFor="pork">
                                        <input
                                            type="checkbox"
                                            name="pork"
                                            {...register("pork")}
                                        /> Pork
                                    </label>
                                    <label htmlFor="lamb">
                                        <input
                                            type="checkbox"
                                            name="lamb"
                                            {...register("lamb")}
                                        /> Lamb
                                    </label>
                                    <label htmlFor="spicy">
                                        <input
                                            type="checkbox"
                                            name="spicy"
                                            {...register("spicy")}
                                        /> Spicy
                                    </label>
                                </div>
                            </div>
                        </>
                    )}

                    {step <= 4 ? (
                        <>
                            <div className="button-wrapper">
                                <Button
                                    onClickEvent={() => setStep(step - 1)}
                                    buttonTitle="Previous step"
                                    classNameButton="btn"
                                    disabled={step === 1}
                                />
                                <Button
                                    onClickEvent={() => setStep(step + 1)}
                                    buttonTitle="Next step"
                                    classNameButton="btn"
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="button-wrapper submit">
                                <Button
                                    onClickEvent={() => setStep(step - 1)}
                                    buttonTitle="Previous step"
                                    classNameButton="btn"
                                    disabled={step === 1}

                                />
                                <Button
                                    buttonTitle="Save recipe"
                                    classNameButton="btn"
                                    type="submit"
                                />
                            </div>
                        </>
                    )}
                </form>

            </div>
        </div>
    );
}