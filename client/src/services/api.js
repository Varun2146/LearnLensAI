import axios from "axios";

const API = axios.create({
  baseURL: "https://learnlens-backend-568j.onrender.com",
});

export default API;
