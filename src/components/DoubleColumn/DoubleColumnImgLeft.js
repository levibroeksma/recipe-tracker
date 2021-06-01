import React from "react";
import './DoubleColumn.css'

function DoubleColumnImgLeft({image, text, title, alt}) {
    return (
        <div className="page-wrapper-inner imgLeft">
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