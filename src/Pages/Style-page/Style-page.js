import './Style-page.css'
import { HiSearch } from "react-icons/hi";
import {useForm} from "react-hook-form";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function StylePage() {

    // const { register, handleSubmit, formState: { errors } } = useForm();
    //
    // const onSubmit = (data) => {
    //     console.log(data);
    // };

    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Deze pagina is om nieuwe elementen te bouwen</h1>

                {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
                {/*    <Input*/}
                {/*        name="ingredient"*/}
                {/*        type="text"*/}
                {/*        labelId="ingredientId"*/}
                {/*        register={register}*/}
                {/*        errors={errors}*/}
                {/*        required={true}*/}
                {/*        requiredError="Required."*/}
                {/*    />*/}
                {/*    <Button*/}
                {/*        buttonTitle="Send"*/}
                {/*        classNameButton="btn"*/}
                {/*        type="submit"*/}
                {/*    />*/}
                {/*</form>*/}

            </div>
        </div>
    )
}

export default StylePage;