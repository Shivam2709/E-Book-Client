import axios from 'axios';
const baseURL = import.meta.env.VITE_PUBLIC_BACKEND_URL;

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (data: { email: string; password: string }) => {
    return api.post('/users/login', data);
};

export const register = async (data: { name: string; email: string; password: string }) => {
    return api.post('/users/register', data);
};

export const getBooks = async () => api.get('/books');
