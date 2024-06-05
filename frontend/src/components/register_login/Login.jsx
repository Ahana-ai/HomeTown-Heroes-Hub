import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Typography,
} from "@mui/material";
import login from "../../images/Login.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextFieldFormik from "./formikComponents/TextArea";
import SelectFormik from "./formikComponents/Select";
import { loginUser } from "../../store/slices/UserSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)

  const handleSubmit = (values) => {
    dispatch(loginUser(values)).then((response) => {
      const userDetails = response.payload;

      // Set the user state and store it in local storage
      localStorage.setItem("user", JSON.stringify(userDetails));
      navigate("/feed");
      window.location.reload();
    }).catch((error) => {
      console.log("object")
      if (user.loginUserStatus !== "fulfilled") {
        toast.error('Incorrect email or password', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Container sx={{ margin: "130px auto 0 auto" }}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <img
            src={login}
            alt="Login"
            style={{
              height: "430px",
              objectFit: "cover",
              marginBottom: "10px",
              width: "100%",
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
                Login
              </Typography>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <SelectFormik
                      name="role"
                      fullWidth
                      sx={{ mb: 2, textAlign: "left" }}
                      defaultValue="Select Role"
                    >
                      <MenuItem value="Select Role" disabled>Select Role</MenuItem>
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
      <ToastContainer />
    </Container>
  );
};

export default Login;
