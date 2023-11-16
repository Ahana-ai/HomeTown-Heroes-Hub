import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../store/slices/UserSlice";
import { useParams } from "react-router-dom";
import ActivityStatus from "./ActivityStatus";
import Description from "./Description";
import MyPosts from "./posts/MyPosts";

const ProfileView = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const [userData, setUserData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserDetails(id)).then((response) => {
      const userD = response.payload;
      setUserData(userD);
    });
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
      <Grid container spacing={5}>
        <Grid item md={8} sm={12} xs={12}>
          <Description userData={userData} />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <ActivityStatus userData={userData} />
        </Grid>
      </Grid>
      <Box>
        <MyPosts />
      </Box>
    </Box>
  );
};

export default ProfileView;
