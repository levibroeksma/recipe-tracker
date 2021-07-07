import {useAddRecipe} from "../../contexts/AddRecipeProvider";
import {useForm} from "react-hook-form";
import FlagSelector  from "../../components/CountryFlagSelector/FlagSelector";

export default function Step4() {
    const {handleSubmit, formState: { errors }} = useForm();
    const { register } = useAddRecipe();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} id="recipe-detail-form">
            <label htmlFor="countryFlags" className="details">
                <input
                    list="country"
                    placeholder="Country of origin"
                    className="textInput"
                    name="country"
                    {...register("country")}
                />
            </label>
            <FlagSelector/>
            <label htmlFor="cooking-time" className="details">
                <input
                    type="number"
                    className="textInput"
                    placeholder="Cooking time in minutes"
                    name="cooking-time"
                    {...register("cooking-time")}
                    required
                />
            </label>
            <label htmlFor="calories" className="details">
                <input
                    type="number"
                    className="textInput"
                    placeholder="Calories"
                    name="calories"
                    {...register("calories")}
                />
            </label>

            <div className="checkbox-wrapper">
                <div className="checkbox-wrapper-inner">
                    <label htmlFor="vegetarian">
                        <input
                            type="checkbox"
                            name="vegetarian"
                            {...register("vegetarian")}
                        /> Vegetarian
                    </label>
                    <label htmlFor="vegan">
                        <input
                            type="checkbox"
                            name="vegan"
                            {...register("vegan")}
                        /> Vegan
                    </label>
                    <label htmlFor="beef">
                        <input
                            type="checkbox"
                            name="beef"
                            {...register("beef")}
                        /> Beef
                    </label>
                    <label htmlFor="fish">
                        <input
                            type="checkbox"
                            name="fish"
                            {...register("fish")}
                        /> Fish
                    </label>
                    <label htmlFor="pork">
                        <input
                            type="checkbox"
                            name="pork"
                            {...register("pork")}
                        /> Pork
                    </label>
                    <label htmlFor="lamb">
                        <input
                            type="checkbox"
                            name="lamb"
                            {...register("lamb")}
                        /> Lamb
                    </label>
                    <label htmlFor="spicy">
                        <input
                            type="checkbox"
                            name="spicy"
                            {...register("spicy")}
                        /> Spicy
                    </label>
                </div>
            </div>
        </form>
    )
}