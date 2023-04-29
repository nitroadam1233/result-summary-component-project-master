import React from "react";
import { Box, Typography } from "@mui/material";

const RoundContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage:
          "linear-gradient(hsla(256, 72%, 45%, 1), hsla(241, 72%, 46%, 0))",
        flexDirection: "column",
        alignItems: "center",
        mt: 2.5,
        py: 3,
        px: 5.5,
        borderRadius: 100,
      }}
    >
      <Typography
        sx={{
          fontSize: 50,
          fontWeight: 800,
          color: "white",
        }}
      >
        76
      </Typography>

      <Typography
        sx={{
          fontSize: 13,
          color: "rgb(128,111,255)",
        }}
      >
        of 100
      </Typography>
    </Box>
  );
};

export default RoundContainer;
