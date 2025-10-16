import api from './axios';

export const registerUser = async (userData) => {
	try {
		const response = await api.post('/api/auth/register', userData);
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

export const loginUser = async (userData) => {
	try {
		const response = await api.post('/api/auth/login', userData);
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

export const verifyAccount = async (userData) => {
	try {
		const response = await api.post('api/auth/verify-account', userData);
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

export const resendCode = async (email) => {
	try {
		const response = await api.post('api/auth/resend-code', email);
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

export const forgotPassword = async (email) => {
	try {
		const response = await api.post('api/auth/forgot-password', email);
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

export const verifyOTP = async (userData) => {
	try {
		const response = await api.post('api/auth/verify-otp', userData);
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

export const resendOTP = async (email) => {
	try {
		const response = await api.post('api/auth/resend-otp', email);
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};

export const resetPassword = async (userData) => {
	try {
		const response = await api.post('api/auth/reset-password', userData);
		return response.data;
	} catch (error) {
		throw error.response?.data || error;
	}
};
