import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { format } from "date-fns";
import es from "date-fns/locale/es";

const Datepicker = ({ display, date, setDate }) => {
  if (!display) {
    return null;
  }
  return (
    <Container sx={{ mx: 0, mt: 2 }}>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={es}>
        <DateTimePicker
          label="Seleccione Fecha y Hora..."
          value={date}
          onChange={(newDate) => {
            setDate(format(newDate, "dd-MMMM-yyyy HH:mm", { locale: es }));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Container>
  );
};

export default Datepicker;
