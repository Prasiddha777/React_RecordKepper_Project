import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField id="outlined-basic" label="name" variant="outlined" />
          <TextField id="outlined-basic" label="email" variant="outlined" />
          <Button variant="contained" style={{ backgroundColor: "#192a56" }}>
            Add Record
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default App;
