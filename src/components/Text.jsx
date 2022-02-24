import React from "react";
import TextField from "@mui/material/TextField";

const Text = ({ display, setText }) => {
  if (!display) {
    return null;
  }

  return (
    <TextField
      label="Ingrese el Texto..."
      sx={{ m: 4 }}
      onChange={(e) => setText(e.target.value)}
      multiline
    />
  );
};
export default Text;
