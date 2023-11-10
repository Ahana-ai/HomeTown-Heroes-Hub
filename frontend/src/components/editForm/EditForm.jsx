import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  MenuItem,
  Paper,
} from "@mui/material";
import { Formik, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import SelectFormik from "../register_login/formikComponents/Select";
import TextFieldFormik from "../register_login/formikComponents/TextArea";
import SocialMediaLinksFormik from "./SocialMediaLinks";
import { useDispatch } from "react-redux";
import { editUser } from "../../store/slices/UserSlice";
import { useNavigate } from "react-router-dom";

const EditForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
    dispatch(editUser(values._id)).then((response) => {
      console.log(values);
      localStorage.clear();
      localStorage.setItem("user", JSON.stringify(values));
      navigate(`/profile/${values._id}`);
    });
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    bio: Yup.string().required("Bio is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    role: Yup.string().required("Role is required"),
    age: Yup.number()
      .required("Age is required")
      .positive("Invalid age")
      .integer("Invalid age"),
    location: Yup.string().required("Location is required"),
  });

  const RoleSpecificFields = () => {
    const { values } = useFormikContext();

    return (
      <>
        {values.role === "Athlete" && (
          <>
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
          </>
        )}

        {values.role === "Business" && (
          <TextFieldFormik
            label="Products & Services"
            name="prod_services"
            type="text"
            required
            fullWidth
            sx={{ mb: 2 }}
          />
        )}
      </>
    );
  };

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
              >
                <MenuItem value="Athlete">Athlete</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
              </SelectFormik>

              <TextFieldFormik
                label="Name"
                name="name"
                type="text"
                required
                fullWidth
                sx={{ mb: 2 }}
              />

              <TextFieldFormik
                label="Email"
                name="email"
                type="email"
                required
                fullWidth
                sx={{ mb: 2 }}
              />

              <TextFieldFormik
                label="Bio"
                name="bio"
                type="text"
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

              <RoleSpecificFields />

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
