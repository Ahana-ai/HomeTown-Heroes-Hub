import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Typography,
} from "@mui/material";
import register from "../../images/register.jpg";
import { addUser } from "../../store/slices/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextFieldFormik from "./formikComponents/TextArea";
import NumberFieldFormik from "./formikComponents/NumberField";
import SelectFormik from "./formikComponents/Select";

const Registration = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(addUser(values)).then(() => {
      navigate("/login");
    });
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
  });

  return (
    <Container
      sx={{
        margin: "130px auto 20px auto",
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={6}>
          <img
            src={register}
            alt="Register with us"
            style={{
              objectFit: "cover",
              marginBottom: "10px",
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
        <Grid item md={6} sm={8}>
          <Box
            sx={{
              background:
                "linear-gradient(180deg, rgba(234,219,200,1) 15%, rgba(252,253,255,1) 95%)",
              py: { xs: 3, md: 5 },
              textAlign: "center",
              width: "100%",
            }}
          >
            <Container>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
                Get Started With Us!
              </Typography>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  role: "",
                  age: 0,
                  location: "",
                  acheivement: "",
                  talents: "",
                  bio: "",
                  profile_image: "",
                  social_media_links: "",
                  profile_completion_score: 0,
                }}
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

                    <NumberFieldFormik
                      label="Age"
                      name="age"
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

                    <Button
                      type="submit"
                      variant="contained"
                      color="info"
                      sx={{ mt: 3 }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Form>
              </Formik>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Registration;
