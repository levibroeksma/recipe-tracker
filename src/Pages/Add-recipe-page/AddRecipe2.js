import Step1 from "./Step1";
import {useState} from "react";
import Button from "../../components/Button/Button";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";


export default function AddRecipe2() {
    const [step, setStep] = useState(1);

    return (
        <div className="page-wrapper">
            <div className="page-wrapper-inner">
                <h1>Add your recipe</h1>
                    {step === 1 && (
                        <>
                            <Step1 />
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <Step2 />
                        </>
                    )}
                    {step === 3 && (
                        <>
                            <Step3 />
                        </>
                    )}
                    {step === 4 && (
                        <>
                            <Step4 />
                        </>
                    )}
                    {step === 5 && (
                        <>
                            <Step5 />
                        </>
                    )}
                    <div className="button-wrapper">
                        <Button
                            onClickEvent={() => setStep(step - 1)}
                            buttonTitle="Previous step"
                            classNameButton="btn"
                            disabled={step === 1}
                            type="submit"
                        />
                        <Button
                            onClickEvent={() => setStep(step + 1)}
                            buttonTitle="Next step"
                            classNameButton="btn"
                            disabled={step === 5}
                            type="submit"
                        />
                    </div>

            </div>

        </div>
    )
}