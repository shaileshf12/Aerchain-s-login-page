import React from "react";
import { Box } from "@mui/system";
import dots from "../assets/dots.svg";
import Carousel from "react-material-ui-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cardsData from "../data/cards";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

function Feedbacks() {
  return (
    <Box
      sx={{
        width: "40vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid black",
        backgroundImage: `url(${dots}), url(${dots})`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "top 5px right 30px, bottom 5px left 30px",
        backgroundSize: "8.5vw",
        height: "50vh",
        
      }}
    >
      <div style={{ width: "100%", height: "42vh"}}>
        <Carousel
          style={{ display: "none" }}
          animation="slide"
          indicators={false}
          interval="8000"
          duration="3000"
          swipe={false}
          autoPlay={true}
          navButtonsAlwaysInvisible={true}
        >
          {cardsData.map((card) => {
            return (
              <div
                key={card.message}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "42vh",
                  width: "100%",
                  // border: "1px solid white" 
                }}
              >
                {/* <img src={card.image} alt="" style={{height:'5rem'}}/> */}
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "23vw",
                    // height: "17rem",
                    borderRadius: ".5vw",
                    height: "42vh",
                  }}
                >
                  <img
                    src={card.image}
                    alt=""
                    style={{ width: "5vw", height: "10vh", marginTop:'1vh' }}
                  />
                  {/* <CardHeader>
                
                </CardHeader> */}
                  <Typography
                    variant="subtitle2"
                    align="center"
                    sx={{ fontSize: "1vw" }}
                  >
                    {card.heading}
                  </Typography>
                  <CardContent>
                    <Typography
                      variant="body2"
                      align="center"
                      sx={{ fontSize: ".9vw", color: "rgb(117, 114, 114)" }}
                    >
                      {card.message}
                    </Typography>
                  </CardContent>
                  <Typography
                    variant="caption"
                    display="block"
                    sx={{ fontSize: ".9vw" }}
                  >
                    <b>{card.company}</b>
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontSize: ".8vw" }}
                  >
                    {card.address}
                  </Typography>
                </Card>
              </div>
            );
          })}
        </Carousel>
      </div>
    </Box>
  );
}

export default Feedbacks;
