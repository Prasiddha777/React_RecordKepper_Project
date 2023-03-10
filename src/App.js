import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import Data from "./components/Data";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([
      ...data,
      {
        name: name,
        email: email,
      },
    ]);
    setName("");
    setEmail("");
  };
  return (
    <div className="App">
      <Header />
      {/* Form Section */}
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button
            variant="contained"
            style={{ backgroundColor: "#192a56" }}
            onClick={addData}
          >
            Add Record
          </Button>
        </Stack>
      </div>

      {/* Data Section */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((e, i) => {
          return <Data key={i} name={e.name} email={e.email} index={i} />;
        })}
      </div>
    </div>
  );
}

export default App;
