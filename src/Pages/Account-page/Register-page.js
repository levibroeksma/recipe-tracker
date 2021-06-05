import { useForm } from 'react-hook-form';
import React from "react";
import Checkbox from "../../components/Checkbox/Checkbox";

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Register</h1>
                <Checkbox
                    name="termsAndConditions"
                    labelId="termsAndConditionsId"
                    required={true}
                    requiredError="Required."
                    errors={errors}
                    register={register}
                    labelTitle="I agree with the Terms and Conditions"
                />
            </div>
        </div>
    )
}

export default RegisterPage;