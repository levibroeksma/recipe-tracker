import React, {useState, useEffect} from "react";
import axios from "axios";

export default function RecipeImage({recipeId}) {

    const [blobRecipeImage, setBlobRecipeImage] = useState('');

    async function fetchRecipeImage() {
        try {
            const result = await axios.get(`http://localhost:8080/api/recipes/${recipeId}/fileName`, {
                responseType: 'blob',
            });
            const imageUrl = result.data;
            setBlobRecipeImage(URL.createObjectURL(imageUrl));

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchRecipeImage();
    }, [recipeId]);

    return (
        <>
            {blobRecipeImage && <img id={`displayPic${recipeId}`} src={blobRecipeImage} alt={recipeId} />}
        </>
    )
}