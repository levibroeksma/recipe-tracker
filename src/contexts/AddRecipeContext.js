import {createContext, useEffect} from "react";
import {useHistory} from "react-router-dom";


export const addRecipeContext = createContext({});

function AddRecipeContext({children}) {
    const history = useHistory();

    useEffect(() => {

    }, []);

    return (
        <>
            <addRecipeContext.Provider value={data}>

            </addRecipeContext.Provider>
        </>
    )
}

export default AddRecipeContext;