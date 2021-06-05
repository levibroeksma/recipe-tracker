import React from "react";
import './Checkbox.css'

function Checkbox({name, required, requiredError,errors,register,labelTitle,labelId}) {
    return (
        <label htmlFor={name} id={labelId}>
            <input
                name={name}
                type="checkbox"
                required
                {...register(name, {required: required}) }
            />
            {/*I agree with the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>*/}
            {labelTitle}
            {errors[name] && errors[name].type === "required" && <span className="errorMessage">{requiredError}</span>}
        </label>
    )
}

export default Checkbox;