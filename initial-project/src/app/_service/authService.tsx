import axiosInterceptorInstance from "./axiosInterceptorInstance";

export const authService = (email: string, pwd: string) => {
  return axiosInterceptorInstance.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
};
