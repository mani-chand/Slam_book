"use client";
import axios from "axios";
import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material/";
export default function signUpPage() {
  const [user, setUser] = useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await axios.post("http://localhost:3000/api/",user)
      console.log(response);
    }catch(err){
      console.log("error");
    }
    setUser({});
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
          SIGNUP
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
        <TextField
          fullWidth
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          id="filled-basic"
          label="mobile number"
          variant="filled"
          style={{ marginTop: "5px" }}
          onChange={(e) => {
            setUser({ ...user, mobile: e.target.value });
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
