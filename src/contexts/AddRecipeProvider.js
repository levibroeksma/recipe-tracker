import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

export function useAddRecipe() {
    return useFormContext();
}

export default function AddRecipeProvider({children}) {
    const methods = useForm();
    return (
        <FormProvider {...methods}>
            {/* Hier komt de rest van de app */}
            {children}
        </FormProvider>
    );
}