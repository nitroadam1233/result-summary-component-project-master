import React from "react";
import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from "@mui/material";
import Skill from "./Skill";

const RightContainer = () => {
  const ContinueButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 13,
    borderRadius: 20,
    backgroundColor: "rgb(48, 59, 89)",
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: {xs: 400, sm: 328, lg: 328 },
        height: 380,
        alignItems: "center",
        justifyContent: "flex-start",
        border: "1px solid rgba(0, 0, 0, 0.02)",
        borderRadius: 8,
        boxShadow: "4px 15px 25px 2px hsla(241, 100%, 89%, 0.301)",
        zIndex: -1,
        right: {xs: "0%", lg: "5%"},
      }}
    >
      <Typography
        sx={{
          pt: 3,
          pr: {xs: 0, lg: 10},
          color: 'hsl(224, 30%, 27%)',
          fontWeight: 600,
          fontSize: 17
        }}
      >
        Summary
      </Typography>
      <Skill />
      <ContinueButton 
        variant="contained"
        sx=
        {{
          px: 9.5,
          py: 1.2,
          mt: 3,
          display: "flex",
          justifyContent: "center",
          ml: {xs: 0, lg: 7},
          fontWeight: "bold",
        }}
      >
        Continue
      </ContinueButton>
    </Box>
  );
};

export default RightContainer;
