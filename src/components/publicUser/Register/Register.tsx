import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../../../atom/userAtom";
import { useSignUp } from "../../../hooks/useSignUp";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Sindwai
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Scan CIN", "Email & Mot de passe", "Verification"];

function getStepContent(
  step?: any,
  handleNextDisabled?: (disable: boolean) => void,
  handlePhone?: (phone: string) => void,
  handlePassword?: (password: string) => void
) {
  switch (step) {
    case 0:
      return <Step1 handleNextDisabled={handleNextDisabled} />;
    case 1:
      return (
        <Step2 handlePhone={handlePhone} handlePassword={handlePassword} />
      );
    case 2:
      return <Step3 />;
    default:
      throw new Error("Unknown step");
  }
}

const defaultTheme = createTheme();

export default function Register() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const [disable, setDisable] = React.useState(true);
  const [user, setUser] = useRecoilState(userAtom);
  const [phone, setPhone] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const { data, isLoading, error, signIn } = useSignUp();


  const handleNext = () => {
    if (activeStep === 1) {
      console.log("password and phone", password, ",", phone);
      const currentUser = {
        ...user,
        password: password,
        phone: phone,
      };
      setUser(currentUser);
    }
    if (activeStep === 2) {
      const data = {
        Name: user?.name,
        FirstName: user?.lastName,
        Birthday: user?.birth,
        Birthplace: user?.birthplace,
        Address: user?.address,
        FathersName: user?.fatherName,
        MothersName: user?.motherName,
        PlaceOfIssue: "antananarivo",
        Sex: "Feminin",
        Tel: user?.phone,
        NumCIN: user?.numCIN,
        ScanCIN: "localhost://test",
        Password: user?.password,
        SectionId: 1,
        UserCasierId: 1,
        UserDistrictId: 1
      };
      signIn(data);
    }
    setActiveStep((prevStep) => prevStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleNextDisable = (value: boolean) => {
    setDisable(value);
  };

  const handlePassword = (password: string) => {
    console.log("password:", password);
    setPassword(password);
  };

  const handlePhone = (phone: string) => {
    console.log("phone:", phone);
    setPhone(phone);
  };

  return (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Container component="main" maxWidth="lg" sx={{ mb: 0 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 1, md: 0 }, p: { xs: 2, md: 3 } }}
          >
            <Box>
              <Button
                component="a"
                startIcon={<ArrowBackIcon fontSize="small" />}
                onClick={() => navigate("/")}
              >
                Accueil
              </Button>
              <Typography component="h1" variant="h4" align="center">
                CINDIA
              </Typography>
            </Box>

            <Stepper activeStep={activeStep} sx={{ pt: 3 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Terminer
                </Typography>
                {/* <Typography variant="subtitle1">Sur sur</Typography> */}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(
                  activeStep,
                  handleNextDisable,
                  handlePhone,
                  handlePassword
                )}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Revenir
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                    disabled={disable}
                  >
                    {activeStep === steps.length - 1 ? "S'inscrire" : "Suivant"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
            <Copyright />
          </Paper>
        </Container>
      </ThemeProvider>
  );
}
