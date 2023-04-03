import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

function Partners() {
  return (
    <Box>
      <Typography
        variant="caption"
        display="block"
        sx={{ fontSize: ".9vw", color: "white" }}
      >
        Partner in our success journey
      </Typography>
      <motion.div
        style={{
          display:'flex',

          width: "30rem",
          backgroundColor: "white",
          border: "1px solid red",
          overflow: "hidden"
        }}
      >
        <motion.div
          drag="x"
          style={{ display: "flex", gap: ".5rem", position: "relative"}}
          animate={{x:[400, -900]}}
          transition={{duration:'14', ease:'linear', repeat:Infinity}}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item) => {
            return (
              <motion.div
                style={{
                  minWidth: "5rem",
                  height: "2rem",
                  border: "1px solid black",
                }}
                // animate={{opacity:[1,0]}}
                
              >{item}</motion.div>
            );
          })}
        </motion.div>


        <motion.div
          drag="x"
          style={{ display: "flex", gap: ".5rem", position: "relative"}}
          animate={{x:[350, -950]}}
          transition={{duration:'14', ease:'linear', repeat:Infinity, delay:'5'}}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item) => {
            return (
              <motion.div
                style={{
                  minWidth: "5rem",
                  height: "2rem",
                  border: "1px solid black",
                }}
                // animate={{opacity:[1,0]}}
                
              >{item}</motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </Box>
  );
}

export default Partners;
