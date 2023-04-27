//Chave API: 6a54598bc90f48b9ac84956725da7ca29fd710c0 https://api-ssl.bitly.com/v4/shorten

import axios from "axios";

export const key = "6a54598bc90f48b9ac84956725da7ca29fd710c0"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;