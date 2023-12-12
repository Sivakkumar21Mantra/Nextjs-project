import axios from "axios";
import Swal from "sweetalert2";

export const authService = (email: string, pwd: string) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      Swal.fire(err.message);
    });
};
