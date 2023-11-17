import { Box } from "@mui/material";
import Description from "./Description";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserDetails } from "../../store/slices/UserSlice";
import { useParams } from "react-router-dom";
import MyPosts from "./posts/MyPosts";
import Swal from "sweetalert2";

const OtherProfileView = () => {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getUserDetails(id))
        .then((response) => {
          // Handle the response and update state as needed
          if (response.payload) {
            setUserData(response.payload);
          } else {
            // Show SweetAlert if user not found
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "User not found!",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
          }
        })
        .catch((error) => {
          // Show SweetAlert if there's an error
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        });
    } else {
      // Show SweetAlert if ID is not found
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "ID not found!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  }, [dispatch, id]);

  return (
    <Box
      sx={{
        margin: {
          md: "0 10%",
          sm: "0 6%",
          xs: "5%",
        },
      }}
    >
      <Description userData={userData} />
      <MyPosts />
    </Box>
  );
};

export default OtherProfileView;
