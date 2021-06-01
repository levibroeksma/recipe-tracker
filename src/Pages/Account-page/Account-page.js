import './Account-page.css'
function AccountPage() {
    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Account</h1>
                <div className="account-page-wrapper">
                    <div className="login-holder">
                        <h5>Returning user</h5>
                        <p>Welcome back, please enter your account
                            details below to continue.</p>
                    </div>
                    <div className="account-devider"></div>
                    <div className="register-holder">
                        <h5>New? Register below!</h5>
                        <p>Please pick a username and enter your email
                            address below.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountPage;