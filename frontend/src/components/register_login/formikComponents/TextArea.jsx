import { Field, ErrorMessage } from "formik";
import { TextField } from "@mui/material";

const TextFieldFormik = ({
  label,
  name,
  type = "text",
  required = false,
  ...rest
}) => {
  return (
    <div>
      <Field name={name}>
        {({ field }) => (
          <TextField
            {...field}
            type={type}
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
    </div>
  );
};

export default TextFieldFormik;
