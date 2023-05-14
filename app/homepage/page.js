"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button, TextField } from "@mui/material/";
import axios from "axios";
import FileBase from "react-file-base64";
function Page(props) {
  const [data, setData] = useState({
    Name:"",
    Tag:"",
    Description:"",
    file:"",
  });
  const handleSubmit = async() => {
    try{
      await axios.post("http://localhost:3000/api/save",data).then(res=>{
      console.log(res.data);
    }).catch(err=>{
      console.log(err.response.data.error);
    })}catch(err){
      console.log(err.response.data.error);
    }
  };
  return (
    <>
      <div
        style={{
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <TextField
          fullWidth
          id="filled-basic"
          label="Name"
          variant="filled"
          onChange={(e) => {
            setData({ ...data, Name: e.target.value });
          }}
        />
        <TextField
          fullWidth
          id="filled-basic"
          label="Tag"
          variant="filled"
          onChange={(e) => {
            setData({ ...data, Tag: e.target.value });
          }}
        />
        <TextField
          fullWidth
          id="filled-basic"
          label="Description"
          variant="filled"
          onChange={(e) => {
            setData({ ...data, Description: e.target.value });
          }}
        />
        <FileBase
          value={data.file}
          type="file"
          multiple={false}
          onDone={({ base64 }) => {
            setData({ ...data, file: base64 });
          }}
        />
        <Button onClick={handleSubmit} variant="contained">
          Submit
        </Button>
      </div>
    </>
  );
}
export default Page;
