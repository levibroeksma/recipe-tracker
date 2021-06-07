import './Account-page.css'
import Input from "../../components/Input/Input";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import Button from "../../components/Button/Button";
function AccountPageRegister() {

    const {handleSubmit, register, formState: { errors }} = useForm();
    const history = useHistory();
    const onSubmitRegister = (data) => {
        console.log(data);
        history.push('register/registration');
    };
    const toLogIn = () => {
        history.push('/account')
    }


    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Account</h1>

                <div className="register-menu">
                    <div className="tab-holder">
                        <div className="login-tab" onClick={toLogIn}>
                            <span>Login</span>
                        </div>
                        <div className="register-tab">
                            <span>Register</span>
                        </div>
                    </div>
                    <div className="login-field">
                        <h5>Returning user</h5>
                        <p>Welcome back, please enter your account
                            details below to continue.</p>
                        <form onSubmit={handleSubmit(onSubmitRegister)}>
                            <Input
                                name="userName"
                                labelId="userNameId"
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
                                name="mail"
                                labelId="mailId"
                                placeholder="Enter your email address..."
                                required={true}
                                requiredError="Required."
                                register={register}
                                errors={errors}
                                pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                                patternError="Please enter a valid email address."
                            />
                            <Button
                                buttonTitle="Register"
                                classNameButton="btn"
                                type="submit"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountPageRegister;