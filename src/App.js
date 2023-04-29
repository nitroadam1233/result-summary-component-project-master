import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import ParentContainer from "./components/parentContainer/ParentContainer";

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Hanken Grotesk", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ParentContainer />
    </ThemeProvider>
  );
};

export default App;
