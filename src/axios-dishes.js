import axios from 'axios';

const axiosDishes = axios.create({
    baseURL: 'https://dishes-f9d15.firebaseio.com/'
});
//
// axiosDishes.interceptors.request.use(req => {
//     return req;
// });
//
// axiosDishes.interceptors.response.use(res => {
//     return res;
// }, err => {
//     throw err;
// });

export default axiosDishes;