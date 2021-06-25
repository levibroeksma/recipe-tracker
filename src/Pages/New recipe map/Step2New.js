import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import Input from "../../components/Input/Input";
import updateActions from "./updateActions";
import Button from "../../components/Button/Button";
import {BsTrashFill} from "react-icons/bs";

function Step2New() {
    const { state, action } = useStateMachine(updateActions);
    const { handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: state.yourRecipe
    });

    const [indexes, setIndexes] = useState([0]);
    const [counter, setCounter] = useState(1);

    const history = useHistory()

    function onSubmit(data) {
        action(data);
        history.push("/step3new")
    }

    const addIngredient = () => {
        setIndexes((prevIndexes) => [...prevIndexes, counter]);
        setCounter((prevCounter) => prevCounter + 1);
    };

    const removeIngredient = (index) => () => {
        setIndexes((prevIndexes) => [
            ...prevIndexes.filter((item) => item !== index)
        ]);
        setCounter((prevCounter) => prevCounter - 1);
    };

    const clearIngredients = () => {
        setIndexes([]);
    };
    console.log(indexes);


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="add-ingredient-form">
                {indexes.map((index) => {
                    const fieldName = `ingredient_${index}`;
                    return (
                        <div key={fieldName}>
                            <div className="ingredient-input-holder">
                                <Input
                                    name={`${fieldName}`}
                                    labelId="testId"
                                    register={register}
                                    placeholder="test"
                                    type="text"
                                    errors={errors}
                                />
                                <Button
                                    type="button"
                                    buttonTitle={<BsTrashFill className="eraserIcon"/>}
                                    classNameButton="btn remove"
                                    onClickEvent={removeIngredient(index)}
                                />
                            </div>

                        </div>
                    )
                })}
                <div className="list-control-wrapper">
                    <Button
                        type="button"
                        buttonTitle="Add ingredient"
                        onClickEvent={addIngredient}
                        classNameButton="btn"
                    />
                    <Button
                        type="button"
                        buttonTitle="Clear ingredient list"
                        onClickEvent={clearIngredients}
                        classNameButton="btn clear"
                    />
                </div>
                <div className="button-wrapper">
                    <Button
                        buttonTitle="Save and continue"
                        type="submit"
                        classNameButton="btn save-and-continue"
                    />
                </div>
            </form>
        </>
    )
}

export default Step2New;