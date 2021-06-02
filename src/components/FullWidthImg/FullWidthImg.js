import "./FullWidthImg.css"

function FullWidthImg({image, title}) {
    return (
        <>
            <section className="bgImg">
                <img src={image} alt={title}/>
            </section>
        </>
    )
}

export default FullWidthImg;