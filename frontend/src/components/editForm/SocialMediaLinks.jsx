import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useFormikContext } from "formik";

const SocialMediaLinksFormik = ({ name, type, sx }) => {
  const [links, setLinks] = useState([""]);

  // const addLink = () => {
  //   setLinks([...links, ""]);
  // };

  // const removeLink = (index) => {
  //   const updatedLinks = [...links];
  //   updatedLinks.splice(index, 1);
  //   setLinks(updatedLinks);
  // };

  const { values, setFieldValue } = useFormikContext();

  const linksArray = Array.isArray(values[name]) ? values[name] : [];

  const addLink = () => {
    setLinks([...links, ""]);
    setFieldValue(name, [...linksArray, ""]);
  };

  const removeLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
    setFieldValue(name, updatedLinks);
  };

  return (
    <Box sx={sx}>
      {links.map((link, index) => (
        <Box key={index} mt={2} display="flex" alignItems="center">
          <TextField
            name={`${name}[${index}]`}
            label={`Enter link ${index + 1}`}
            type={type}
            fullWidth
            value={link}
            onChange={(e) => {
              const updatedLinks = [...links];
              updatedLinks[index] = e.target.value;
              setLinks(updatedLinks);
            }}
          />
          {index > 0 && (
            <IconButton onClick={() => removeLink(index)}>
              <RemoveIcon />
            </IconButton>
          )}
        </Box>
      ))}
      <IconButton onClick={addLink}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default SocialMediaLinksFormik;
