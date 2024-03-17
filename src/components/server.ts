import axios from "axios";
const appAxios = axios.create({
  baseURL: "45.139.10.149:1001/api",
  timeout: 1000,
});

export default appAxios;
