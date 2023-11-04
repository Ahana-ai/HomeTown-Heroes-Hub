import { Field, ErrorMessage } from "formik";
import { Box, TextField } from "@mui/material";

const NumberFieldFormik = ({ label, name, required = false, ...rest }) => {
  return (
    <Box>
      <Field name={name}>
        {({ field }) => (
          <TextField
            {...field}
            type="number"
            label={label}
            required={required}
            {...rest}
          />
        )}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="error"
        style={{
          color: "red",
          margin: "5px 0",
          fontWeight: "bold",
          letterSpacing: "1.5px",
        }}
      />
    </Box>
  );
};

export default NumberFieldFormik;
