import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

const FilmItem = ({ film }) => {
	const history = useHistory();
	return (
		<div
			className="film-item d-flex flex-column"
			onClick={() => history.push(`/film-detail/${film._id}`)}
			style={{ borderRadius: '10px', border: '1px solid rgba(202, 202, 202, 0.3)' }}
			title={film.name || ''}
		>
			<div className="film-item--img-wrapper">
				<div className="film-item--img" style={{ backgroundImage: `url(${film.imageUrl})` }} />
			</div>
			<div className="d-flex flex-column">
				<span className="text-normal film-item--title text-center ellipse text-nowrap">{film.name}</span>
				<span className="film-item--title text-center text-light ">
					Lượt xem : {film.viewFilm}
				</span>
			</div>
		</div>
	);
};

export default FilmItem;
