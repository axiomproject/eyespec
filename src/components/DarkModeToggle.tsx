import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch } from "@mui/material";

interface DarkModeToggleProps {
  initialDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  initialDarkMode,
  toggleDarkMode,
}) => {
  const [toggleDarkModeState, setToggleDarkModeState] =
    useState(initialDarkMode);

  const toggleDarkTheme = () => {
    setToggleDarkModeState(!toggleDarkModeState);
    toggleDarkMode();
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkModeState ? "dark" : "light",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Switch checked={toggleDarkModeState} onChange={toggleDarkTheme} />
      </div>
    </ThemeProvider>
  );
};

export default DarkModeToggle;
