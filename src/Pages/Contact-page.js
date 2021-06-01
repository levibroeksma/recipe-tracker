import Input from "../components/Input/Input";
import { useForm } from "react-hook-form";
import Button from "../components/Button/Button";
import Textarea from "../components/Textarea/Textarea";
import "./Contact.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";

function ContactPage() {

    const {handleSubmit, register, formState: { errors }} = useForm();
    const onSubmit = data => console.log(data);
    const mail = <FontAwesomeIcon icon={faEnvelope}/>
    const phone = <FontAwesomeIcon icon={faPhone}/>
    return (
        <div className="page-wrapper">
            <div className="contact-wrapper">
                <div className="contact-left">
                    <img src={require('../assets/character 7.svg').default} alt=""/>
                    <div className="text-wrap">
                        <h5>RecipeTracker</h5>
                        <a href="mailto:info@recipetracker.com" className="mail">{mail}info@recipetracker.com</a>

                        <a href="tel:+31123456789" className="phone-number"><strong>{phone}</strong> + 31 (0) 12 345 67 89</a>
                    </div>
                </div>
                <div className="contact-right">
                    <h1>Contact</h1>
                    <p>If you find yourself having any issue, questions or complaints, please feel free to contact us! We want to give our users the best experience possible and are always looking to improver our services. Fill out the contact form down below and we will contact you as soon as possible!</p>
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
                            row={20}
                            column={20}
                        />

                        <Button
                            classNameButton="btn"
                            buttonTitle="Send and make it longer"
                            type="submit"
                        />
                    </form>
                </div>



            </div>
        </div>
    )
}

export default ContactPage;