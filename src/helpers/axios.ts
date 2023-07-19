import axios from 'axios';
import { General } from "../constants/General";

const instance = axios.create({
    baseURL: General.API_URL
});

const key = localStorage.getItem('apiKey');

if (key) {
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + key;
}

instance.interceptors.response.use(function (response) {
    return response.data;
});

export default instance;