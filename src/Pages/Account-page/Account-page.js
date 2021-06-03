import './Account-page.css'
import Input from "../../components/Input/Input";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import Button from "../../components/Button/Button";
function AccountPage() {

    const {handleSubmit, register, formState: { errors }} = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Account</h1>
                <div className="account-page-wrapper">
                    <div className="login-holder">
                        <h5>Returning user</h5>
                        <p>Welcome back, please enter your account
                            details below to continue.</p>
                    {/*    <form onSubmit={handleSubmit(onSubmit)}>*/}

                    {/*        <Input*/}
                    {/*            name="userName"*/}
                    {/*            labelId="userNameId"*/}
                    {/*            type="text"*/}
                    {/*            placeholder="Username..."*/}
                    {/*            required={true}*/}
                    {/*            requiredError="Required."*/}
                    {/*            register={register}*/}
                    {/*            errors={errors}*/}
                    {/*        />*/}
                    {/*        <Input*/}
                    {/*            name="password"*/}
                    {/*            labelId="passwordId"*/}
                    {/*            type="password"*/}
                    {/*            placeholder="Password..."*/}
                    {/*            required={true}*/}
                    {/*            requiredError="Required."*/}
                    {/*            register={register}*/}
                    {/*            errors={errors}*/}
                    {/*        />*/}
                    {/*        <Button*/}
                    {/*            buttonTitle="Log in"*/}
                    {/*            classNameButton="btn"*/}
                    {/*            type="submit"*/}
                    {/*        />*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                    {/*<div className="account-devider">*/}
                    {/*    /!*THIS HAS TO STAY EMPTY*!/*/}
                    {/*</div>*/}
                    {/*<div className="register-holder">*/}
                    {/*    <h5>New? Register below!</h5>*/}
                    {/*    <p>Please pick a username and enter your email*/}
                    {/*        address below.</p>*/}
                    {/*    <form onSubmit={handleSubmit(onSubmit)}>*/}
                    {/*        <Input*/}
                    {/*            name="userName"*/}
                    {/*            labelId="userNameId"*/}
                    {/*            placeholder="Pick a username..."*/}
                    {/*            required={true}*/}
                    {/*            requiredError="Required."*/}
                    {/*            register={register}*/}
                    {/*            errors={errors}*/}
                    {/*            minLength={4}*/}
                    {/*            minLengthError="A username has to contain 4 - 12 characters."*/}
                    {/*            maxLength={12}*/}
                    {/*            maxLengthError="A username has to contain 4 - 12 characters."*/}
                    {/*        />*/}
                    {/*        <Input*/}
                    {/*            name="mail"*/}
                    {/*            labelId="mailId"*/}
                    {/*            placeholder="Enter your email address..."*/}
                    {/*            required={true}*/}
                    {/*            requiredError="Required."*/}
                    {/*            register={register}*/}
                    {/*            errors={errors}*/}
                    {/*            pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}*/}
                    {/*            patternError="Invalid, please enter a valid email address."*/}
                    {/*        />*/}
                    {/*        <Button*/}
                    {/*            buttonTitle="Register"*/}
                    {/*            classNameButton="btn"*/}
                    {/*        />*/}
                    {/*    </form>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountPage;