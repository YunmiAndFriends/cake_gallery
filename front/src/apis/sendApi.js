import api from './common';

export default {
	login: req => {
		return api.post('/auth/login', req);
	},
};
