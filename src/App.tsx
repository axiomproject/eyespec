import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Page404 from "./pages/Page404";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch } from "@mui/material";
import { Button } from "@mui/material";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
    setShowAnimation(true);
  };

  useEffect(() => {
    if (showAnimation) {
      const timeout = setTimeout(() => {
        setShowAnimation(false);
      }, 500); // Adjust the duration as needed
      return () => clearTimeout(timeout);
    }
  }, [showAnimation]);

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light", // handle the dark mode state on toggle
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
      children: routes,
    },
  ]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          backgroundColor: "#0094FF",
        }}
      >
        <Button
          className="sunbutton"
          variant="contained"
          color="primary"
          disableElevation
          onClick={toggleDarkTheme}
          style={{ borderRadius: 100, marginRight: 0 }}
          startIcon={toggleDarkMode ? <Brightness7Icon /> : <Brightness5Icon />}
        />
      </div>
      <RouterProvider router={router} />{" "}
    </ThemeProvider>
  );
}

export default App;
