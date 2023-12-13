import axios from "axios";
import Swal from "sweetalert2";

import axiosInterceptorInstance from "./axiosInterceptorInstance";
import { useRouter } from "next/navigation";

export const authService = (email: string, pwd: string) => {
  return axiosInterceptorInstance.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
};
