import {useContext, useState} from "react";
import axios from "axios";
import {TiDelete} from "react-icons/ti"
import {useHistory} from "react-router-dom";
import {useFieldArray, useForm} from "react-hook-form";
import {IoMdCloudUpload} from "react-icons/io"

import Button from "../../components/Button/Button";
import FlagSelector from "../../components/CountryFlagSelector/FlagSelector";
import {authContext} from "../../contexts/AuthContext";
import "./Add-recipe-page.css"

export default function AddRecipe() {
    const {user} = useContext(authContext);
    const history = useHistory();
    const [step, setStep] = useState(1);
    const [loading,setLoading] = useState(false);
    const {handleSubmit, register, formState: {errors}, control} = useForm({mode: "onBlur"});
    const { fields, append, remove } = useFieldArray({
            control,
            name: "ingredients"
        }, {control, name:"directions"});


    const formData = new FormData();
    async function onSubmit(data) {
        try {
            setLoading(true)
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
            formData.append("poultry", data.poultry)

            const response = await axios.post('http://localhost:8080/api/recipes',
                formData,
            )
            setLoading(false)
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
                        <div className="file-upload">
                            <label className="custom-file-upload">
                                <input type="file" name="file" {...register("file")}/>
                                <IoMdCloudUpload className="cloud"/><span>Upload an image</span>
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
                                        <label htmlFor={`ingredients[${index}].name`}>
                                            <input
                                                className="textInput"
                                                name={`ingredients[${index}].name`}
                                                {...register(`ingredients[${index}].name`)}
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
                                            <label htmlFor={`directions[${index}].name`}>
                                <textarea
                                    name={`directions[${index}].name`}
                                    {...register(`directions[${index}].name`)}
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
                            {loading === true ? (
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
                                            <label htmlFor="poultry">
                                                <input
                                                    type="checkbox"
                                                    name="poultry"
                                                    {...register("poultry")}
                                                /> Poultry
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
                            ) : (
                                <span>Loading...</span>
                            )}
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