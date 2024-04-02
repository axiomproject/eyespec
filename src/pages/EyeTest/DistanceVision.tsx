import React, { useState } from "react";
import {
  Button,
  Modal,
  FormControl,
  FormGroup,
  TextField,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../../styles/Layout.css";

const DistanceVision: React.FC = () => {
  const questions = [
    { id: 1, question: "E", answer: "E" },
    { id: 2, question: "F P", answer: "FP" },
    {
      id: 3,
      question: "T O Z",
      answer: "TOZ",
    },
    {
      id: 4,
      question: "L P E D",
      answer: "LPED",
    },
    {
      id: 5,
      question: "P E C F D",
      answer: "PECFD",
    },
    {
      id: 6,
      question: "E D F C Z P",
      answer: "EDFCZP",
    },
    {
      id: 7,
      question: "F E L O P Z D",
      answer: "FELOPZD",
    },
    {
      id: 8,
      question: "D E F P O T E C",
      answer: "DEFPOTEC",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const [fontSize, setFontSize] = useState(100);

  const theme = useTheme();
  const textColor = theme.palette.mode === "dark" ? "#fff" : "#fff";
  const backgroundColor = theme.palette.mode === "dark" ? "#353237" : "#353237";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = newAnswers[currentQuestion] || "";
    newAnswers[currentQuestion] =
      newAnswers[currentQuestion].substr(0, +name) +
      value +
      newAnswers[currentQuestion].substr(+name + 1);
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setFontSize((prevSize) => prevSize - 10);
  };

  const handleSubmitQuiz = () => {
    let totalScore = 0;
    questions.forEach((q, index) => {
      if (q.answer.toLowerCase() === answers[index]?.toLowerCase()) {
        totalScore++;
      }
    });
    setScore(totalScore);
    setShowModal(true);
  };

  return (
    <div className="quiz-container">
      <h1 className="distancevision-header">Distance Vision</h1>
      {currentQuestion < questions.length ? (
        <div>
          <h3
            className="distancevision-question"
            style={{ fontSize: `${fontSize}px` }}
          >
            {questions[currentQuestion].question}
          </h3>
          <FormControl component="fieldset">
            <FormGroup>
              <Grid container spacing={2}>
                {[...questions[currentQuestion].answer].map((_, index) => (
                  <Grid item key={index}>
                    <TextField
                      type="text"
                      name={index.toString()}
                      value={answers[currentQuestion]?.[index] || ""}
                      onChange={handleInputChange}
                      style={{ border: "blue" }}
                    />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>
          </FormControl>
          <div>
            {currentQuestion === questions.length - 1 ? (
              <Button variant="contained" onClick={handleSubmitQuiz}>
                Submit
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNextQuestion}>
                Next
              </Button>
            )}
          </div>
        </div>
      ) : null}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div style={{ backgroundColor: backgroundColor, padding: "20px" }}>
          <h2 style={{ color: textColor }}>Quiz Results</h2>
          <p style={{ color: textColor }}>
            Your score: {score}/{questions.length}
          </p>
          <Button variant="contained" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default DistanceVision;
