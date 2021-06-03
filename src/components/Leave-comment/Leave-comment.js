import "./Leave-comment.css"
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

function LeaveComment() {
    const {handleSubmit, register, formState: { errors }} = useForm();
    const star = <FontAwesomeIcon icon={faStar}/>
    const history = useHistory();
    const onSubmit = (data) => {
        console.log(data)
        history.push('contact/thank-you');
    };
    return (
        <section className="leave-a-comment">

            <form onSubmit={handleSubmit(onSubmit)}>

                <Textarea
                    name="leaveComment"
                    required={true}
                    labelId="leaveCommentId"
                    register={register}
                    errors={errors}
                    maxLength={1000}
                    requiredError="Required"
                    maxLengthError="You can't use more then 1000 characters."
                    placeholder="Leave a comment..."
                />
                <div className="right-holder">
                    <div className="star-holder">
                        <div className="stars">
                            {star}{star}{star}{star}{star}
                        </div>
                        <span>What rating would you give this recipe?</span>
                    </div>

                    <Button
                        buttonTitle="Post"
                        classNameButton="btn"
                        type="submit"
                    />
                </div>
            </form>
        </section>
    )
}

export default LeaveComment;