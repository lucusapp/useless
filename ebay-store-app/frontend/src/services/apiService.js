import axios from 'axios';

const API_URL = 'http://localhost:5000/api/ebay';

export const getProduct = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/product/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
    }
};
