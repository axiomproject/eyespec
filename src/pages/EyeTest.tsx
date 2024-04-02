import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faGlasses,
  faTint,
  faExclamationTriangle,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

const buttons = [
  {
    title: "DISTANCE VISION",
    description:
      "Assess your ability to see distant objects clearly. Our distance vision test will help you determine if you have any refractive errors that may affect your vision, such as nearsightedness or farsightedness.",
    backCard:
      "Explore exercises and tips to improve your distance vision. Our detailed insights will guide you on maintaining optimal eye health for clear vision, especially for activities like driving and outdoor pursuits.",
    icon: faEye,
    route: "/DistanceVision",
  },
  {
    title: "NEAR VISION",
    description:
      "Test your close-up vision, crucial for activities like reading and using digital devices. This assessment will help identify any issues related to presbyopia or other near vision problems.",
    backCard:
      "Discover strategies and techniques to enhance your near vision. Our recommendations and resources will assist you in managing presbyopia and other near vision challenges for comfortable reading and digital screen usage.",
    icon: faGlasses,
    route: "/NearVision",
  },
  {
    title: "DRY EYE",
    description:
      "Explore the symptoms and potential causes of dry eye syndrome. This section provides information and guidance on managing and preventing dry eye, a common eye condition that can affect your comfort and vision.",
    backCard:
      "Find effective remedies and lifestyle adjustments to alleviate dry eye symptoms. Our comprehensive guide offers practical solutions and preventive measures to ensure eye comfort and clarity of vision.",
    icon: faTint,
    route: "/dryeye",
  },
  {
    title: "ASTIGMATISM",
    description:
      "Learn about astigmatism, a common refractive error that can blur your vision. Take our test to assess if you might have astigmatism and understand how it can be corrected with eyeglasses or contact lenses.",
    backCard:
      "Explore corrective options and treatment approaches for astigmatism. Our informative content will help you understand this common condition and navigate choices such as eyeglasses or contact lenses for sharper vision.",
    icon: faExclamationTriangle,
    route: "/Astigmatism",
  },
  {
    title: "COLOR BLINDNESS",
    description:
      "Discover the world of color perception. This test will evaluate your color vision and help you understand whether you have any form of color blindness, which can impact how you perceive and distinguish colors in everyday life.",
    backCard:
      "Gain insights into living with color blindness and strategies for color perception. Our test results will provide valuable information to help you adapt and thrive in a world where color plays a significant role in communication and daily activities.",
    icon: faPalette,
    route: "/ColorBlind",
  },
];

const EyeTestPage = () => {
  const theme = useTheme();
  const textColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const iconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const borderColors = theme.palette.mode === "dark" ? "#121212" : "#fff";

  return (
    <div className="eye-test-container" style={{}}>
      <div className="button-row">
        {buttons.map((button, index) => (
          <div className="father">
            <div className="front" style={{ backgroundColor: borderColors }}>
              <header>{button.title} </header>

              <FontAwesomeIcon
                icon={button.icon}
                size="2x"
                transform="down-5"
                style={{ color: iconColor }}
              />

              <p style={{ color: textColor }}>{button.backCard}</p>
            </div>
            <div className="back" style={{ backgroundColor: borderColors }}>
              <header>Ready?</header>

              <p style={{ color: textColor }}>{button.description}</p>
              <Link to={button.route}>
                <Button
                  className="eyetest-material"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#0094ff",
                    color: "#FFFFFF",
                  }}
                >
                  START TEST
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EyeTestPage;
