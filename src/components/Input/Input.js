import React from "react";
import './Input.css';

function Input({labelId, name, placeholder, required, minLength, maxLength, pattern, errors, requiredError, minLengthError, maxLengthError, patternError, register}) {

    return (
        <label htmlFor={name} id={labelId}>
            <input
                type="text"
                className="textInput"
                name={name}
                id={name}
                {...register(
                    name,
                    {
                        required: required,
                        minLength: minLength,
                        maxLength: maxLength,
                        pattern: pattern
                    }
                    )}
            />
            <p className="placeholder">{placeholder}</p>
            {errors[name] && errors[name].type === "required" && <span className="errorMessage">{requiredError}</span>}
            {errors[name] && errors[name].type === "minLength" && <span className="errorMessage">{minLengthError}</span>}
            {errors[name] && errors[name].type === "maxLength" && <span className="errorMessage">{maxLengthError}</span>}
            {errors[name] && errors[name].type === "pattern" && <span className="errorMessage">{patternError}</span>}
        </label>

    )
}
export default Input


// <label htmlFor={name} id={nameId}>
//     <input type="text" placeholder={placeholder} name={name} id={name} {...register(name, {required: required, min: minAge, maxLength: maxTextLength, pattern: patternPostalCode})}/>
// {errors[name] && errors[name].type === "required" && <span className="errorMessage">Dit veld is verplicht.</span>}
// {errors[name] && errors[name].type === "min" && <span className="errorMessage">Je moet minimaal 18 jaar zijn als je een bestelling wilt plaatsen.</span>}
// {errors[name] && errors[name].type === "maxLength" && <span className="errorMessage">Dit veld mag maximaal 500 tekens bevatten.</span>}
// {errors[name] && errors[name].type === "pattern" && <span className="errorMessage">Voer een geldige postcode in.</span>}
// </label>