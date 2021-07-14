import {useEffect, useState} from "react";
import axios from "axios";

export default function RecipeHeaderImage(props) {
    const [blobRecipeImage, setBlobRecipeImage] = useState();

    useEffect(()=>{
        async function fetchRecipeImage() {
            try {
                const result = await axios.get(`http://localhost:8080/api/recipes/${props.props}/fileName`, {
                    responseType: 'blob',
                });
                const imageUrl = result.data;
                setBlobRecipeImage(URL.createObjectURL(imageUrl))
            } catch (e) {
                console.error(e);
            }
        }
        fetchRecipeImage()
    },[props.props])


    return (
       <>
           {blobRecipeImage && <img src={blobRecipeImage} alt={props.fileName} />}
       </>
    )
}