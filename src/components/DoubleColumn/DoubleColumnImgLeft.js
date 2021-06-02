import React from "react";
import './DoubleColumn.css'

function DoubleColumnImgLeft({image, text, title, alt}) {
    return (
        <div className="column-wrapper">
                <section>
                    <img src={image} alt={alt}/>
                </section>
                <section>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </section>
        </div>
    )
}

export default DoubleColumnImgLeft;