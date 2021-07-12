import "./Home-page.css"

export default function HomePage() {
    return (
        <>
            <div className="page-wrapper">
                <div className="page-wrapper-inner">
                    <h1>Welcome to <img src={require('../../logo.svg').default} alt="logo RecipeTracker"/></h1>
                    <div className="welcome-text">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                    </div>
                </div>
            </div>
        </>
    )
}