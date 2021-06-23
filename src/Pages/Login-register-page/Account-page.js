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
       history.push("/my-account")
    };

    const [showPassword, toggleShowPassword] = useState(false);
    const toggleVisability = () => {toggleShowPassword(!showPassword)}

    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Sign in</h1>

                <div className="login-menu">

                    <div className="login-field">
                        <h2>Welcome back</h2>
                        <p>Please enter your account details below to continue.</p>
                        <p>Don't have an account yet? Click <Link to="/register">here</Link> to register.</p>
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

export default AccountPage;