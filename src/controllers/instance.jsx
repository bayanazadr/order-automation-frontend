import axios from "axios";

const instance = axios.create({
    baseURL: 'http://77.243.80.82:1313/api',
    // baseURL: 'https://order-automation-debug-server.onrender.com/api',
    headers: {
        "Content-Type": "application/json",
    }
})

export default instance;