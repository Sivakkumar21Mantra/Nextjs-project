import axios from "axios";
import Swal from "sweetalert2";

import axiosInterceptorInstance from "./axiosInterceptorInstance";

export const authService = (email: string, pwd: string) => {
  axiosInterceptorInstance
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response: any) => {
      console.log(response);
    })
    .catch((err: any) => {
      Swal.fire(err.message);
    });
};
