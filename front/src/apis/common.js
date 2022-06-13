import axios from 'axios';
import { API_URL } from '../constants/index';

export default {
	get: url => {
		return axios.get('http://localhost:5500' + url);
	},

	post: (url, req) => {
		return axios.post('http://localhost:5500' + url, req);
	},
};
