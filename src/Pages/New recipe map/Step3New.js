import {useStateMachine} from "little-state-machine";
import updateActions from "./updateActions";

function Step3New() {
    const {state} = useStateMachine(updateActions());
    return (
        <div className="container">
            <h2>Result</h2>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    )
}
export default Step3New;