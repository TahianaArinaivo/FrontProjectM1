import React from "react";
import { Box, CircularProgress, IconButton } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import ImageUpload from "./ImageUpload";
import { useAnalysCin } from "../../../hooks/useAnalysCin";
import { CinAnalysResult } from "./CinAnalysResult";
import { useRecoilState } from "recoil";
import userAtom from "../../../atom/userAtom";

import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

interface Props {
  handleNextDisabled?: (disabled: boolean) => void;
}

function Step1(props: Props) {
  const { isLoading, analysCinMutate, isSuccess, data } = useAnalysCin();
  const [Cin, setCin] = React.useState<File>({} as File);
  const [user, setUser] = useRecoilState(userAtom);

  const handleAnalysCIN = () => {
    analysCinMutate(Cin);
  };

  const cinUpload = (cin: File) => {
    setCin(cin);
  };

  

  React.useEffect(() => {
    if (props?.handleNextDisabled) {
      props?.handleNextDisabled(false);
    }
    if (isSuccess) {
      setUser(data);
    }
  }, [isSuccess]);

  return (
    <>
      <Box sx={{ width: "95%" }}>
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <Typography
              variant="h6"
              sx={{ marginBottom: "1rem", margin: "1rem",fontFamily: "'Work Sans', sans-serif" }}
            >
              Insérer votre Carte d'identité
            </Typography>
            <Typography sx={{ margin: "1rem", fontSize: "12px" }}>
              Selectionnez votre CIN en version PDF dans le repertoire de fichiers pour 
              valider le CIN concerner, puis selectionnez sur Analyser et laissez l'Intelligence Artificielle se charger de 
              la génération automatique de vos informations.
            </Typography>

            <Box
              sx={{
                width: "80%",
                height: "350px",
                display: "flex",
                justifyContent:"center",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "2rem",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
            >
              <ImageUpload cinUpload={cinUpload} />
            </Box>
            <Box
              sx={{
                position:"relative",
                display:"flex",
                flexDirection:"column",
                alignContent:"center",
                textAlign:"center",
                top:"-30%",
                left:"80%",
                width:"140px"
              }}
            >
              <IconButton
                sx={{
                  color:"#7874D6",
                }}
                onClick={handleAnalysCIN}
              >
                <DocumentScannerIcon fontSize="large"/>
              </IconButton>
              <Typography  sx={{fontWeight:"400",fontFamily: "'Work Sans', sans-serif",cursor:"pointer"}}>
                Analyser
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6}>
            <Typography
              variant="h6"
              align="center"
              sx={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Résustat de l'analyse
            </Typography>
            <Box
              sx={{
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
                marginTop: 1,
                height: "83%",
                //borderRadius: "5%",
              }}
            >
              {isLoading && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <CircularProgress />
                </Box>
              )}
              {isSuccess && <CinAnalysResult data={data} />}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Step1;
