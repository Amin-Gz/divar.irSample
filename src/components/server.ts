import axios from "axios";

const appAxios = axios.create({
  baseURL: "http://45.139.10.149:1001/api",
  timeout: 1000,
});
export default appAxios;
