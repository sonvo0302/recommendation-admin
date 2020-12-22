import ApiService from '../utils/api';
import category from './category.service';

const apiBase = process.env.ROOT_API;
const client = new ApiService({ baseURL: apiBase });

const film = {};

film.getLastestFilm = ({ page, limit }) => client.get(`/film/lastest?page=${page}&&limit=${limit}`);

film.getFilmDetail = (film_id) => client.get(`/film/${film_id}`);

film.getAlmostFilm = ({ page, limit }) => client.get(`/film/most_watched?page=${page}&&limit=${limit}`);

film.getUserHistoryFilm = (user_id, page, limit) =>
	client.get(`/film_user_history?userId=${user_id}&&page=${page}&&limit=${limit}`);

film.getComments = (filmId, page, limit) => client.get(`/comment?filmId=${filmId}&&page=${page}&&limit=${limit}`);

film.getTrendingFilm = () => client.get('/film/trending');

export default film;
