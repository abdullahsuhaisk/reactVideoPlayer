import React from "react";
import { Button } from "../../components";
import { StepControllerWrapper } from "./StepControllerWrapper.style";

export default function StepController({ stepOptions }) {
  // console.log(stepOptions.isActive); it returns true or false value
  return (
    <StepControllerWrapper className="stepController">
      {/* Component 1<h2>Step {stepOptions.currentStep}</h2> */}
      {/* <p>Total Steps: {stepOptions.totalSteps}</p>
      <p>Is Active: {stepOptions.isActive}</p> */}
      <Button borderRadios={1} onClick={stepOptions.previousStep}>
        Previous Step
      </Button>
      <Button borderRadios={1} onClick={stepOptions.nextStep}>
        Next Step
      </Button>
      {/* <p>
        <Button borderRadios={1} onClick={() => stepOptions.goToStep(2)}>
          Step 2
        </Button>
      </p>
      <p>
        <Button borderRadios={1} onClick={stepOptions.firstStep}>
          First Step
        </Button>
      </p>
      <p>
        <Button borderRadios={1} onClick={stepOptions.lastStep}>
          Last Step
        </Button>
      </p> */}
    </StepControllerWrapper>
  );
}
