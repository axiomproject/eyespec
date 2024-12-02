import React from "react";
import "../styles/Layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faEye } from "@fortawesome/free-solid-svg-icons";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const buttons = [
  {
    title: "WELCOME!",
    description:
      "At Eye Spec, we're dedicated to the health and clarity of your vision. Your eyesight is a precious gift, and it's crucial to protect it. Regular eye tests are a simple yet essential step in maintaining good eye health and ensuring that you see the world in all its brilliance. Our user-friendly online eye test platform provides a convenient and informative way to check your vision from the comfort of your own home. Whether you're due for a check-up or simply curious about your eye health, Eye Spec is here to help.",
  },
  {
    title: "NEAR VISION",
    description:
      "Test your close-up vision, crucial for activities like reading and using digital devices. This assessment will help identify any issues related to presbyopia or other near vision problems.",
  },
  {
    title: "",
    description:
      "Regular eye tests are vital for both vision and overall health, as they can uncover early signs of various conditions. Maintaining good eye health means adopting healthy habits. At Eye Spec, we're here to guide you.",
  },
  {
    title: "",
    description:
      "Ready to prioritize your vision and well-being? Start your eye test with a simple click – just hit 'Start Test' below.",
  },
];

const Home = () => {
  const theme = useTheme();
  const textColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const iconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const buttonColor = theme.palette.mode === "dark" ? "#0094FF" : "#0094FF";
  const borderColors = theme.palette.mode === "dark" ? "#fff" : "#000";

  return (
    <div className="home-container">
      <div className="button-row">
        <div className="main-button" style={{ borderColor: borderColors }}>
          <Typography variant="h3" style={{ color: textColor }}>
            {buttons[0].title}
          </Typography>
          <Typography variant="body1" style={{ color: textColor }}>
            {buttons[0].description}
          </Typography>
        </div>
      </div>
      <div className="home-row">
        <div className="first-button" style={{ borderColor: borderColors }}>
          <FontAwesomeIcon
            icon={faCircleInfo}
            size="3x"
            transform="up-10"
            style={{ color: iconColor }}
          />
          <Typography variant="h3" style={{ color: textColor }}>
            {buttons[2].title}
          </Typography>
          <Typography variant="body1" style={{ color: textColor }}>
            {buttons[2].description}
          </Typography>
        </div>
        <div className="sariling-row">
          <div className="second-button" style={{ borderColor: borderColors }}>
            <Typography variant="h3" style={{ color: textColor }}>
              {buttons[3].title}
            </Typography>
            <Typography
              variant="body1"
              style={{ color: textColor, marginTop: -20 }}
            >
              {buttons[3].description}
            </Typography>
          </div>
          <Link to="/EyeTest">
            <Button
              className="material"
              variant="contained"
              size="large"
              style={{ backgroundColor: buttonColor, color: textColor }}
            >

              START BUTTON 

              START TEST
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
