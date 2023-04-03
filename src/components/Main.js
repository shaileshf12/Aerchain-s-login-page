import React from "react";
import { Grid, Box } from "@mui/material";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Login from "./Login";

function Main() {
  return (
    <Box sx={{ flexGrow: "1" }}>
      <Grid container>
        <Navbar />
        <Grid item lg={7.8} xs={7.8}>
          <Welcome />
        </Grid>
        <Grid item lg={4.2} xs={4.2}>
          <Login />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
