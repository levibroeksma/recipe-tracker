import "./Leave-comment.css"
import {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import RatingRow from "../Ratings/RatingRow";
import {authContext} from "../../contexts/AuthContext";
import axios from "axios";

export default function LeaveComment({recipeId}) {
    const {handleSubmit, register, formState: {isValid, errors }} = useForm({
        mode: "onChange"
    });
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const {user} = useContext(authContext);

    async function placeReview(data) {
        const reviewData = {
            recipeId: recipeId,
            review: data.review,
            stars: rating,
            userCountry: user.country,
            username: user.username
        }
        try {
            const response = await axios.post("http://localhost:8080/api/reviews", reviewData)
            window.location.reload(false)
        } catch (e) {
            console.error("Something went wrong, please try again. " + e)
        }
    }

    // Leave rating with stars
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
            <form onSubmit={handleSubmit(placeReview)}>
                <Textarea
                    name="review"
                    required={true}
                    labelId="leaveCommentId"
                    register={register}
                    errors={errors}
                    maxLength={1000}
                    maxLengthError="You can't use more then 1000 characters."
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
                        disabled={rating === 0 || !isValid}
                    />
                </div>
            </form>
        </section>
    )
}
