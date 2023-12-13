import React from "react";
import { createContext, useContext, useState } from "react";

import { AppContext } from "./App";

export const ChildComponent = (props) => {
  let { text2 } = useContext(AppContext);
  return (
    <>
      <div>{text2}</div>
      <div>{props.msg}</div>
    </>
  );
};
