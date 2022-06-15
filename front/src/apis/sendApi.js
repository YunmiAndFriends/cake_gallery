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
<<<<<<< HEAD
	getRecentlyReviewPost: () => {
		return api.get('/post/getRecentlyReviewPost');
=======
	getStore: req => {
		return api.get(`/gallery/getSelectGallery?selectedId=${req.selectedId}`);
>>>>>>> 56f24cf51c340102a6be23fe19db7dff26d3d6a1
	},
};
