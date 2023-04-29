"use client";
import { useState } from "react";
import axios from "axios";
import { Button, TextField, Typography } from "@mui/material/";
export default function loginPage() {
  const [user, setUser] = useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth", user);
      if (response) {
        console.log(response.data);
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
    setUser({})
  };
  return (
    <div
      style={{
        border: "2px solid #ccc",
        marginTop: "40px",
        backgroundColor: "#fff",
        padding: "10px",
      }}
    >
      <div style={{ textAlign: "center", margin: "20px" }}>
        <Typography variant="h4" gutterBottom>
          LOGIN
        </Typography>
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <TextField
          fullWidth
          type="email"
          id="filled-basic"
          label="email"
          variant="filled"
          style={{ marginTop: "5px" }}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <TextField
          fullWidth
          type="password"
          id="filled-basic"
          label="password"
          variant="filled"
          style={{ marginTop: "5px" }}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <Button
          style={{
            margin: "5px auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
