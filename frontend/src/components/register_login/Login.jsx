import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import login from "../../images/Login.jpg";
import { useState } from "react";
import { loginUser } from "../../store/slices/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("");
  const [logData, setLogData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch user data from the backend through Redux dispatch
    dispatch(loginUser(logData)).then((response) => {
      const userDetails = response.payload;

      // Set the user state and store it in local storage
      localStorage.setItem("user", JSON.stringify(userDetails));
      navigate("/feed");
      window.location.reload();
    });
  };

  const handleChange = (prop) => (event) => {
    setLogData({ ...logData, [prop]: event.target.value });
  };

  return (
    <Container
      sx={{
        margin: "130px auto 0 auto",
      }}
    >
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
              <form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <FormControl
                    fullWidth
                    sx={{
                      mb: 2,
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      {" "}
                      Select Role
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={role}
                      label="Your Role"
                      onChange={(event) => {
                        setRole(event.target.value);
                      }}
                    >
                      <MenuItem value="Athlete">Athlete</MenuItem>
                      <MenuItem value="Business">Business</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                    value={logData.email}
                    onChange={handleChange("email")}
                    sx={{
                      mb: 2,
                      input: {
                        "&:focus": {
                          backgroundColor: "#F1EFEF",
                        },
                      },
                    }}
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    required
                    value={logData.password}
                    onChange={handleChange("password")}
                    sx={{
                      mb: 2,
                      input: {
                        "&:focus": {
                          backgroundColor: "#F1EFEF",
                        },
                      },
                    }}
                  />
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  color="info"
                  sx={{ mt: 3 }}
                >
                  Submit
                </Button>
              </form>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
