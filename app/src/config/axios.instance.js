import axios from "axios";

const API_BASE = "http://localhost:8080/";

const instance = axios.create({
  baseURL: API_BASE,
});

export default instance;
