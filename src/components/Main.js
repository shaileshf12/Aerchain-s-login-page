import React from "react";
import { Grid, Box } from "@mui/material";
import Navbar from "./Navbar";
import Welcome from "./Welcome";

function Main() {
  return (
      <Box sx={{flexGrow:'1'}}>
        <Grid container>
            <Navbar/>
            <Grid item lg={8} xs={8}>
                <Welcome/>
            </Grid>
            <Grid item lg={4} xs={4}>
                3
            </Grid>
        </Grid>
      </Box>
  );
}

export default Main;
