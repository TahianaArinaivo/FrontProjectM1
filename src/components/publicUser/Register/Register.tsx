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
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { Stack, useTheme } from "@mui/material";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../../../atom/userAtom";
import { useSignUp } from "../../../hooks/useSignUp";

import { ButtonProps } from "@mui/material/Button";
import { green } from "@mui/material/colors";

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
  const { data, isLoading, isSuccess, error, signUp } = useSignUp();


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
        Sex: "Masculin",
        Tel: user?.phone,
        NumCIN: user?.numCIN,
        ScanCIN: "localhost://test",
        Password: user?.password,
        SectionId: 1,
        UserCasierId: 1,
        UserDistrictId: 1,
        Role: "public"
      };
      signUp(data);
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
    setPassword(password);
  };

  const handlePhone = (phone: string) => {
    setPhone(phone);
  };

  const ColorButtonHome = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(green[700]),
    fontSize: 12,
    backgroundColor: "#7874D6",
    borderRadius: 15,
    "&:hover": {
      backgroundColor: "#3E3D6C",
    },
  }));

  React.useEffect(() => {
    if(isSuccess) {
      navigate('/');
    }
  }, [isSuccess])

  return (
    <Box
      sx={{ backgroundImage: "url(/background.jpg)", backgroundSize: "cover" }}
    >
      <Container
        component="main"
        maxWidth="xl"
        sx={{ position: "relative", height: "auto", mb: 0 }}
      >
        <Paper
          variant="outlined"
          sx={{
            m: { xs: 0, md: 0 },
            p: { xs: 0, md: 3 },
            border: "none",
            backgroundColor: "rgba(0, 0, 0, 0.645)",
            color: "#f1f1f1",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              pt: 0,
              pb: 2,
              fontFamily: "'Work Sans', sans-serif",
            }}
          >
            <Stack>
              <ColorButtonHome
                onClick={() => navigate("/")}
                startIcon={<ArrowBackIcon fontSize="small" />}
              >
                Accueil
              </ColorButtonHome>
            </Stack>

            <Typography
              sx={{
                width: "70%",
                marginLeft: "20rem",
                fontSize: "25px",
                p: 1.5,
                fontFamily: "'Work Sans', sans-serif",
              }}
            >
              Veuillez bien suivre les étapes suivants :
            </Typography>
          </Box>

          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step  key={label}>
                <StepLabel>
                  <Typography  sx={{ fontFamily: "'Work Sans', sans-serif",color:"#f1f1f1" }}>
                  {label}
                  </Typography>
                  </StepLabel>
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
              <Box sx={{ position: "fixed", top: "60%" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ ml: 1, borderRadius: 10 }}>
                    <ArrowBackIosIcon
                      sx={{ color: "#7874D6" }}
                      fontSize="large"
                    />
                  </Button>
                )}

                <Button
                  onClick={handleNext}
                  sx={{
                    position: "fixed",
                    right: "2rem",
                    borderRadius: 10,
                    color: "#7874D6",
                    fontWeight: 600,
                  }}
                  disabled={disable}
                >
                  {activeStep === steps.length - 1 ? (
                    "S'inscrire"
                  ) : (
                    <ArrowForwardIosIcon
                      sx={{ color: "#7874D6" }}
                      fontSize="large"
                    />
                  )}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </Box>
  );
}
