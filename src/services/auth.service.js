import ApiService from '../utils/api';

const apiBase = process.env.ROOT_API;
const client = new ApiService({ baseURL: apiBase });

const auth = {};

auth.login = (body) => client.post('/user/login', body);

auth.register = (body) => client.post('/user/register', body);

auth.logout = (history) => {
    localStorage.clear();
    history.go(0);
};

auth.updateProfile = (profile) => client.put('/user_info/change', profile);

auth.changePassword = (userId, currentPassword, new_password) => client.put(`/user/update/${userId}`, { currentPassword, new_password })

auth.comment = (content, filmId, userId) => client.post(`/comment/film?filmId=${filmId}&&_id=${userId}`, { content });

auth.rate = (filmId, numberofrating, userId) => client.post(`/rating/film?filmId=${filmId}&&numberofrating=${numberofrating}&&_id=${userId}`);

auth.getProfile = (userId) => client.get(`/user/${userId}`);

export default auth;