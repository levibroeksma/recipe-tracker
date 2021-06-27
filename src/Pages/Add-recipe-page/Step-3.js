import "./Add-recipe-page.css"
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {BsTrashFill} from "react-icons/bs";
import {useHistory} from "react-router-dom";
import Button from "../../components/Button/Button";
import Textarea from "../../components/Textarea/Textarea";

function AddRecipeStep3() {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [indexes, setIndexes] = useState([0]);
    const [counter, setCounter] = useState(1);

    const previousStep = () => {
        history.push("step-2");
    }

    const onSubmit = (data) => {
        console.log(data);
        history.push("step-4")
    };

    const addDirection = () => {
        setIndexes((prevIndexes) => [...prevIndexes, counter]);
        setCounter((prevCounter) => prevCounter + 1);
    };

    const removeDirection = (index) => () => {
        setIndexes((prevIndexes) => [
            ...prevIndexes.filter((item) => item !== index)
        ]);
        setCounter((prevCounter) => prevCounter - 1);
    };

    const clearDirection = () => {
        setIndexes([]);
    };
    console.log(indexes);

    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <h1>Add the directions</h1>
                        <div className="add-ingredient-wrapper">
                            <form onSubmit={handleSubmit(onSubmit)} className="add-ingredient-form">
                                {indexes.map((index) => {
                                    const fieldName = `direction_${index}`;
                                    return (
                                        <div key={fieldName}>
                                            <div className="direction-input-holder">
                                                <Textarea
                                                    name={`${fieldName}`}
                                                    labelId="testId"
                                                    register={register}
                                                    placeholder="test"
                                                    errors={errors}
                                                />
                                                <Button
                                                    type="button"
                                                    buttonTitle={<BsTrashFill className="eraserIcon"/>}
                                                    classNameButton="btn remove"
                                                    onClickEvent={removeDirection(index)}
                                                />
                                            </div>

                                        </div>
                                    )
                                })}
                                <div className="list-control-wrapper">
                                    <Button
                                        type="button"
                                        buttonTitle="Add ingredient"
                                        onClickEvent={addDirection}
                                        classNameButton="btn"
                                    />
                                    <Button
                                        type="button"
                                        buttonTitle="Clear ingredient list"
                                        onClickEvent={clearDirection}
                                        classNameButton="btn clear"
                                    />
                                </div>
                                <div className="button-wrapper">
                                    <Button
                                        classNameButton="btn cancel"
                                        buttonTitle="Previous step"
                                        type="submit"
                                        onClickEvent={previousStep}
                                    />
                                    <Button
                                        buttonTitle="Save and continue"
                                        type="submit"
                                        classNameButton="btn save-and-continue"
                                    />
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddRecipeStep3;