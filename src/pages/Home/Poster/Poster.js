import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import Skeleton from '../../../components/Skeleton';
// import { Card } from '@material-ui/core';
// import { Skeleton } from '@material-ui/lab';

import _ from 'lodash';
import './index.scss';

const Poster = ({ films }) => {
	const history = useHistory();
	const settings = {
		dots           : false,
		infinite       : true,
		slidesToShow   : 1,
		slidesToScroll : 1,
		speed          : 1500,
		arrows         : false,
		autoplay       : true,
		autoplaySpeed  : 3000,
		fade           : true
	};

	console.log(films);

	if (_.isEmpty(films)) {
		return <Skeleton.PosterSkeleton />;
	}

	return (
		<div className="poster">
			<Slider {...settings}>
				{films.map((film) => (
					<div className="poster-item d-flex" key={film._id}>
						<div className="poster-background">
							<div
								style={{
									backgroundImage : `url(${film.imageUrl})`
								}}
							/>
						</div>
						<div className="poster-img--wrapper col-3">
							<div
								className="poster-img"
								style={{
									backgroundImage : `url(${film.imageUrl})`,
									zIndex          : 3000
								}}
							/>
						</div>
						<div className="poster-content col-9 d-flex flex-column justify-content-between">
							<div>
								<p className="text-sub-heading">{film.name}</p>
								<p className="text-normal">{film.cast}</p>
								<p className="text-normal">Lượt xem : {film.viewFilm}</p>
							</div>
							<div>
								<Button variant="danger" onClick={() => history.push(`/film-detail/${film._id}`)}>
									Xem Ngay
								</Button>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Poster;
