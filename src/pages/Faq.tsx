import React, { useState } from "react";
import { Collapse, ButtonBase } from "@mui/material";
import "../styles/Layout.css";
import { useTheme } from "@mui/material/styles";
import { color } from "framer-motion";

interface ItemProps {
  name: string;
  description: string;
}

const Faq = () => {
  const data = [
    {
      name: "How often should I get my eyes checked?",
      description:
        "Adults should get their eyes checked at least every two years, and annually if they are over the age of 60 or have a history of eye problems.",
    },
    {
      name: "What are the common signs that indicate a need for an eye test?",
      description:
        "Common signs that indicate a need for an eye test include frequent headaches, difficulty reading, blurred vision, double vision, eye strain, and trouble seeing objects at a distance.",
    },
    {
      name: "What is the difference between an optometrist and an ophthalmologist?",
      description:
        "An optometrist is a primary eye care provider who can perform eye exams, prescribe corrective lenses, and diagnose common eye conditions, while an ophthalmologist is a medical doctor who specializes in eye and vision care, is qualified to perform eye surgery, and can diagnose and treat a wider range of eye diseases and injuries.",
    },
    {
      name: "Can digital screens affect my vision, and if so, how can I protect my eyes?",
      description:
        "Prolonged use of digital screens can lead to digital eye strain, causing symptoms such as dry eyes, headaches, blurred vision, and neck and shoulder pain. To protect your eyes, take regular breaks, adjust screen brightness and position, use artificial tears, and follow the 20-20-20 rule (look at something 20 feet away for 20 seconds every 20 minutes).",
    },
    {
      name: "How can I prepare for an eye test to ensure accurate results?",
      description:
        "To prepare for an eye test, bring your current glasses or contact lenses, be ready to provide your medical history and any medications you are taking, and if you wear contact lenses, avoid wearing them for a few hours before the test to ensure the most accurate results.",
    },
  ];

  const DropdownItem: React.FC<{ item: ItemProps }> = ({ item }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const theme = useTheme();
    const backgroundColor = theme.palette.mode === "dark" ? "" : "#fff";
    const textColor = theme.palette.mode === "dark" ? "" : "#000";

    const toggleDropdown = () => {
      setIsDropdownOpen((prev) => !prev);
    };

    return (
      <div className="name" key={item.name}>
        <ButtonBase
          component="div"
          onClick={toggleDropdown}
          onContextMenu={(e) => e.preventDefault()}
          sx={{
            cursor: "pointer",
            backgroundColor: backgroundColor,
            borderRadius: "8px",
            padding: "8px 16px",
            color: textColor,
            "&:hover": {
              backgroundColor: "#006dc4",
            },
          }}
        >
          {item.name} {isDropdownOpen ? "▲" : "▼"}
        </ButtonBase>
        <Collapse in={isDropdownOpen}>
          <div
            className="description"
            style={{
              backgroundColor: "rgba(126, 126, 126, 0.39)",
              padding: "50px",
              borderRadius: "5px",
              marginRight: "auto",
              marginLeft: "auto",
              fontSize: 17,
            }}
          >
            {item.description}
          </div>
        </Collapse>
      </div>
    );
  };

  return (
    <div>
      <h2 className="faq" style={{ fontSize: 38 }}>
        Frequently Asked Questions
      </h2>
      {data.map((item) => (
        <DropdownItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default Faq;
