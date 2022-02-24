import React from "react";
import Container from "@mui/material/Container";
import Slider from "@mui/material/Slider";

const Range = ({ display, setRange }) => {
  if (!display) {
    return null;
  }
  return (
    <Container sx={{ mx: 0, mt: 4 }}>
      <Slider
        defaultValue={5}
        step={1}
        min={1}
        max={10}
        marks={[
          { value: 1, label: "1" },
          { value: 5, label: "5" },
          { value: 10, label: "10" },
        ]}
        valueLabelDisplay="auto"
        onChange={(e) => setRange(e.target.value)}
        sx={{ color: "#ad0404" }}
      />
    </Container>
  );
};

export default Range;
