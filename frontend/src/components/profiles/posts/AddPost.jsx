import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "../../../store/slices/PostSlice";
import Swal from "sweetalert2";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import storage from "../../firebase";
import { v4 } from "uuid";

const AddPost = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [imageUploads, setImageUploads] = useState([]);
  const [user, setUserData] = useState({});

  useEffect(() => {
    const getUserData = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        setUserData(JSON.parse(userData));
      }
    };

    getUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const caption = formData.get("caption");

    if (imageUploads.length === 0) {
      toast.info("Please select at least one image!");
      return;
    }

    try {
      const uploadedImages = await Promise.all(
        imageUploads.map(async (file) => {
          const imageRef = ref(storage, `images/${file.name + v4()}`);
          await uploadBytes(imageRef, file);
          const downloadUrl = await getDownloadURL(imageRef);
          return downloadUrl;
        })
      );

      const values = { caption, images: uploadedImages, userId: user?._id };

      dispatch(addPost(values)).then((response) => {
        console.log(response.payload);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your post has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      });

      // Reset the form after submission
      e.target.reset();
      setImageUploads([]);
      navigate(`../profile/${user?._id}`)
    } catch (error) {
      console.error("Error submitting post:", error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event?.target?.files;

    if (files) {
      setImageUploads(Array.from(files));
      toast.success("Images uploaded successfully!");
    } else {
      // Handle the case when files are undefined or null
      console.error("No files selected");
    }
  };

  const removeSelectedFile = (index) => {
    const updatedImageUploads = [...imageUploads];
    updatedImageUploads.splice(index, 1);
    setImageUploads(updatedImageUploads);

    toast.success(`Removed image`);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "130px auto 20px auto",
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: 8,
        backgroundColor: "#fff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "darkblue",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: 2,
        }}
      >
        Create a Post
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel htmlFor="caption">Caption</InputLabel>
          <Input id="caption" name="caption" type="text" variant="outlined" />
        </FormControl>

        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <input
            className="FileInput"
            id="images"
            name="images"
            type="file"
            multiple
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <Button
            type="button"
            variant="outlined"
            color="primary"
            onClick={handleFileButtonClick}
            startIcon={<AddCircleIcon />}
            sx={{ marginBottom: 2 }}
          >
            Add Media
          </Button>
        </FormControl>

        {/* Display selected images */}
        {imageUploads?.length > 0 && (
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Selected Images:
            </Typography>
            <ul>
              {imageUploads?.map((file, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={'Uploaded Post ' + index}
                    style={{
                      maxWidth: "200px",
                      maxHeight: "200px",
                      marginRight: "10px",
                    }}
                  />
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => removeSelectedFile(index)}
                    sx={{ marginLeft: "10px" }}
                  >
                    <DeleteIcon
                      sx={{
                        color: "maroon",
                      }}
                    />
                  </Button>
                </li>
              ))}
            </ul>
          </Box>
        )}

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "darkblue",
            color: "#fff",
            width: "100%",
            "&:hover": {
              backgroundColor: "#0d5cb6",
            },
          }}
        >
          Post
        </Button>
      </form>
    </Box>
  );
};

export default AddPost;
