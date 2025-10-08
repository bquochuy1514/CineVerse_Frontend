import api from './axios';

export const registerUser = async (userData) => {
	try {
		const response = await api.post('/api/auth/register', userData);
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};
