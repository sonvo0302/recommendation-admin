import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FilmItem, Skeleton } from '../../components';
import { categoryApi, filmApi } from '../../services';

import _ from 'lodash';
import './index.scss';

const Film = () => {
	const { category_id } = useParams();
	const categories = useSelector((state) => state.common.categories);

	const [
		films,
		setFilms
	] = useState([]);

	const [
		category,
		setCategory
	] = useState(categories.find((category) => category._id === category_id));

	useEffect(
		() => {
			if (category_id) {
				categoryApi.getFilmByCategory(category_id).then((res) => {
					setFilms(res.films || []);
				});
			}
		},
		[
			category_id
		]
	);

	console.log('CATEGORY : ', category_id);

	if (_.isEmpty(films)) {
		return (
			<div className="film">
				<div className="film-heading">
					<p className="text-heading">{category.name}</p>
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
				<p className="text-heading">{category.name}</p>
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

export default Film;
