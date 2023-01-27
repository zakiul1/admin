import axios from "axios";

// Set config defaults when creating the instance
const axiosCall = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,GET,OPTIONS,PUT,DELETE",
    "Content-Type": "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default axiosCall;
