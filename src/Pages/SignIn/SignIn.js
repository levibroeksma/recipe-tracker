import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import {authContext} from "../../contexts/AuthContext";
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./SignIn.css"

export default function SignIn() {
    const {handleSubmit, register, formState: { errors }} = useForm();
    const { login } = useContext(authContext);
    const history = useHistory();

    async function onSubmit(data) {
        try {
            const result = await axios.post("http://localhost:8080/authenticate", data);
            login(result.data.jwt);
            history.push("/my-account");
        } catch (e) {
            console.error(e);
        }
    }

    const [showPassword, toggleShowPassword] = useState(false);
    const toggleVisability = () => {toggleShowPassword(!showPassword)}

    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Inloggen</h1>
                <div className="login-menu">
                    <div className="login-field">
                        <h2>Welcome back</h2>
                        <p>Please enter your account details below to continue.</p>
                        <p>Don't have an account yet? Click <Link to="/register">here</Link> to register.</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                name="username"
                                labelId="usernameId"
                                type="text"
                                placeholder="Username..."
                                required={true}
                                requiredError="Required."
                                register={register}
                                errors={errors}
                            />
                            <div className="password-login-wrapper">
                                <Input
                                    name="password"
                                    labelId="passwordId"
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
                            <Button
                                buttonTitle="Log in"
                                type="submit"
                                classNameButton="btn"
                            />
                            <Link className="forgot-password" to="/forgot-password">Forgot password</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}