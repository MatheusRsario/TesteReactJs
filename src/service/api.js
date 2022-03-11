import axios from "axios";

const api = axios.create({
  baseURL: "https://fakerapi.it/api"
});

export default api;