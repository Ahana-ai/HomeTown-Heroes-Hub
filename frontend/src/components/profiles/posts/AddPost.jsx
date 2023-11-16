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

const AddPost = () => {
  const initialValues = { caption: "", media: [] };
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const caption = formData.get("caption");
    // const images = formData.getAll("images");
    formData.append("images", selectedFiles)

    const values = { caption, images: selectedFiles, userId: user?._id };

    dispatch(addPost(values))
      .then((response) => {
        console.log("Submitted:", response?.payload);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your post has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error submitting post:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });

    // Reset the form after submission
    e.target.reset();
    setSelectedFiles([]);
  };

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event?.target?.files;

    if (files) {
      setSelectedFiles(Array.from(files));
    } else {
      // Handle the case when files are undefined or null
      alert("No files");
      console.error("No files selected");
    }
  };

  const removeSelectedFile = (index) => {
    const updatedFiles = [...selectedFiles];
    const removedFile = updatedFiles.splice(index, 1)[0];
    setSelectedFiles(updatedFiles);

    toast.success(`Removed: ${removedFile.name}`);
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
        {selectedFiles?.length > 0 && (
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Selected Images:
            </Typography>
            <ul>
              {selectedFiles?.map((file, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    style={{
                      maxWidth: "200px",
                      maxHeight: "200px",
                      marginRight: "10px",
                    }}
                  />
                  <span>{file.name}</span>
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
