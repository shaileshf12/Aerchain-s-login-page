import React from "react";
import { Grid } from "@mui/material";
import { Toolbar } from "@mui/material";
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <Grid item lg={12} xs={12}>
      <Toolbar component="nav" variant="dense" sx={{ boxShadow:'0 2px 8px 0 rgba(0, 0, 0, 0.2)', padding:'.6rem'}}>
            <img src={logo} alt="logo" style={{width:'12vw'}}/>
      </Toolbar>
    </Grid>
  );
}

export default Navbar;
