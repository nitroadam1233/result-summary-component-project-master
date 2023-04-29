import { Box, Typography } from "@mui/material";
import RoundContainer from "./RoundContainer";
import React from "react";

const LeftContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage:
          "linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%));",
        boxShadow: "4px 20px 20px 10px hsla(241, 100%, 89%, 0.185)",
        flexDirection: "column",
        width: {xs: 400, sm: 328, lg: 280},
        height: 380,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Typography
        level="h3"
        sx={{
          color: "hsl(241, 100%, 89%)",
          fontWeight: 800,
          pt: 3,
          fontSize: 16,
          wordSpacing: 0.2,
        }}
      >
        Your Result
      </Typography>
      <RoundContainer />
      <Typography
        level="h3"
        sx={{
          fontSize: 22,
          fontWeight: 650,
          color: "white",
          mt: 3
        }}
      >
        Great
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: 12,
          color: "hsl(241, 100%, 85%)",
          width: "60%",
          mt: 2
        }}
      >
        You scored higher than 65% of the people who have taken these tests. 
      </Typography>
    </Box>
  );
};

export default LeftContainer;
