import React from "react";
import { TrafficBySex } from "./trafficBySex";
import { Box, Container, Grid } from "@mui/material";
import { TotalProfit } from "./total-profit";
import { TasksProgress } from "./tasks-progress";
import { TotalCustomers } from "./total-customers";
import { Budget } from "./budget";
import { Sales } from "./sales";

export default function Stats() {
  return (
    <>
      <Box>
        <Box>

            <Container maxWidth={false}>
              <Grid container spacing={3}>
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <Budget />
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                  <TotalCustomers />
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                  <TasksProgress />
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                  <TotalProfit sx={{ height: "100%" }} />
                </Grid>
                <Grid item lg={8} md={12} xl={9} xs={12}>
                  <Sales />
                </Grid>
                <Grid item lg={4} md={6} xl={3} xs={12}>
                  <TrafficBySex sx={{ height: "100%" }} />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
    </>
  );
}
