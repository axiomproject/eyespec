import Layout from "../../components/Layout";
import React, { useState } from "react";
import { Modal, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material";

interface Answer {
  [key: number]: string;
}

const DryEye: React.FC = () => {
  const [answers, setAnswers] = useState<Answer>({});
  const [showModal, setShowModal] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [scoreMessage, setScoreMessage] = useState("");
  const theme = useTheme();
  const textColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const backgroundColor = theme.palette.mode === "dark" ? "#353237" : "#fff";

  const questions = [
    "Eyes that are sensitive to light?",
    "Eyes that feel gritty?",
    "Painful or sore eyes?",
    "Blurred vision?",
    "Poor vision?",
    "Reading?",
    "Driving at night?",
    "Working with a computer",
    "Watching TV?",
    "Windy conditions?",
    "Places or areas with low humidity (very dry)",
    "Areas that are air conditioned?",
  ];

  const [selectedAnswersCount, setSelectedAnswersCount] = useState(0);

  const handleAnswerSelection = (questionIndex: number, value: string) => {
    const newAnswers = { ...answers, [questionIndex]: value };
    setAnswers(newAnswers);

    const answeredQuestionsCount = Object.keys(newAnswers).length;
    setSelectedAnswersCount(answeredQuestionsCount);
  };

  const calculateScore = () => {
    let score = 0;
    for (const answer in answers) {
      score += parseInt(answers[answer]);
    }
    setTotalScore(score);
    setShowModal(true);
    setScoreMessage(getScoreMessage(score));
  };

  const getScoreMessage = (score: number) => {
    let message = "";
    let color = "";

    if (Object.keys(answers).length === 0) {
      message = "Pick an answer first";
      color = "black";
    } else if (score >= 1 && score <= 12) {
      message = "You have no or minimal dry eye.";
      color = "green";
    } else if (score >= 13 && score <= 22) {
      message = "You have mild dry eye symptoms.";
      color = "blue";
    } else if (score >= 23 && score <= 32) {
      message = "You have moderate dry eye symptoms.";
      color = "orange";
    } else if (score >= 33 && score <= 100) {
      message =
        "You have symptoms of dry eye and must consult your Eye Doctor as soon as possible.";
      color = "red";
    }

    return `${message}`;
  };

  return (
    <div>
      <h1 className="dryeye-header">Dry Eye Test Survey</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <p className="dryeye-question">{question}</p>
          <Button
            className="dryeye-button"
            variant={answers[index] === "1" ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleAnswerSelection(index, "1")}
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            Your Button Text
          </Button>
          <Button
            className="dryeye-button"
            variant={answers[index] === "2" ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleAnswerSelection(index, "2")}
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            Some of the time
          </Button>

          <Button
            className="dryeye-button"
            variant={answers[index] === "3" ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleAnswerSelection(index, "3")}
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            Half of the time
          </Button>
          <Button
            className="dryeye-button"
            variant={answers[index] === "4" ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleAnswerSelection(index, "4")}
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            Most of the time
          </Button>
          <Button
            className="dryeye-button"
            variant={answers[index] === "5" ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleAnswerSelection(index, "5")}
            sx={{
              mr: 1,
              mb: 1,
            }}
          >
            All of the time
          </Button>
        </div>
      ))}
      <Button
        className="dryeye-submit"
        onClick={calculateScore}
        variant="contained"
        disabled={selectedAnswersCount !== 12} // Enable the button when exactly 10 answers are selected
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div style={{ backgroundColor: backgroundColor, padding: "20px" }}>
          <h2 style={{ color: textColor }}>Your OSDI result is</h2>
          <p style={{ color: textColor }}>{getScoreMessage(totalScore)}</p>
          <Button onClick={() => setShowModal(false)} variant="contained">
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default DryEye;
