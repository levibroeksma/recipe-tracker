import "./Leave-comment.css"
import {useForm} from "react-hook-form";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";

import RatingRow from "../Ratings/RatingRow";
import {useState} from "react";

export default function LeaveComment() {
    const {handleSubmit, register, formState: { errors }} = useForm();
    const onSubmit = (data) => {
    };
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const onMouseEnter = (index) => {
        setHoverRating(index);
    };
    const onMouseLeave = () => {
        setHoverRating(0);
    };
    const onSaveRating = (index) => {
        setRating(index);
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
                            <div className="box flex">
                                {[1, 2, 3, 4, 5].map((index) => {
                                    return (
                                        <RatingRow
                                            key={"key"+index}
                                            index={index}
                                            rating={rating}
                                            hoverRating={hoverRating}
                                            onMouseEnter={onMouseEnter}
                                            onMouseLeave={onMouseLeave}
                                            onSaveRating={onSaveRating} />
                                    )
                                })}
                            </div>
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
