import Input from "../components/Input/Input";
import { useForm } from "react-hook-form";
import Button from "../components/Button/Button";
import Textarea from "../components/Textarea/Textarea";


function ContactPage() {

    const {handleSubmit, register, formState: { errors }} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="page-wrapper">
            <h1>Contact</h1>
            <div className="contact-wrapper">
                <div className="contact-right">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            name="name"
                            labelId="nameId"
                            placeholder="Name..."
                            required={true}
                            requiredError="This field is required."
                            register={register}
                            errors={errors}
                            minLength={4}
                            minLengthError=""
                            maxLength={24}
                        />

                        <Input
                            name="phoneNumber"
                            labelId="phoneNumberID"
                            errors={errors}
                            register={register}
                            placeholder="Phone number..."
                        />

                        <Input
                            name="mail"
                            labelId="mailId"
                            placeholder="Email..."
                            required={true}
                            requiredError="This field is required."
                            register={register}
                            errors={errors}
                            pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                            patternError="Please enter a valid email address"
                        />

                        <Textarea
                            required={true}
                            name="remarks"
                            labelId="remarksId"
                            placeholder="Your question or remark..."
                            register={register}
                            requiredError="This field is required."
                            maxLength={500}
                            maxLengthError="You can't use more then 500 characters"
                            errors={errors}
                        />

                        <Button
                            classNameButton="btn"
                            buttonTitle="Send and make it longer"
                            type="submit"
                        />
                    </form>
                </div>
                <div className="contact-left">

                </div>
            </div>
        </div>
    )
}

export default ContactPage;