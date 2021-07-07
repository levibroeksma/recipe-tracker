import {useAddRecipe} from "../../contexts/AddRecipeProvider";
import {useForm} from "react-hook-form";
import "./Add-recipe-page.css"

export default function Step1() {

    const {register} = useAddRecipe();
    const { formState: { errors }} = useForm();

    return (
       <>
            <form  className="new-recipe-form">
                <label id="titleLabel" htmlFor="title">
                    <input
                        className="textInput"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title..."
                        {...register("title")}
                        required
                    />
                    {errors.title && errors.title.type === "required" && <span className="errorMessage">Required.</span>}
                </label>
                <label htmlFor="description">
                <textarea
                    name="description"
                    id="description"
                    placeholder="Please write a short description..."
                    {...register("description")}
                    required
                />
                </label>
            </form>
       </>
    )
}