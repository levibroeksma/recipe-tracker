import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./SignUp.css"
import Checkbox from "../../components/Checkbox/Checkbox";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";

function SignUp() {

    const history = useHistory();
    const {handleSubmit, register, formState: { errors }} = useForm();
    const [success, setSucces] = useState(false);
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState(null);

    const [showPassword, toggleShowPassword] = useState(false);
    const toggleVisability = () => {toggleShowPassword(!showPassword)}

    function validatePassword (value) {
        if (password !== value) return false;
    }

    async function onSubmit(data) {
        console.log("DATA VAN DE GEBRUIKER??", data);
        try {
            setLoading(true);
            const response = await axios.post("http://localhost:3000/register", {
                email: data.email,
                password: data.password,
                username: data.username,
                firstName: data.firstName,
                lastName: data.lastName,
                privacyPolicy: data.privacyPolicy,
                termsAndConditions: data.termsAndConditions,
                newsLetter: data.newsLetter,
            });
            console.log(response);
            setSucces(true);
            setTimeout(() => history.push("/signin"), 2000);
        } catch (error) {
            console.log("OH NO", error);
        }

        setLoading(false);
    }

    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Registreren</h1>

                <div className="registration-form-holder">
                    <p className="hidden-message">{success && "Registeren is gelukt!"}</p>
                    <p className="hidden-message">{loading && "Moment geduld aub"}</p>
                    <p>
                        Please fill out the fields below to finish your registration. We have already checked your requested username. Guess what? It’s available!
                    </p>
                    {!success && (
                        <form onSubmit={handleSubmit(onSubmit)} className="registration-form">

                            <Input
                                name="username"
                                labelId="username-field"
                                placeholder="Pick a username..."
                                required={true}
                                requiredError="Required."
                                register={register}
                                errors={errors}
                                minLength={4}
                                minLengthError="A username has to contain 4 - 12 characters."
                                maxLength={20}
                                maxLengthError="A username has to contain 4 - 12 characters."
                            />

                            <Input
                                name="firstName"
                                labelId="firstNameId"
                                placeholder="First name"
                                register={register}
                                errors={errors}
                                required={true}
                                requiredError="Required."
                            />
                            <Input
                                name="lastName"
                                labelId="lastNameId"
                                placeholder="Last name"
                                register={register}
                                errors={errors}
                                required={true}
                                requiredError="Required."
                            />

                            <Input
                                name="email"
                                labelId="email-field"
                                type="email"
                                placeholder="Email address"
                                required={true}
                                requiredError="Required."
                                register={register}
                                errors={errors}
                                pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                                patternError="Please enter a valid email address"
                            />
                            <div className="password-login-wrapper">
                            <Input
                                name="password"
                                labelId="password-field"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                required={true}
                                requiredError="Required."
                                register={register}
                                errors={errors}
                                minLength={8}
                                minLengthError="The password has to be at least 8 characters."
                                // pattern={/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/}
                                patternError="Your password should contain at least: 1 uppercase, 1 lowercase and 1 digit"
                                validate={(value) => validatePassword(value)}
                                validateError="The passwords do not match."
                            />
                            <div className="eye-holder" onClick={toggleVisability}>
                                {showPassword ? <AiFillEyeInvisible className="hide-eye"/> : <AiFillEye className="show-eye"/>}
                            </div>
                            </div>
                            <label htmlFor="passwordCheck" id="password-field-check">
                                <input
                                    className="textInput"
                                    name="passwordCheck"
                                    id="passwordCheck"
                                    type="password"
                                    placeholder="Re-enter password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </label>

                            <div className="checkbox-wrapper">
                                <Checkbox
                                    name="newsLetter"
                                    labelId="newsLetterId"
                                    register={register}
                                    errors={errors}
                                    labelTitle="I'd like to stay up-to-date and receive the news letter."
                                    required={false}
                                />
                                <Checkbox
                                    name="termsAndConditions"
                                    labelId="termsAndConditionsId"
                                    required={true}
                                    requiredError="Required."
                                    errors={errors}
                                    register={register}
                                    labelTitle="I agree with the "
                                    titleLink="Terms and Conditions"
                                    pageRoute="/terms-and-conditions"
                                />
                                <Checkbox
                                    name="privacyPolicy"
                                    labelId="privacyPolicyId"
                                    required={true}
                                    requiredError="Required."
                                    errors={errors}
                                    register={register}
                                    labelTitle="I have read and accept the "
                                    titleLink="Privacy Policy"
                                    pageRoute="/privacy-policy"
                                />
                            </div>

                            <Button
                                buttonTitle="Register"
                                classNameButton="btn"
                                type="submit"
                                disabled={loading}
                            />
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SignUp;
