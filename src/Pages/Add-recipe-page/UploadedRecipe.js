import {useHistory} from "react-router-dom";
import Button from "../../components/Button/Button";

export default function UploadedRecipe() {
    const history = useHistory()
    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Thank you!</h1>
                <p>Your recipe has been uploaded!</p>
                <Button
                    classNameButton="btn"
                    buttonTitle="To recipes"
                    type="button"
                    onClickEvent={()=> {history.push("/recipes")}}
                />
            </div>
        </div>
        )
}