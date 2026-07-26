import axios from "axios";

const api = axios.create({
  baseURL: "https://college-s-sports-club.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;