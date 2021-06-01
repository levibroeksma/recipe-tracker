import CustomerServiceAlert from "../../components/CustomerServiceAlert/CustomerServiceAlert";


function ThankYou() {
    return (
        <>
        <div className="page-wrapper">
            <h1>Thank you!</h1>
            <div className="thank-you-holder">
                <div className="text-holder">
                    <p>Thanks you so much for  filling out our  contact form! One of our support employees will contact you as soon as possible!</p>
                    <h5> The RecipeTracker Team</h5>
                </div>
            </div>
        </div>
            <CustomerServiceAlert/>
        </>
    )
}

export default ThankYou;