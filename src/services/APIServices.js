import axios from 'axios';

export const http = axios.create({     
    //baseURL: 'http://192.168.11.30:6158/api/',
    baseURL: 'http://localhost:65045/api/',
    headers: {
        'Content-Type': 'application/json',
    }
})
