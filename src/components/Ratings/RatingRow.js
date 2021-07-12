import React from "react";
import Star from "./Star";
import "./RatingRow.css"

export default function RatingRow({ index, rating, hoverRating, onMouseEnter, onMouseLeave, onSaveRating }) {
    const fill = React.useMemo(() => {
        if (hoverRating >= index) {
            return '#FD8888';
        } else if (!hoverRating && rating >= index) {
            return '#FD8888';
        }
        return 'none';
    }, [rating, hoverRating, index]);

    return (
        <div
            className ="cursor-pointer"
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave()}
            onClick={() => onSaveRating(index)}>
            <Star
                fill={fill}
            />
        </div>
    )
}