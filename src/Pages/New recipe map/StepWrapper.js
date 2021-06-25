import {
    Route,
    Link,
    useLocation
} from "react-router-dom";

import Step1New from "./Step1New";
import Step2New from "./Step2New";
import Step3New from "./Step3New";
function StepWrapper() {
    const location = useLocation();
    return (
        <>
            <nav className="container">
                <ul className="steps">
                    <li className={location.pathname === "/step1new" ? "active" : ""}>
                        <Link to="/step1new">Step 1</Link>
                    </li>
                    <li className={location.pathname === "/step2new" ? "active" : ""}>
                        <Link to="/step2new">Step 2</Link>
                    </li>
                    <li className={location.pathname === "/step3new" ? "active" : ""}>
                        <Link to="/step3new">Result</Link>
                    </li>
                </ul>
            </nav>
            <Route exact path="/step1new" component={Step1New} />
            <Route path="/step2new" component={Step2New} />
            <Route path="/step3new" component={Step3New} />
        </>
    )
}

export default StepWrapper;