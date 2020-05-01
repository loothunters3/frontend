import axios from 'axios';

axios.defaults.withCredentials = true;

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		baseURL : 'https://loothunters3.herokuapp.com/api/',
		headers : {
			Authorization: `Token ${token}`
		},
	});
};