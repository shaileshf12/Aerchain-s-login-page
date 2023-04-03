import React from "react";
import { borderRadius, Box, display, width } from "@mui/system";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import partnerLogos from "../data/partnerLogos";

function Partners() {
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem', padding:'1rem'}}>
      <Typography
        variant="caption"
        display="block"
        sx={{ fontSize: "1.1vw", color: "white" }}
      >
        Partner in our success journey
      </Typography>
      <div
        style={{
          display:'flex',
          gap:'1rem',
          width: "45vw",
          // height: "2.5rem",
          backgroundColor: "white",
          // border: "1px solid red",
          overflow: "hidden",
          backgroundColor:'#3388eb'
        }}
      >
        <motion.div
          drag="x"
          style={{ display: "flex", gap: "1rem", backgroundColor:'#3388eb'}}
          animate={{x:[600, -2855]}}
          transition={{duration:'41.46', ease:'linear', repeat:Infinity}}
        >
          {partnerLogos.map((item) => {
            return (
              <motion.div
                style={{
                  minWidth: "8rem",
                  height: "2.1rem",
                  backgroundColor:'white',
                  borderRadius:'.2rem',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center'
                }}                
              >
                <img src={`${item}`} height="80%" width="80%"/>
              </motion.div>
            );
          })}
        </motion.div>


        <motion.div
          drag="x"
          style={{ display: "flex", gap: "1rem", backgroundColor:'#3388eb'}}
          animate={{x:[0, -3455]}}
          transition={{duration:'41.46', ease:'linear', repeat:Infinity, delay:'7.2'}}
        >
          {partnerLogos.map((item) => {
            return (
              <motion.div
                style={{
                  minWidth: "8rem",
                  height: "2.1rem",
                  backgroundColor:'white',
                  borderRadius:'.2rem',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center'
                }}                
              >
                <img src={`${item}`} height="80%" width="80%"/>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Box>
  );
}

export default Partners;
