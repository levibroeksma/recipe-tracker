import './Account-page.css'
import Input from "../../components/Input/Input";
import {useForm} from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import Button from "../../components/Button/Button";
import {AiFillEye} from "react-icons/ai";
import {AiFillEyeInvisible} from "react-icons/ai"
import {useState} from "react";
function AccountPage() {

    const {handleSubmit, register, formState: { errors }} = useForm();
    const history = useHistory();
    const onSubmitLogin = (data) => {
        console.log(data);
        if(formLogin === true) {
            history.push("my-account")
        } else{
            history.push("/register")
        }
    };

    const [formLogin, setFormLogin] = useState(true);

    function setFormField() {setFormLogin(!formLogin)}

    const [showPassword, toggleShowPassword] = useState(false);
    const toggleVisability = () => {toggleShowPassword(!showPassword)}

    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Account</h1>

                <div className="login-menu">
                    <div className="tab-holder">
                        <div className={ `login-tab ${formLogin ? "active" : ""}`} onClick={setFormField}>
                            <span>Login</span>
                        </div>
                        <div className={ `register-tab ${formLogin ? "" : "active"}`} onClick={setFormField}>
                            <span>Register</span>
                        </div>
                    </div>
                    {formLogin ? <div className="login-field">
                        <h5>Returning user</h5>
                        <p>Welcome back, please enter your account
                            details below to continue.</p>
                        <form onSubmit={handleSubmit(onSubmitLogin)}>

                            <Input
                                name="userNameLogin"
                                labelId="userNameLoginId"
                                type="text"
                                placeholder="Username..."
                                required={true}
                                requiredError="Required."
                                register={register}
                                errors={errors}
                            />
                            <div className="password-login-wrapper">
                                <Input
                                    name="passwordLogin"
                                    labelId="passwordLoginId"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password..."
                                    required={true}
                                    requiredError="Required."
                                    register={register}
                                    errors={errors}
                                />
                                <div className="eye-holder" onClick={toggleVisability}>
                                    {showPassword ? <AiFillEyeInvisible className="hide-eye"/> : <AiFillEye className="show-eye"/>}
                                </div>
                            </div>
                            <div className="button-wrapper-login">
                                <Button
                                    buttonTitle="Log in"
                                    classNameButton="btn"
                                    type="submit"
                                />
                                <div className="forgot-password">
                                    <Link to="/forgot-password">Forgot password?</Link>
                                </div>
                            </div>
                        </form>
                        </div>
                        :
                        <div className="login-field">
                            <h5>New? Register below!</h5>
                            <p>Please pick a username and enter your email
                                address below.</p>
                            <form onSubmit={handleSubmit(onSubmitLogin)}>
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
                    }
                </div>
            </div>
        </div>
    )
}

export default AccountPage;