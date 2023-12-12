import { Button, Dialog } from "@mui/material";
import React from "react";
import "./customDialog.css";

const CustomDialog = (props: any) => {
  const openCustomDialog = () => {
    switch (props.dialogName) {
      case "form-dialog":
        return (
          <div className={props.customStyle}>
            <div className="p-10">
              <h1 className="my-20">Form Dialog</h1>
              <Button onClick={props.handleClose}>Close</Button>
            </div>
          </div>
        );
      default:
        return (
          <div className={props.customStyle}>
            <div className="p-10">
              <h1 className="my-20">Default Dialog</h1>
              <Button onClick={props.handleClose}>Close</Button>
            </div>
          </div>
        );
    }
  };
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={props._isOpen}
      // disableEscapeKeyDown={true}
      onClose={props.handleClose}
    >
      {openCustomDialog()}
    </Dialog>
  );
};

export default CustomDialog;
