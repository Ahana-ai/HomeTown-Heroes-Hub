import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CheckCircle } from "@mui/icons-material"; // Import your desired icon from MUI Icons
import steps from "../constants/Steps";
import { Box } from "@mui/material";

const HowItWorks2 = () => {
  return (
    <Box
      sx={{
        background: "#1A265A",
        textAlign: "center",
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
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #fff",
            }}
            date={step.date}
            iconStyle={{ background: "#2E4374", color: "#fff" }}
            icon={<CheckCircle sx={{ fontSize: "24px" }} />}
          >
            <Box
              sx={{
                border: "2px solid black",
                padding: "10px",
              }}
            >
              <h2 className="vertical-timeline-element-title">
                Step {step.number}
              </h2>
              <h3 className="vertical-timeline-element-subtitle">
                {step.title}
              </h3>
              <p>{step.description}</p>
            </Box>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default HowItWorks2;
