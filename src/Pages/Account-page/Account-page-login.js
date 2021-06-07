import './Account-page.css'
import Input from "../../components/Input/Input";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import Button from "../../components/Button/Button";
function AccountPageLogin() {

    const {handleSubmit, register, formState: { errors }} = useForm();
    const history = useHistory();
    const onSubmitLogin = (data) => {
        console.log(data);
    };

    const toRegister = () => {
        history.push('/register')
    }

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
                            <Input
                                name="passwordLogin"
                                labelId="passwordLoginId"
                                type="password"
                                placeholder="Password..."
                                required={true}
                                requiredError="Required."
                                register={register}
                                errors={errors}
                            />
                            <Button
                                buttonTitle="Log in"
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

export default AccountPageLogin;