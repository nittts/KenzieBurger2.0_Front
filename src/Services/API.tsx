import axios from "axios";

const API = axios.create({
  baseURL: "https://hamburgueria-kenzie-api-nittts.herokuapp.com",
  timeout: 5000,
});

export default API;
