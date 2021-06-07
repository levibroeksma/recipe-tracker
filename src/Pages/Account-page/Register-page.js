import { useForm } from 'react-hook-form';
import React from "react";
import Checkbox from "../../components/Checkbox/Checkbox";
import {useHistory} from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function RegisterPage() {
    const {handleSubmit, register, formState: { errors }} = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        console.log(data)
        history.push('/register/confirmation')
    };

    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Register</h1>

                <div className="registration-form-holder">
                    <p>
                        Please fill out the fields below to finish your registration. We have already checked your requested username. Guess what? It’s available!
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
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
                            name="mail"
                            labelId="mailId"
                            type="text"
                            placeholder="Email address"
                            required={true}
                            requiredError="Required."
                            register={register}
                            errors={errors}
                            pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                            patternError="Please enter a valid email address"
                        />
                        <Input
                            name="password"
                            labelId="passwordId"
                            type="password"
                            placeholder="Password"
                            required={true}
                            requiredError="Required."
                            register={register}
                            errors={errors}
                            minLength={6}
                            minLengthError="The password has to be at least 6 characters."
                        />
                        <Input
                            name="passwordCheck"
                            labelId="passwordCheckId"
                            type="password"
                            placeholder="Re-enter password"
                            required={true}
                            requiredError="Required."
                            register={register}
                            errors={errors}
                            minLength={6}
                            minLengthError="The password has to be at least 6 characters."
                        />
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
                            type="submit"
                            classNameButton="btn"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;