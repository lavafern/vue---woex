import axios from "axios";

const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    withCredentials: true,
    timeout: 30000,
    headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      }
})

export default http