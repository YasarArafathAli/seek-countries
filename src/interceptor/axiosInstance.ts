import axios from 'axios';
// import {ApiRoutes} from "../routes/routeConstants/apiRoutes";

export const ApiRoutes = {
    BASE_URL : "https://restcountries.com/v3.1",
    ALL: "/all"

}

const axiosInstance = axios.create({
    baseURL: ApiRoutes.BASE_URL,
    timeout: 20000,
});

// axiosInstance.interceptors.response.use(
//     (response): any => {
//         return {
//             data: response.data,
//             message: response.statusText,
//             status: response.status
//         }
//     },
//     (error) => {
//         const { response } = error;
//         if (response.status === 401) {
//         }
//         return Promise.reject(error);
//     }
// );

export default axiosInstance;
