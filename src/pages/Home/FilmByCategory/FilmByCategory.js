import React from 'react';
import Slider from 'react-slick';
import { FilmItem, Skeleton } from '../../../components';
import _ from 'lodash';

import './index.scss';

const FilmByCategory = ({ films, category }) => {
	const settings = {
		dots           : false,
		infinite       : false,
		slidesToShow   : 5,
		slidesToScroll : 1
	};

	return (
		<div className="film-category pb-4">
			<a className="category-heading mb-4" href={category.path}>
				{category.name}
			</a>
			{_.isEmpty(films) ? (
				<div className="d-flex flex-wrap">
					<div className="skeleton-item">
						<Skeleton.FilmSkeleton />
					</div>
					<div className="skeleton-item">
						<Skeleton.FilmSkeleton />
					</div>
					<div className="skeleton-item">
						<Skeleton.FilmSkeleton />
					</div>
					<div className="skeleton-item">
						<Skeleton.FilmSkeleton />
					</div>
					<div className="skeleton-item">
						<Skeleton.FilmSkeleton />
					</div>
				</div>
			) : (
				<Slider {...settings}>
					{films.map((film) => (
						<div className="p-3" key={film.id}>
							<FilmItem film={film} />
						</div>
					))}
				</Slider>
			)}
		</div>
	);
};

export default FilmByCategory;
