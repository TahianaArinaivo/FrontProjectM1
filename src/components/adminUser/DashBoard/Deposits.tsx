import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { Paper, Box, Grid } from "@mui/material";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

interface Props {
  title: string;
  nbr: number;
  progress: number;
  color: string;
}

const LIST: Props[] = [
  {
    title: "HOMME",
    nbr: 100658,
    progress: 60,
    color: "#e57373",
  },
  {
    title: "FEMME",
    nbr: 100658,
    progress: 40,
    color: "#00b0ff",
  },
  {
    title: "TOTAL ENREGISTRER",
    nbr: 100658,
    progress: 30,
    color: "#64dd17",
  },
];

export default function Deposits() {
  return (
    <Grid container >
      {LIST.map((item, i) => {
        return (
          <React.Fragment  key={i}>
            <Grid
            spacing={1}
              item
              lg={3} 
              sm={3}
              xs={12}
              sx={{
                display: "inline-block",
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: "3rem",
                marginBottom: "2rem",
                fontFamily: "'Work Sans', sans-serif"
              }}
            >
              <Box >
                <Box>
                  <Paper
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "auto",
                      marginTop: "2rem",
                      width: "250px"
                    }}
                  >
                    <Grid container sx={{ p: 1 }}>
                      <Title>{item.title}</Title>
                      <Grid container spacing={0}>
                        <Grid item xs={8}>
                          <Typography component="p" variant="h6">
                            {item.nbr}
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <Box
                            sx={{
                              position: "relative",
                              display: "inline-flex",
                            }}
                          >
                            <CircularProgress
                              variant="determinate"
                              value={item.progress}
                              sx={{
                                color: item.color,
                              }}
                            />
                            <Box
                              sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: "absolute",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Typography
                                variant="caption"
                                component="div"
                                color="text.secondary"
                              >
                                {item.progress}%
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Box
                      sx={{
                        position: "relative",
                        p: 0,
                        m: 0,
                        width: "250px",
                        height: "10px",
                        borderRadius: "5px",
                        background: item.color,
                      }}
                    ></Box>
                  </Paper>
                </Box>
              </Box>
            </Grid>
          </React.Fragment>
        );
      })}
    </Grid>
  );
}
