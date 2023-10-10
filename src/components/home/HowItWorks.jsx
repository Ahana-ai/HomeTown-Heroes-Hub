import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import steps from "../constants/Steps";
import { Box } from "@mui/material";

const HowItWorks2 = () => {
  return (
    <Box
      sx={{
        background: "#1A265A",
        textAlign: "center",
        width: "77%",
        margin: "auto auto",
        border: "2px solid black",
        borderRadius: "30px",
      }}
    >
      <VerticalTimeline>
        {steps.map((step, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#E5CFF7",
              color: "#000",
              padding: "10px",
              borderRadius: "15px",
            }}
            contentArrowStyle={{
              borderRight: "10px solid #fff",
            }}
            iconStyle={{
              background: "#2E4374",
              color: "#fff",
            }}
            icon={
              <step.icon
                sx={{
                  fontSize: "40px",
                }}
              />
            }
          >
            <Box>
              <h2
                className="vertical-timeline-element-title"
                style={{
                  color: "#053B50",
                  fontFamily: "Kalam",
                  fontWeight: "bolder",
                  fontSize: "1.3rem",
                }}
              >
                Step {step.number}
              </h2>
              <h3
                className="vertical-timeline-element-subtitle"
                style={{
                  color: "#053B50",
                  fontFamily: "Kalam",
                  fontWeight: "bolder",
                  fontSize: "1.3rem",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "Kalam",
                  fontWeight: "bold",
                  color: "#5B0888",
                }}
              >
                {step.description}
              </p>
            </Box>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default HowItWorks2;
