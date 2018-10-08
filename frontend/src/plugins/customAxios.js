import axios from "axios";

export default axios.create({
  baseURL: process.env.NODE_ENV == "production" ? "'Production URL'/v1" : "http://localhost:3000/v1",
  timeout: 3000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  }
});
