import React from "react";
import { Grid, Box } from "@mui/material";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Login from "./Login";

function Main() {
  return (
    <Box sx={{ flexGrow: "1", height:'100vh'}}>
      <Grid container>
        <Navbar />
        <Grid container item spacing="5vw" sx={{height:'100vh'}}>
        <Grid item lg={7.7} xs={7.7}>
          <Welcome />
        </Grid>
        <Grid item lg={4.3} xs={4.3}>
          <Login />
        </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
