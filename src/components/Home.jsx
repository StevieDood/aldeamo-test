import React from "react";
import Title from "./Title";
import Form from "./Form";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Container
        sx={{
          maxWidth: "95%",
        }}
      >
        <Title />
        <Form />
      </Container>
    </>
  );
};

export default Home;
