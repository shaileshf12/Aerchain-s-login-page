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
        width: "70%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid black",
        backgroundImage: `url(${dots}), url(${dots})`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "top 5px right 30px, bottom 5px left 30px",
        backgroundSize: "6rem",
        height: "21.5rem",
      }}
    >
      <div style={{width: "100%", height: "100%" }}>
        <Carousel
          style={{ display: "none"}}
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
                  height: "20rem",
                  width: "100%",
                }}
              >
                {/* <img src={card.image} alt="" style={{height:'5rem'}}/> */}
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "60%",
                    height: "17rem",
                  }}
                >
                  <img
                    src={card.image}
                    alt=""
                    style={{ width: "5rem", height: "5rem" }}
                  />
                  {/* <CardHeader>
                
                </CardHeader> */}
                  <Typography variant="subtitle2" align="center" sx={{fontSize:'1.05vw'}}>
                    {card.heading}
                  </Typography>
                  <CardContent>
                    <Typography variant="body2" align="center" sx={{fontSize:'1vw'}}>
                      {card.message}
                    </Typography>
                  </CardContent>
                  <Typography variant="caption" display="block" sx={{fontSize:'1vw'}}>
                    <b>{card.company}</b>
                  </Typography>
                  <Typography variant="caption" display="block" sx={{fontSize:'.8vw'}}>
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
