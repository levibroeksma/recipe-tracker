import React, {useContext, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {useFieldArray, useForm} from "react-hook-form";
import {IoMdCloudUpload} from "react-icons/io"
import {TiDelete} from "react-icons/ti"

import Button from "../../components/Button/Button";
import FlagSelector from "../../components/CountryFlagSelector/FlagSelector";
import {authContext} from "../../contexts/AuthContext";
import "./Add-recipe-page.css"

export default function AddRecipe() {
    const {user} = useContext(authContext);
    const history = useHistory();
    const [step, setStep] = useState(1);
    const [loading,setLoading] = useState(false);
    const {handleSubmit, register,control, formState: {errors}} = useForm({mode: 'onBlur'});
    const {
        fields: ingredientFields,
        append: ingredientAppend,
        remove: ingredientRemove,
    } = useFieldArray({control, name: "ingredients"});
    const {
        fields: directionFields,
        append: directionAppend,
        remove: directionRemove
    } = useFieldArray({control, name: "directions",})


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
            formData.append("poultry", data.poultry)
            formData.append("username", user.username);

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
                                    {...register("title",{required: true})}
                                />
                                {errors.title && errors.title.type === "required" && <span className="errorMessage">Required.</span>}
                            </label>
                            <label htmlFor="description" id="descriptionLabel">
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder="Description.."
                                    {...register("description", {required: true})}

                                />
                                {errors.description && errors.description.type === "required" && <span className="errorMessage">Required.</span>}
                            </label>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            { ingredientFields.map(({ id }, index) => {
                                return (
                                    <div  key={id}>
                                        <div className="ingredient-input-holder">
                                            <label htmlFor={`ingredients[${index}].name`}>
                                                <input
                                                    className="textInput"
                                                    type="text"
                                                    name={`ingredients[${index}].name`}
                                                    {...register(`ingredients[${index}].name`)}
                                                />
                                            </label>
                                            <Button
                                                type="button"
                                                classNameButton="btn remove"
                                                buttonTitle={<TiDelete />}
                                                onClickEvent={() => ingredientRemove(index)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                            <Button
                                type="button"
                                classNameButton="btn"
                                onClickEvent={() => ingredientAppend({})}
                                buttonTitle="Add an ingredient"
                            />
                        </>
                    )}
                    {step === 4 && (
                        <>
                            { directionFields.map(({ id }, index) => {
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
                                                onClickEvent={() => directionRemove(index)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                            <Button
                                type="button"
                                classNameButton="btn"
                                onClickEvent={() => directionAppend({})}
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
                                            {...register("country", {required: true})}
                                        />
                                        {errors.country && errors.country.type === "required" && <span className="errorMessage">Required.</span>}

                                    </label>
                                    <FlagSelector/>
                                    <label htmlFor="cookingTime" className="details">
                                        <input
                                            type="number"
                                            className="textInput"
                                            placeholder="Cooking time in minutes"
                                            name="cookingTime"
                                            {...register("cookingTime", {required: true})}
                                        />
                                        {errors.cookingTime && errors.cookingTime.type === "required" && <span className="errorMessage">Required.</span>}

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
                                    type="button"
                                />
                                <Button
                                    onClickEvent={() => setStep(step + 1)}
                                    buttonTitle="Next step"
                                    classNameButton="btn"
                                    type="button"
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
                                    type="button"
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