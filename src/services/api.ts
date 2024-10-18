// src/services/api.ts
import axios from 'axios';

const API_URL = 'https://api.example.com'; // replace with the actual API URL

export const fetchData = async () => {
    const response = await axios.get(`${API_URL}/endpoint`); // replace with the actual endpoint
    return response.data;
};
