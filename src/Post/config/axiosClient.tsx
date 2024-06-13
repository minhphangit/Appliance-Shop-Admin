import axios from "axios";
const axiosClient = axios.create({
  // baseURL: "http://localhost:9000/article/",
  baseURL: "http://appliance-shop-api.onrender.com/",
  timeout: 30000,
});
export default axiosClient;
