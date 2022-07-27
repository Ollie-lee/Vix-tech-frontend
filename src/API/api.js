import axios from "axios";

// Create an instance of axios
const api = axios.create({
  baseURL: "http://127.0.0.1:3000/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
