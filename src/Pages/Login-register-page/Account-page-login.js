import './Account-page.css'
import Input from "../../components/Input/Input";
import {useForm} from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import Button from "../../components/Button/Button";
import {AiFillEye} from "react-icons/ai";
import {AiFillEyeInvisible} from "react-icons/ai"
import {useState} from "react";
function AccountPageLogin() {

    const {handleSubmit, register, formState: { errors }} = useForm();
    const history = useHistory();
    const onSubmitLogin = (data) => {
        console.log(data);
        history.push("my-account")
    };

    const toRegister = () => {
        history.push('/register')
    }

    const [showPassword, toggleShowPassword] = useState(false);

    const toggleVisability = () => {toggleShowPassword(!showPassword)}

    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Account</h1>

                <div className="login-menu">
                    <div className="tab-holder">
                        <div className="login-tab">
                            <span>Login</span>
                        </div>
                        <div className="register-tab" onClick={toRegister}>
                            <span>Register</span>
                        </div>
                    </div>
                    <div className="login-field">
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
                </div>
            </div>
        </div>
    )
}

export default AccountPageLogin;