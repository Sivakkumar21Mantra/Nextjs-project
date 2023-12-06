import axios from "axios";
import toast from "react-hot-toast";

export default async function MyComponent() {
  // Make a request for data to an API\

  await axios.get("mock/api", {}).catch((error) => {
    console.log(error);
    // Swal.fire({
    //   title: "The Internet?",
    //   text: "That thing is still around?",
    //   icon: "question",
    // });
    toast.error(error.message, { duration: 1000, position: "top-center" });
  });
}
