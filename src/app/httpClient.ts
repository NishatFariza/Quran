import axios from "axios";

const httpClient = axios.create({
    baseURL: "https://api.quran.com/api/v3/",
    headers: {
        "content-type": "application/json",
    }
})

export default httpClient;