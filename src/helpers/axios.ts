import axios from 'axios';
import { General } from "../constants/General";
// import { useGeneralStore } from "../store/GeneralStore";

// const generalStore = useGeneralStore();

const instance = axios.create({
    baseURL: General.API_URL
});

// if (generalStore.isLoggedIn) {
    // instance.defaults.headers.common['Authorization'] = generalStore.getApiKey;
// }

instance.interceptors.response.use(function (response) {
    return response.data;
});

export default instance;