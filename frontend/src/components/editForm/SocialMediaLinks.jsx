import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const SocialMediaLinksFormik = ({ label, name, type, required, fullWidth, sx }) => {
  const [links, setLinks] = useState([""]);

  const addLink = () => {
    setLinks([...links, ""]);
  };

  const removeLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
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
