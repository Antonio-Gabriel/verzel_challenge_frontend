import axios from "axios";

// Actualizar o host apartir daqui

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  headers: {
    "Content-type": "application/json",
  },
});
