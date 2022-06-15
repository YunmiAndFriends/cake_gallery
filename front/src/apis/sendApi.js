import api from './common';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	login: req => {
		return api.post('/auth/login', req);
	},
	signUp: req => {
		return api.post('/auth/join', req);
	},
	getAllGallery: () => {
		return api.get('/gallery/getAllGallery');
	},
	getRecentlyGallery: () => {
		return api.get('/gallery/getRecentlyGallery');
	},
	getStore: req => {
		return api.get(`/gallery/getSelectGallery?selectedId=${req.selectedId}`);
	},
};
