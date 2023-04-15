import React from "react";
import { Box } from "@mui/system";
import backgroundImg from "../assets/backgroundImg.svg";
import { Typography } from "@mui/material";
import Feedbacks from "./Feedbacks";
import Partners from "./Partners";

function Welcome() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5vh",
        alignItems: "center",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: '100%'
      }}
    >
      <Typography
        variant="body1"
        sx={{
          marginTop: "1rem",
          fontSize: "1.8vw",
          color: "white",
          fontFamily:"'Poppins', sans-serif",
        }}
      >
        Welcome to Aerchain
      </Typography>
      <Feedbacks />
      <Partners />
    </Box>
  );
}

export default Welcome;
