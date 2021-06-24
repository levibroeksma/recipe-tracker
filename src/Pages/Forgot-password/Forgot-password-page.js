import {useForm} from "react-hook-form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

function ForgotPasswordPage() {
    const {handleSubmit, register, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    return (

        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">

                    <h1>Forgot password</h1>
                    <div className="forgot-password-wrapper">
                    <p>It happens to the best of us, please fill out your email address and we send you a brand new password!</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            name="mail"
                            labelId="mailId"
                            type="text"
                            placeholder="Email..."
                            required={true}
                            requiredError="This field is required."
                            register={register}
                            errors={errors}
                            pattern={/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                            patternError="Please enter a valid email address"
                        />
                        <Button
                            buttonTitle="Request new password"
                            classNameButton="btn"
                            type="submit"
                        />
                    </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ForgotPasswordPage;