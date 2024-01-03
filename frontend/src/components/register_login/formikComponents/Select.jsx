import { Field, ErrorMessage } from "formik";
import { InputLabel, Select } from "@mui/material";

const SelectFormik = ({ label, name, children, ...rest }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <InputLabel id={`label-${name}`}>{label}</InputLabel>
      <Field as={Select} labelId={`label-${name}`} name={name} {...rest}>
        {children}
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

export default SelectFormik;
