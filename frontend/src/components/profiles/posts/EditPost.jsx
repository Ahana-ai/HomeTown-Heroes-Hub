import React, { useState, useEffect, useRef } from "react";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Delete from "@mui/icons-material/Delete";
import { Input } from "@mui/material";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { editPost } from "../../../store/slices/PostSlice";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import storage from "../../firebase";
import { v4 } from "uuid";

const EditPost = ({ open, handleClose, postData }) => {
  const dispatch = useDispatch();
  const [editedCaption, setEditedCaption] = useState(postData?.caption || "");
  const [editedImages, setEditedImages] = useState(postData?.images || []);
  const [additionalImages, setAdditionalImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageDelete = (index) => {
    const updatedImages = [...editedImages];
    updatedImages.splice(index, 1);
    setEditedImages(updatedImages);
  };

  const handleAddImage = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setAdditionalImages([...additionalImages, ...selectedFiles]);
  };

  const handleAdditionalImageDelete = (index) => {
    const updatedAdditionalImages = [...additionalImages];
    updatedAdditionalImages.splice(index, 1);
    setAdditionalImages(updatedAdditionalImages);
  };

  const handleSaveChanges = async () => {
    try {
      const uploadedImages = await Promise.all(
        additionalImages.map(async (file) => {
          let downloadUrl;

          // Check if the file is an existing image
          const isExistingImage = editedImages.some(
            (existingImage) => existingImage === file
          );

          if (isExistingImage) {
            // If it's an existing image, use the existing URL
            downloadUrl = file;
          } else {
            // If it's a new image, generate a new file name and upload
            const imageRef = ref(storage, `images/${file.name + v4()}`);
            await uploadBytes(imageRef, file);
            downloadUrl = await getDownloadURL(imageRef);
          }

          return downloadUrl;
        })
      );

      const updatedPost = {
        ...postData,
        caption: editedCaption,
        images: [...editedImages, ...uploadedImages],
      };

      // Dispatch an action to update the post in the API
      dispatch(editPost(postData._id, updatedPost)).then((response) => {
        console.log("Updated Post:", updatedPost);
        console.log("Edit Post API Response:", response.payload);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your changes have been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      });

      // Close the modal
      handleClose();
    } catch (error) {
      console.error("Error saving changes:", error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowForwardIosIcon
        className={className}
        style={{
          ...style,
          display: "block",
          color: "#333",
          fontSize: "2rem",
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowBackIosIcon
        className={className}
        style={{
          ...style,
          display: "block",
          color: "#333",
          fontSize: "2rem",
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    setEditedImages(postData?.images || []);
    setAdditionalImages([]);
  }, [postData]);

  useEffect(() => {
    // Logic to save edited caption and images
    console.log("Edited Caption:", editedCaption);
    console.log("Edited Images:", editedImages.concat(additionalImages));
  }, [editedCaption, editedImages, additionalImages]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
          width: "80%",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 3, fontWeight: "bold" }}>
          Edit Post
        </Typography>

        <TextField
          label="Caption"
          fullWidth
          variant="outlined"
          value={editedCaption}
          onChange={(e) => setEditedCaption(e.target.value)}
          sx={{ mb: 3 }}
        />

        <Slider {...settings} sx={{ marginBottom: 3 }}>
          {[...editedImages, ...additionalImages].map((image, index) => (
            <Box key={index} sx={{ position: "relative" }}>
              <img
                src={image}
                alt={`Edit Post ${index}`}
                style={{
                  width: "80%",
                  borderRadius: "8px",
                  margin: "auto",
                }}
              />
              <Button
                variant="outlined"
                size="small"
                color="error"
                sx={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  borderRadius: "50%",
                  padding: "10px",
                }}
                onClick={() =>
                  index < editedImages.length
                    ? handleImageDelete(index)
                    : handleAdditionalImageDelete(index - editedImages.length)
                }
              >
                <span role="img" aria-label="delete">
                  <Delete />
                </span>
              </Button>
            </Box>
          ))}
        </Slider>

        <Box
          sx={{
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddImage}
            sx={{ mr: 2, backgroundColor: "darkblue" }}
          >
            Add More
          </Button>
          <Input
            type="file"
            inputRef={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileInputChange}
            multiple
          />

          <Button
            variant="contained"
            // color="darkblue"
            onClick={handleSaveChanges}
            sx={{ marginRight: 2, backgroundColor: "darkblue" }}
          >
            Save Changes
          </Button>
          <Button variant="contained" onClick={handleClose} color="error">
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditPost;
