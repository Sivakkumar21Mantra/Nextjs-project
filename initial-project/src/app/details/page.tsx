"use client";
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import MyComponent from "../_service/detailsService";
import { Button } from "@mui/material";
import CustomDropdown from "@/components/customDropdown/customDropdown";

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
  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];
  const customStyles: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#fff",
  };
  const selectStyles: React.CSSProperties = {
    borderColor: "",
    borderRadius: "18px",
    height: "40px",
    width: "50%",
  };

  const menuItemStyles: React.CSSProperties = {
    backgroundColor: "#fff",
    color: "#FF0000",
  };
  const handleDropdownChange = (selectedValue: string) => {
    console.log("Selected value:", selectedValue);
  };

  return (
    <div>
      <Button className="text-yellow-800" variant="text">
        Text
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <div onClick={handleClick}>Click</div>
      <div className="px-3">
        <h1>Dropdown Component</h1>
        <CustomDropdown
          options={dropdownOptions}
          label="Select an option"
          customStyle={customStyles}
          selectStyle={selectStyles}
          menuItemStyle={menuItemStyles}
          onSelectedValueChange={handleDropdownChange}
          className="my-custom-class"
        />
      </div>
    </div>
  );
};

export default page;
