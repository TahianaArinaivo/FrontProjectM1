import { Box, Button, Typography, CircularProgress, IconButton } from '@mui/material'
import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import Input from "@mui/joy/Input";
import ImageUpload from "./ImageUpload";
import { useAnalysCin } from "../../../hooks/useAnalysCin";
import { CinAnalysResult } from "./CinAnalysResult";
import { useRecoilState } from "recoil";
import userAtom from "../../../atom/userAtom";

import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

interface Props {
  handleNextDisabled?: (disabled: boolean) => void;
}


function Step3(props: Props) {

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
    <div>
      <Box sx={{
          margin:"7rem",
          marginTop: "30px",
          height:"100%", 
          }}>
      <Grid xs={6}>
            <Typography
              variant="h6"
              align="center"
              sx={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Vérifier que vos informations sont toutes correctes
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
                <CinAnalysResult data={user} />
            </Box>
          </Grid>
      </Box>
    </div>
  )
}

export default Step3