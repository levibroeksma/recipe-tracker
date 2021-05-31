import Input from "../components/Input/Input";
import { useForm } from "react-hook-form";


function ContactPage() {

    const {handleSubmit, register, formState: { errors }} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="pageWrapper">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    name="userName"
                    placeholder="Username"
                    required={true}
                    requiredError="This field is required."
                    register={register}
                    errors={errors}
                />
                <Input
                    name="mail"
                    placeholder="Email address"
                    required={true}
                    requiredError="This field is required."
                    register={register}
                    errors={errors}
                />

                <button type="submit" className="btn">Send</button>
            </form>
        </div>
    )
}

export default ContactPage;