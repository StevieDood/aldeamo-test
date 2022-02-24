import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "20em",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Sendmodal = ({
  openModal,
  setOpenModal,
  text,
  date,
  range,
  isDate,
  isText,
  isRange,
}) => {
  const handleSendInfo = () => {
    alert("Información enviada correctamente");
    window.location.reload();
  };
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Datos del formulario
          </Typography>
          {isText ? (
            <Typography sx={{ mt: 2 }}>Su texto: {text}</Typography>
          ) : null}
          {isDate ? (
            <Typography sx={{ mt: 2 }}>Su fecha: {date.toString()}</Typography>
          ) : null}
          {isRange ? (
            <Typography sx={{ mt: 2 }}>Su rango: {range}</Typography>
          ) : null}
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Si su información es correcta, de Click en Enviar, de lo contrario,
            de click en cancelar.
          </Typography>

          <Button
            onClick={handleSendInfo}
            variant="contained"
            sx={{
              m: 2,
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
            onClick={handleCloseModal}
            variant="contained"
            sx={{
              m: 2,
              backgroundColor: "#ad0404",
              "&:focus": {
                boxShadow: "initial",
                backgroundColor: "#6b0303",
              },
            }}
          >
            Cancelar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Sendmodal;
