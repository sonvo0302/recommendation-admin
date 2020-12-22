import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Category from '../../components/Category/Category';
import { filmApi } from '../../services';
import category from '../../services/category.service';
import FilmByCategory from './FilmByCategory/FilmByCategory';
import Poster from './Poster';

import './home.scss';
import { useSelector } from 'react-redux';

const Home = (props) => {
	const { getCategories } = props;
	const categories = [
		{ name: 'Phim mới nhất', path: '/film/newest', id: 1 },
		{ name: 'Phim được xem nhiều nhất', path: '/film/top', id: 2 },
		{
			name: 'Phim đã xem',
			path: '/film/history',
			id: 3
		}, {
			name: 'Phim thịnh hành', path: '#', id: 4
		}
	];

	const [
		lastestFilm,
		setLastedFilm
	] = useState([]);
	const [
		mostFilm,
		setMostFilm
	] = useState([]);

	const [
		film,
		setFilm
	] = useState([]);

	const userId = useSelector(state => state.auth.user._id);

	const loadFilm = () => {
		return new Promise(async (res, rej) => {
			try {
				Promise.all([
					filmApi.getLastestFilm({ page: 1, limit: 8 }),
					filmApi.getAlmostFilm({ page: 1, limit: 8 }),
					filmApi.getUserHistoryFilm(userId, 1, 6),
					filmApi.getTrendingFilm()
				]).then((result) => {
					setFilm(result);
					res(result);
				});
			} catch (err) {
				rej(err);
			}
		});
	};

	useEffect(() => {
		Promise.all([
			getCategories(),
			loadFilm()
		]);
	}, []);

	const renderTrendingFilm = () => <FilmByCategory films={film[3]} category={categories[3]} />

	const renderLastestFilm = () => <FilmByCategory films={film[0]?.films} category={categories[0]} />;

	const renderAlmostFilm = () => <FilmByCategory films={film[1]?.films} category={categories[1]} />;

	const renderHistoryFilm = () => <FilmByCategory films={film[2]?.film_user_history} category={categories[2]} />;

	return (
		<div className="home">
			<Poster films={film[0]?.films} />
			<Category categories={props.categories} />
			<div className="container">
				{renderTrendingFilm()}
				{renderLastestFilm()}
				{renderAlmostFilm()}
				{renderHistoryFilm()}
			</div>
		</div>
	);
};

export default Home;
