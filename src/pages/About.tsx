import React from "react";
import "../styles/Layout.css";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

interface State {
  open: boolean;
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
  image: string; // Define the 'image' property in the State interface
}

const About = () => {
  const theme = useTheme();
  const lineColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const SnackbarColor = theme.palette.mode === "dark" ? "#000" : "#000";
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
    image: "",
  });
  const { vertical, horizontal, open, image } = state;

  const handleClick = (newState: State) => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <div className="line-container">
        <h1 className="About">About Us</h1>
        <div className="line" style={{ backgroundColor: lineColor }}></div>
        <div className="header2">
          <p>
            Welcome to Eye Spec, your comprehensive destination for accurate and
            reliable eye testing services. At Eye Spec, we understand the
            critical importance of maintaining optimal eye health for a better
            quality of life.
          </p>
        </div>
      </div>
      <div className="info">
        <h2>Our Vision</h2>
        <p>
          Eye Spec was founded with the mission to make eye care accessible,
          convenient, and personalized for everyone. We believe that regular eye
          examinations are crucial not only for correcting vision but also for
          detecting potential eye conditions early on.
        </p>

        <h2>Our Commitment to Quality</h2>
        <p>
          Equipped with state-of-the-art technology and staffed by a team of
          experienced and caring professionals, we strive to deliver the highest
          standard of eye care. Whether you require a routine eye exam,
          specialized testing, or professional guidance on eye health, we are
          here to provide you with the most accurate and comprehensive results.
        </p>
        <h2>Personalized Approach</h2>
        <p>
          Understanding that every individual has unique eye care needs, we are
          committed to providing personalized solutions tailored to your
          specific requirements. Our friendly staff is dedicated to ensuring
          that your experience at Eye Spec is as comfortable and informative as
          possible.
        </p>
        <h2>Community Engagement</h2>
        <p>
          Beyond our commitment to individual eye health, Eye Spec is dedicated
          to spreading awareness about the importance of regular eye check-ups
          and maintaining good eye health practices. We actively engage with the
          community through educational programs and initiatives to promote eye
          care awareness.
        </p>

        <h2>Technology Used</h2>
        <Button
          onClick={() =>
            handleClick({
              vertical: "top",
              horizontal: "center",
              open: true,
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
            })
          }
        >
          React
        </Button>
        <Button
          onClick={() =>
            handleClick({
              vertical: "top",
              horizontal: "center",
              open: true,
              image:
                "https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png",
            })
          }
        >
          Node
        </Button>
        <Button
          onClick={() =>
            handleClick({
              vertical: "top",
              horizontal: "center",
              open: true,
              image:
                "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
            })
          }
        >
          Vite
        </Button>
        <Button
          onClick={() =>
            handleClick({
              vertical: "top",
              horizontal: "center",
              open: true,
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
            })
          }
        >
          Typescript
        </Button>
      </div>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={
          <img
            src={image}
            alt="Snackbar Image"
            style={{ maxWidth: "20%", maxHeight: "100%", zIndex: 9999 }}
          />
        }
        key={vertical + horizontal}
      />
    </div>
  );
};

export default About;
