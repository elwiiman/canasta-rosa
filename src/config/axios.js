import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://canastarosa.com/services/api/v1/market",
});

export default axiosClient;
