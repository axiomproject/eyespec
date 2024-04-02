import React, { useState } from "react";
import { Button, Modal, Typography } from "@mui/material";
import "../../styles/Layout.css";
import { useTheme } from "@mui/material/styles";

const questions = [
  "Do you tend to hold text further away to see better?",
  "Are you having difficulty reading small print?",
  "This is quite normal past a certain age.",
  "Let's test your near vision.",
  "If you made it this far, your vision does not require eyeglasses.",
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [fontSize, setFontSize] = useState(50);

  const theme = useTheme();
  const textColor = theme.palette.mode === "dark" ? "#fff" : "#fff";
  const backgroundColor = theme.palette.mode === "dark" ? "#353237" : "#353237";

  const handleAnswer = (answer: boolean) => {
    setAnswers([...answers, answer]);
    setFontSize(fontSize - 8);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setFontSize(50);
  };

  const calculateScore = () => {
    const score = answers.reduce((acc, curr) => (curr ? acc + 1 : acc), 0);
    return score;
  };

  return (
    <div>
      <h1 className="nearvision-header">Near Vision</h1>
      <Typography variant="h4" style={{ fontSize: `${fontSize}px` }}>
        {questions[currentQuestion]}
      </Typography>
      <div className="nearvision-button">
        <Button variant="contained" onClick={() => handleAnswer(true)}>
          Yes
        </Button>
        <Button variant="contained" onClick={() => handleAnswer(false)}>
          No
        </Button>
      </div>
      <Modal open={openModal} onClose={handleCloseModal}>
        <div style={{ backgroundColor: backgroundColor, padding: "20px" }}>
          <Typography style={{ color: textColor }} variant="h5">
            Quiz Results
          </Typography>
          <Typography style={{ color: textColor }} variant="body1">
            Your score is: {calculateScore()} out of 5
          </Typography>
          <Button variant="contained" onClick={handleCloseModal}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Quiz;
