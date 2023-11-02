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
import register from "../../images/register.jpg";
import { useState } from "react";
import { addUser } from "../../store/slices/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [role, setRole] = useState("");
  const [regData, setRegData] = useState({
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
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch user data from the backend through Redux dispatch
    dispatch(addUser(regData)).then((response) => {
      const userDetails = response.payload;

      // Set the user state and store it in local storage
      console.log(userDetails);
      setRegData(userDetails);
      navigate("/login");
    });
  };

  const handleChange = (prop) => (event) => {
    if (prop === "role") setRegData({ ...regData, "role": event.target.value });
    else setRegData({ ...regData, [prop]: event.target.value });
  };

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
                        const selectedRole = event.target.value;
                        console.log(selectedRole);
                        setRole(selectedRole);
                        console.log(role);
                        handleChange("role");
                      }}
                    >
                      <MenuItem value="Athlete">Athlete</MenuItem>
                      <MenuItem value="Business">Business</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    type="name"
                    value={regData.name}
                    onChange={handleChange("name")}
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
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                    value={regData.email}
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
                    value={regData.password}
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

                  <TextField
                    label="Age"
                    variant="outlined"
                    fullWidth
                    type="number"
                    InputProps={{ inputProps: { min: 0, max: 100 } }}
                    value={regData.age}
                    onChange={handleChange("age")}
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
                    label="Location"
                    variant="outlined"
                    fullWidth
                    value={regData.location}
                    onChange={handleChange("location")}
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

export default Registration;
