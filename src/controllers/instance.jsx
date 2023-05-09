import axios from "axios";

const instance = axios.create({
    baseURL: 'https://order-automation-debug-server.onrender.com/api',
    headers: {
        "Content-Type": "application/json",
    }
})

export default instance;