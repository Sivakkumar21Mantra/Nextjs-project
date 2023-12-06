"use client";
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import MyComponent from "../_service/detailsService";
import { Button } from "@mui/material";

const handleClick = async () => {
  try {
    MyComponent();
  } catch (error) {
    console.log(error);
    // Swal.fire({
    //   title: "The Internet?",
    //   text: "That thing is still around?",
    //   icon: "question",
    // });
    toast.error("You did it!", { duration: 1000, position: "top-center" });
  }
};
const page = () => {
  return (
    <div>
      <Button className="text-yellow-800" variant="text">
        Text
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <div onClick={handleClick}>Click</div>
    </div>
  );
};

export default page;
