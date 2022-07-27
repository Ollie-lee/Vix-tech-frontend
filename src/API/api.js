import axios from "axios";

// Create an instance of axios
const api = axios.create({
  baseURL: "https://vix-tech-backend.herokuapp.com/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
