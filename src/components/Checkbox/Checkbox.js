import React from "react";
import './Checkbox.css'
import {Link} from "react-router-dom";

export default function Checkbox({name, required, requiredError,errors,register,labelTitle,labelId,titleLink,pageRoute}) {
    return (
        <label htmlFor={name} id={labelId}>
            <input
                name={name}
                type="checkbox"
                {...register(name, {required: required}) }
            />
            {labelTitle}<Link to={pageRoute}>{titleLink}</Link>
            {errors[name] && errors[name].type === "required" && <span className="errorMessage">{requiredError}</span>}
        </label>
    )
}