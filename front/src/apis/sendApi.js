import api from './common';

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
	getRecentlyReviewPost: () => {
		return api.get('/post/getRecentlyReviewPost');
	},
};
