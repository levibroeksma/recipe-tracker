import {useAddRecipe} from "../../contexts/AddRecipeProvider";
import React, {useEffect} from "react";
import { useForm, useFieldArray } from "react-hook-form";
import {TiDelete} from "react-icons/ti"
import Button from "../../components/Button/Button";
import "./Add-recipe-page.css"

export default function Step2() {
    const { register, getValues } = useAddRecipe();
    const { control, handleSubmit, formState: { errors } } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "ingredients"
    })

    useEffect(() => {
        const { ingredients } = getValues();

        setTimeout(() => {
            // console.log('mount', ingredients);

            ingredients && ingredients.map(ing => {
                if (ing.ingredient !== "") {
                    append({});
                }
            })
        })
    }, []);

    return (
        <>
            <form  className="new-recipe-form">
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
            </form>
        </>
    )
}