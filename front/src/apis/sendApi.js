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
	getRecentlyReviewPost: () => {
		return api.get('/post/getRecentlyReviewPost');
	},
	getStore: req => {
		return api.get(`/gallery/getSelectGallery?selectedId=${req.selectedId}`);
	},
	getPosting: req => {
		return api.post(`/post/createReviewPosting`, req);
	},
	registerGallery: req => {
		return api.post('/gallery/registerGallery', req);
	},
	getAllReviewPost: () => {
		return api.get('/gallery/getAllReviewPost');
	},
	getReviewDetailes: req => {
		return api.get(`/post/readReviewPost?selectedId=${req.selectedId}`);
	},
};
