import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export const getAllProducts = (serchTerm) => {
    return axios.get(`${BASE_URL}/products?name=${serchTerm || ''}`)
};