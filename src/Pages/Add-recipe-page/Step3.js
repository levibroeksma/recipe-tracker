import {useAddRecipe} from "../../contexts/AddRecipeProvider";
import {useForm} from "react-hook-form";
import {useFieldArray} from "react-hook-form";
import {TiDelete} from "react-icons/ti"
import Button from "../../components/Button/Button";
import {useEffect} from "react";

export default function Step3() {
    const { register, getValues } = useAddRecipe();
    const { control, formState: { errors } } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "directions"
    })

    useEffect(() => {
        const { directions } = getValues();

        setTimeout(() => {
            // console.log('mount', ingredients);

            directions && directions.map(ing => {
                if (ing.direction !== "") {
                    append({});
                }
            })
        })
    }, []);

    return(
        <>
            <form className="add-ingredient-form">
                { fields.map(({ id }, index) => {
                    return (
                        <div key={id}>
                            <div className="direction-input-holder">
                            <label htmlFor={`directions[${index}].direction`}>
                                <textarea
                                    name={`directions[${index}].direction`}
                                    {...register(`directions[${index}].direction`)}
                                />
                            </label>
                            <Button
                                type="button"
                                classNameButton="btn"
                                buttonTitle={<TiDelete />}
                                onClickEvent={() => remove(index)}
                            />
                        </div>
                        </div>
                    );
                })}
                <Button
                    type="button"
                    classNameButton="btn"
                    onClickEvent={() => append({})}
                    buttonTitle="Add an directions"
                />
            </form>
        </>
    )
}