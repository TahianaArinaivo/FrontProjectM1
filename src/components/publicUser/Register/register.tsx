import React, { ReactNode } from "react";
import { Box, Paper, StepContent } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import AppBarRegister from "./appBar";
import Step1 from "./step1";
import Step3 from "./step3";
import Step2 from "./step2";

interface IRegister {
  label: string,
  component: ReactNode,
}

function Register() {
  const steps = ["Scanne CIN", "Email et Mot de passe", "Verification"];

  const [activeStep, setActiveStep] = React.useState(0);

  const stepsRegister:IRegister[] = [
    {
      label: 'Scanne CIN',
      component: <Step1/>,
    },
    {
      label: 'Email et Mot de passe',
      component: <Step2/>,
    },
    {
      label: 'Verification',
      component: <Step3/>,
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Box>
        <Box sx={{ marginBottom: "5rem" }}>
          <AppBarRegister />
        </Box>

        <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {stepsRegister.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.component}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
      </Box>
    </>
  );
}

export default Register;
