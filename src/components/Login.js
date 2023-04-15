import React from "react";
import { border, Box, fontWeight } from "@mui/system";
import { Typography } from "@mui/material";
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from '@mui/material/FormControl';
import { TextField } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Button } from "@mui/material";
import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import "./style.css";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import chatIcon from "../assets/chatIcon.webp";
import { motion } from "framer-motion";

function Login() {
  return (
    <Box
      sx={{
        // padding: "2rem",
        marginLeft: "4rem",
        display: "flex",
        justifyContent: "space-between",
        // border:'1px solid black',
        // height:'80vh',
        // width:'29.5vw'
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems:'start',
          flexWrap: "wrap",
          gap: "1.5rem",
          width: "17rem",
          // border:'1px solid black',
          marginTop: "1rem"
        }}
      >
        <Typography variant="h5" sx={{fontSize:'2vw', fontFamily:"'Poppins', sans-serif"}}>
          Supplier Login
        </Typography>

        <div style={{}}>
          <p style={{ fontSize: "1vw" }}>E-mail</p>
          <TextField
            id="input-with-icon-textfield"
            variant="outlined"
            placeholder="Enter email address"
            type="email"
            InputProps={{
              style: {
                height: "4.5vh",
                width: "20vw",
                fontSize: "1vw",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon sx={{ height: "3.5vh" }} />
                </InputAdornment>
              ),
            }}
          />

          <p style={{ fontSize: "1vw" }}>Password</p>
          <TextField
            id="input-with-icon-textfield"
            variant="outlined"
            sx={{}}
            placeholder="Password"
            type="password"
            InputProps={{
              style: {
                height: "4.5vh",
                width: "20vw",
                fontSize: "1vw",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <HttpsOutlinedIcon sx={{ height: "1.5vw" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityOffOutlinedIcon
                    sx={{ height: "1.5vw", cursor: "pointer" }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <Button variant="contained" sx={{ width: "20vw", height: "4.5vh", textTransform: "none", fontSize:'1vw' }}>
            Log In
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <FormControlLabel
              sx={{ "& .MuiFormControlLabel-label": { fontSize: "1vw" } }}
              control={<Checkbox size="small" />}
              label="Remember Me"
            />
            <p
              style={{ fontSize: "1vw", color: "#1976d2" }}
              className="forgetPass"
            >
              Forgot Password
            </p>
          </Box>
        </div>
        <Box sx={{ display: "flex" }}>
          <span
            style={{
              border: ".01rem solid rgb(223, 219, 219)",
              width: "8vw",
              height: "0",
            }}
          />
          <p style={{ margin: "1vw", marginTop: "-1.4vh", fontSize:'1.2vw' }}>or</p>
          <span
            style={{
              border: ".01rem solid rgb(223, 219, 219)",
              width: "8vw",
              height: "0",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              width: "20vw",
              height: "4.5vh",
              textTransform: "none",
              color: "black",
              fontSize: "1vw",
              color: "rgb(104, 101, 101)",
              fontWeight: "1vw",
              borderColor: 'rgb(117, 114, 114)'
            }}
          >
            <PhoneAndroidOutlinedIcon sx={{ height: "3vh" }} />
            <p style={{}}>Continue using OTP</p>
          </Button>
          <p style={{ fontSize: ".9vw" }}>
            You do not have an account?{' '}
            <span style={{ textDecoration: "underline", color: "#1976d2", cursor:'pointer' }}>
              Join Now
            </span>
          </p>
        </Box>
      </Box>

      {/* <QuestionAnswerOutlinedIcon sx={{color:'blue'}}/> */}
      <motion.div
        className="main-chat"
        style={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "center",
          cursor:'pointer',
          backgroundColor:'white',
          marginTop:'12vh'
        }}
        whileHover={{ x: [0, -45], transition: { duration: "1" } }}
      >
        <motion.div style={{ padding:'.5rem'}} className="chat">
          <img src={chatIcon} width="30vw" height="30vw" style={{}} />
        </motion.div>
        <motion.div className="live-chat" alignSelf="center">LIVE CHAT</motion.div>
      </motion.div>
    </Box>
  );
}

export default Login;
