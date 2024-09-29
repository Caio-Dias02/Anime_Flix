import axios from "axios";

//BASE_URL: https://api.jikan.moe/v4

const Api = axios.create({
    baseURL: "https://api.jikan.moe/v4/"
});

export default Api;