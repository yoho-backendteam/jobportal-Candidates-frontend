import axios from 'axios';
import { ClearLocalStorage, GetLocalStorage } from '../utils/helpers';

const backendUrl = import.meta.env.VITE_API_BASE_URL;

const Axios = axios.create({
	baseURL: backendUrl,
	timeout: 5000000,
	headers: {
		'Content-Type': 'application/json',
	},
});

Axios.interceptors.request.use((config) => {
	const token = GetLocalStorage('candidateToken');

	if (token) {
		config.headers['Authorization'] = `Token ${token}`;
	}
	return config;
});

Axios.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error?.response && error?.response.status == 401) {
			ClearLocalStorage();
			window.location.reload();
		}
	}
);

class HttpClient {
	async get(url: string, params?: any, userType?: string | undefined) {
		try {
			const response = await Axios.get(url, {
				params: params,
				headers: {
					'User-Type': userType,
					'Cache-Control': 'no-cache',
					Pragma: 'co-cache',
					'If-None-Match': '',
					'If-Modifiec-Since': '',
				},
			});
			return response?.data;
		} catch (error) {
			console.error('API get error:', error);
			throw error;
		}
	}

	async post(url: string, data?: any, params?: any, userType?: string) {
		try {
			const response = await Axios.post(url, data, {
				params: params,
				headers: {
					'User-Type': userType,
				},
			});
			return response.data;
		} catch (error) {
			console.error('API post error:', error);
			throw error;
		}
	}

	async put(url: string, data?: any, userType?: string) {
		try {
			const response = await Axios.put(url, data, {
				headers: {
					'User-Type': userType,
				},
			});
			return response?.data;
		} catch (error) {
			console.error('API update error:', error);
			throw error;
		}
	}

	async patch(url: string, data?: any, userType?: string) {
		try {
			const response = await Axios.patch(url, data, {
				headers: {
					'User-Type': userType,
				},
			});
			return response?.data;
		} catch (error) {
			console.error('API update error:', error);
			throw error;
		}
	}
	async delete(url: string, data?: { uuid: string }, userType?: string) {
		const response = await Axios.delete(url, {
			headers: {
				'Content-Type': 'multipart/form-data',
				'User-Type': userType,
			},
			params: data,
		});
		return response?.data;
	}

	async fileGet(url: string, userType?: undefined) {
		const response = Axios.get(url, {
			responseType: 'blob',
			headers: {
				'User-Type': userType,
			},
		});
		return response;
	}

	async uploadFile(url: string, data?: any, userType?: undefined) {
		const response = await Axios.post(url, data, {
			headers: {
				'Content-Type': 'multipart/form-data',
				'User-Type': userType,
			},
		});

		return response?.data;
	}
}

export default new HttpClient();
