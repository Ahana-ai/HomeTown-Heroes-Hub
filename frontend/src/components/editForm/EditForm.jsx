import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  MenuItem,
  Paper,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SelectFormik from "../register_login/formikComponents/Select";
import TextFieldFormik from "../register_login/formikComponents/TextArea";
import SocialMediaLinksFormik from "./SocialMediaLinks";

const EditForm = () => {
  const initialValues = JSON.parse(localStorage.getItem("user"));

  let role = initialValues.role;

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    role: Yup.string().required("Role is required"),
    age: Yup.number()
      .required("Age is required")
      .positive("Invalid age")
      .integer("Invalid age"),
    location: Yup.string().required("Location is required"),
    talents: Yup.string().required("Talents is required"),
    acheivements: Yup.string().required("Acheivements is required"),
  });

  return (
    <Container sx={{ margin: "130px auto 0 auto" }}>
      <Paper
        elevation={5}
        sx={{
          background:
            "linear-gradient(180deg, rgba(234,219,200,1) 15%, rgba(252,253,255,1) 95%)",
          p: { xs: 3, md: 5 },
          textAlign: "center",
          mb: 5,
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            color: "darkblue",
            textTransform: "uppercase",
          }}
        >
          Edit Profile
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <SelectFormik
                label="Select Role"
                name="role"
                fullWidth
                sx={{ mb: 2 }}
                onChange={(event) => {
                    role = event.target.value;
                    console.log(role);
                }}
              >
                <MenuItem value="Athlete">Athlete</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
              </SelectFormik>

              <TextFieldFormik
                label="Email"
                name="email"
                type="email"
                required
                fullWidth
                sx={{ mb: 2 }}
              />

              <TextFieldFormik
                label="Password"
                name="password"
                type="password"
                required
                fullWidth
                sx={{ mb: 2 }}
              />

              <TextFieldFormik
                label="Location"
                name="location"
                type="text"
                required
                fullWidth
                sx={{ mb: 2 }}
              />

              <TextFieldFormik
                label="Acheivements"
                name="acheivements"
                type="text"
                required
                fullWidth
                sx={{ mb: 2 }}
              />

              {role === "Athlete" ? (
                <Box>
                  <TextFieldFormik
                    label="Talents"
                    name="talents"
                    type="text"
                    required
                    fullWidth
                    sx={{ mb: 2 }}
                  />

                  <TextFieldFormik
                    label="School - University Name"
                    name="school_university_name"
                    type="text"
                    required
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                </Box>
              ) : (
                <Box>
                  <TextFieldFormik
                    label="Products & Services"
                    name="prod_services"
                    type="text"
                    required
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                </Box>
              )}

              <Typography>Social Media Links</Typography>
              <SocialMediaLinksFormik />
            </Box>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "darkblue",
                fontWeight: "bolder",
                letterSpacing: "1.5px",

                "&:hover": {
                  backgroundColor: "green",
                },
              }}
            >
              Submit
            </Button>
          </Form>
        </Formik>
      </Paper>
    </Container>
  );
};

export default EditForm;
