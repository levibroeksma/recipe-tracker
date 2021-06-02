import React from "react";
import './DoubleColumn.css'
function DoubleColumnImgRight({image, text, title, alt}) {
    return (
        <div className="column-wrapper">
            <section>
                <h2>{title}</h2>
                <p>{text}</p>
            </section>
            <section>
                <img src={image} alt={alt}/>
            </section>
        </div>
    )
}

export default DoubleColumnImgRight;