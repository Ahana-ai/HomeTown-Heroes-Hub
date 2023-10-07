import { Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

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
        }}
      >
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </Box>
  </Box>
);

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: PersonIcon,
      title: "Sign Up as an Athlete or Business",
      description:
        "Create and build a profile that has all your information and also what you are looking for.",
    },
    // Add more steps here as needed
  ];

  return (
    <>
      {steps.map((step, index) => (
        <StepTypography key={index} {...step} />
      ))}
    </>
  );
};

export default HowItWorks;
