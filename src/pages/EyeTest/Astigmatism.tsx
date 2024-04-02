import React, { useState, useEffect } from "react";
import { Button, Modal, Typography, useTheme } from "@mui/material";
import "../../styles/Layout.css";
import astigmatismImage1Light from "../../img/AstigmatismTest1.png";
import astigmatismImage1Dark from "../../img/AstigmatismTest1-Light.png";
import astigmatismImage2Light from "../../img/AstigmatismTest2.png";
import astigmatismImage2Dark from "../../img/AstigmatismTest2-Light.png";
import astigmatismImage3Light from "../../img/Astigmatism.png";
import astigmatismImage3Dark from "../../img/Astigmatism-Light.png";
import Confetti from "react-confetti";

const questions = [
  {
    text: "Do you see shades of gray rather than black or white?",
    imageLight: astigmatismImage1Light,
    imageDark: astigmatismImage1Dark,
    correctAnswer: false,
  },
  {
    text: "Do you see some of the lines darker or thinner than the rest?",
    imageLight: astigmatismImage2Light,
    imageDark: astigmatismImage2Dark,
    correctAnswer: true,
  },
  {
    text: "Are the thickness and intensity of each radiating heavy black line identical?",
    imageLight: astigmatismImage3Light,
    imageDark: astigmatismImage3Dark,
    correctAnswer: true,
  },
];

const getScoreMessage = (score: number) => {
  let message = "";
  let color = "";

  if (score >= 2 && score <= 3) {
    message = "You may not have astigmatism";
    color = "green";
  } else if (score >= 0 && score <= 1) {
    message = "You may have astigmatism";
    color = "red";
  }

  return { message, color };
};

const Astigmatism = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const textColor = isDarkMode ? "#fff" : "#fff";
  const backgroundColor = isDarkMode ? "#353237" : "#353237";
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (openModal) {
      setShowConfetti(true);
    }
  }, [openModal]);

  const handleAnswer = (answer: boolean) => {
    setAnswers([...answers, answer]);

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
    setShowConfetti(false); // Hide confetti when modal is closed
  };

  const calculateScore = () => {
    return answers.reduce((acc, curr, index) => {
      const isCorrect = curr === questions[index].correctAnswer;
      return isCorrect ? acc + 1 : acc;
    }, 0);
  };

  const score = calculateScore(); // Calculate the score
  const { message, color } = getScoreMessage(score);

  return (
    <div>
      <h1 className="nearvision-header">Astigmatism</h1>
      <Typography variant="h4" style={{ fontSize: 30, marginBottom: 10 }}>
        {questions[currentQuestion].text}
      </Typography>
      {currentQuestion < questions.length && (
        <div>
          <img
            src={
              isDarkMode
                ? questions[currentQuestion].imageDark
                : questions[currentQuestion].imageLight
            }
            alt={`Question ${currentQuestion + 1}`}
            style={{ width: "100%", maxWidth: "400px", height: "100%" }}
          />
          <div className="nearvision-button">
            <Button variant="contained" onClick={() => handleAnswer(true)}>
              Yes
            </Button>
            <Button variant="contained" onClick={() => handleAnswer(false)}>
              No
            </Button>
          </div>
        </div>
      )}
      <Modal open={openModal} onClose={handleCloseModal}>
        <div style={{ backgroundColor: backgroundColor, padding: "20px" }}>
          <Typography
            style={{ color: textColor, marginBottom: 5 }}
            variant="h5"
          >
            Quiz Results
          </Typography>
          <Typography
            style={{ color: textColor, marginBottom: 5 }}
            variant="body1"
          >
            Your score is: {score} out of {questions.length}
          </Typography>
          <Typography
            style={{ color, fontWeight: 700, marginBottom: 10 }}
            variant="body1"
          >
            {message}
          </Typography>
          <Button variant="contained" onClick={handleCloseModal}>
            Close
          </Button>
          {score >= 2 && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              style={{ position: "fixed", zIndex: 10000 }}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Astigmatism;
