import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logoAldeamo from "../assets/aldeamo.png";

const Title = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={logoAldeamo}
        alt="logo"
        height="30"
        width="80"
        style={{ margin: 5 }}
      />

      <AppBar
        position="static"
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "0.5em",
          backgroundColor: "#ad0404",
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Formulario
        </Typography>
      </AppBar>
    </Box>
  );
};

export default Title;
