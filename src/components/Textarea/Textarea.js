import "./Textarea.css"
import React from "react";

export default function Textarea({name,labelId,placeholder, required, register, maxLength, maxLengthError,requiredError, errors}) {
    return (
        <>
            <label htmlFor={name} id={labelId}>
                <textarea
                    name={name}
                    placeholder={placeholder}

                    {...register(name, {required: required, maxLength: maxLength})}
                ></textarea>
                {errors[name] && errors[name].type === "required" && <span className="errorMessage textArea">{requiredError}</span>}
                {errors[name] && errors[name].type === "maxLength" && <span className="errorMessage textArea">{maxLengthError}</span>}

            </label>
        </>
    )
}
