import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Text from "./Text";
import Datepicker from "./Datepicker";
import Range from "./Range";
import Sendmodal from "./Sendmodal";

const Form = () => {
  const [displayForm, setDisplayForm] = useState({
    Texto: false,
    Fecha: false,
    Rango: false,
  });
  const [displayInputs, setDisplayInputs] = useState(false);
  const [disableCb, setDisableCb] = useState(false);
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const [range, setRange] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleDisplay = (e) => {
    setDisplayForm({
      ...displayForm,
      [e.target.name]: !displayForm[e.target.name],
    });
  };

  const handleDisplayInputs = () => {
    if (
      displayForm.Texto === false &&
      displayForm.Fecha === false &&
      displayForm.Rango === false
    )
      return alert("Seleccione al menos una opción");
    setDisplayInputs(true);
    setDisableCb(true);
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCancelForm = () => {
    setDisplayInputs(false);
    setDisableCb(false);
  };

  return (
    <>
      <Container
        sx={{
          border: "1px solid black",
          mt: 2,
          p: 2,
          borderRadius: "0.5em",
          maxWidth: "400px",
        }}
      >
        <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
          Seleccione los campos que tendrá el formulario
        </Typography>
        <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#8b8a8a",
                  "&.Mui-checked": {
                    color: "#ad0404",
                  },
                }}
              />
            }
            label="Texto"
            name="Texto"
            disabled={disableCb}
            onChange={(e) => handleDisplay(e)}
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#8b8a8a",
                  "&.Mui-checked": {
                    color: "#ad0404",
                  },
                }}
              />
            }
            name="Fecha"
            label="Fecha"
            disabled={disableCb}
            onChange={(e) => handleDisplay(e)}
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: "#8b8a8a",
                  "&.Mui-checked": {
                    color: "#ad0404",
                  },
                }}
              />
            }
            name="Rango"
            label="Rango"
            disabled={disableCb}
            onChange={(e) => handleDisplay(e)}
          />
        </FormGroup>
        <Button
          variant="contained"
          onClick={handleDisplayInputs}
          sx={{
            m: 2,
            backgroundColor: "#ad0404",
            "&:focus": {
              boxShadow: "initial",
              backgroundColor: "#6b0303",
            },
          }}
        >
          Crear
        </Button>
      </Container>

      {displayInputs && (
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            mt: 2,
            borderRadius: "0.5em",
          }}
        >
          <Text display={displayForm.Texto} setText={setText} />
          <Datepicker
            display={displayForm.Fecha}
            setDate={setDate}
            date={date}
          />
          <Range display={displayForm.Rango} setRange={setRange} />
          <Container>
            <Button
              variant="contained"
              onClick={handleOpenModal}
              sx={{
                mt: 2,
                mx: 0.5,
                mb: 3,
                backgroundColor: "#ad0404",

                "&:focus": {
                  boxShadow: "initial",
                  backgroundColor: "#6b0303",
                },
              }}
            >
              Enviar
            </Button>
            <Button
              variant="contained"
              onClick={handleCancelForm}
              sx={{
                mt: 2,
                mx: 0.5,
                mb: 3,
                backgroundColor: "#ad0404",

                "&:focus": {
                  boxShadow: "initial",
                  backgroundColor: "#6b0303",
                },
              }}
            >
              Cancelar
            </Button>
          </Container>
        </Container>
      )}
      {openModal && (
        <Sendmodal
          openModal={openModal}
          setOpenModal={setOpenModal}
          text={text}
          isText={displayForm.Texto}
          date={date}
          isDate={displayForm.Fecha}
          range={range}
          isRange={displayForm.Rango}
        />
      )}
    </>
  );
};

export default Form;
