import api from './common';

export default {
	login: req => {
		return api.post('/auth/login', req);
	},
	getAllGallery: () => {
		return api.get('/gallery/getAllGallery');
	},
	getRecentlyGallery: () => {
		return api.get('/gallery/getRecentlyGallery');
	},
};
