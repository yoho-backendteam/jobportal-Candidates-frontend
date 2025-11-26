import secureStorage from 'react-secure-storage';
const backendurl = import.meta.env.VITE_API_BASE_URL;

export const GetImageUrl = (url: string) => {
	const data = url ? backendurl + url : null;
	return data;
};

export const StoreLocalStorage = (key: string, data: any) => {
	secureStorage.setItem(key, data);
};

export const GetLocalStorage = (key: string) => {
	const data: any = secureStorage.getItem(key);
	if (!data) {
		return null;
	}
	return data;
};

export const RemoveLocalStorage = (key: string) => {
	secureStorage.removeItem(key);
};

export const ClearLocalStorage = () => {
	secureStorage.clear();
};
