import React from "react";
import {StateMachineProvider, createStore} from "little-state-machine";
import {BrowserRouter as Router} from "react-router-dom";

import StepWrapper from "./StepWrapper";

createStore({
    yourRecipe: {
        recipeTitle: "",
        recipeCaption: "",
        ingredients: {},
    }
});

function Test() {
    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Test</h1>
                <Router>
                    <StepWrapper/>
                </Router>
            </div>
        </div>
    )
}

export default Test;