import { Box, Typography } from "@mui/material";
import steps from '../constants/Steps.js'

const StepTypography = ({ number, title, description }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      marginBottom: "16px", // Add spacing between steps
    }}
  >
    <Box
      sx={{
        border: "4px solid black",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        textAlign: "center",
        marginRight: "16px", // Add spacing between number and text
      }}
    >
      {number}
    </Box>
    <Box>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "500",
          font: "Kalam",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          font: "Kalam",
        }}
      >
        {description}
      </Typography>
    </Box>
  </Box>
);

const HowItWorks = () => {
  return (
    <>
      {steps.map((step, index) => (
        <StepTypography key={index} {...step} />
      ))}
    </>
  );
};

export default HowItWorks;
