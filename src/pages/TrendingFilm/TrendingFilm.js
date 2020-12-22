import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FilmItem, Skeleton } from '../../components';
import { categoryApi, filmApi } from '../../services';

import _ from 'lodash';

import './index.scss';
import { useSelector } from 'react-redux';

const TrendingFilm = () => {
	const [
		films,
		setFilms
	] = useState([]);
	const history = useHistory();
	const { trending } = useParams();

	const userId = useSelector((state) => state.auth.user._id);

	useEffect(
		() => {
			if (trending === 'top') {
				filmApi.getAlmostFilm({ page: 1, limit: 8 }).then((res) => {
					setFilms(res.films || []);
				});
			} else if (trending === 'newest') {
				filmApi.getLastestFilm({ page: 1, limit: 8 }).then((res) => setFilms(res.films || []));
			} else if (trending === 'history') {
				filmApi.getUserHistoryFilm(userId, 1, 8).then((res) => setFilms(res.film_user_history || []));
			}
		},
		[
			trending
		]
	);

	if (_.isEmpty(films)) {
		return (
			<div className="film">
				<div className="film-heading">
					<p className="text-heading">
						{trending === 'newest' ? 'Phim mới nhất' : 'Phim được xem nhiều nhất'}
					</p>
					<div className="d-flex flex-wrap">
						<div className="col-2">
							<Skeleton.FilmSkeleton />
						</div>
						<div className="col-2">
							<Skeleton.FilmSkeleton />
						</div>
						<div className="col-2">
							<Skeleton.FilmSkeleton />
						</div>
						<div className="col-2">
							<Skeleton.FilmSkeleton />
						</div>
						<div className="col-2">
							<Skeleton.FilmSkeleton />
						</div>
						<div className="col-2">
							<Skeleton.FilmSkeleton />
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="film">
			<div className="film-heading">
				<p className="text-heading">{trending === 'newest' ? 'Phim mới nhất' : 'Phim được xem nhiều nhất'}</p>
				<div className="film-list d-flex flex-wrap pt-4">
					{films &&
						films.map((film) => (
							<div className="col-2">
								<FilmItem film={film} />
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default TrendingFilm;
