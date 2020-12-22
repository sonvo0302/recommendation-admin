import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Rating } from '@material-ui/lab';
import { StarBorder } from '@material-ui/icons';
import _ from "lodash"
import { Comment, RatingDialog, Skeleton } from '../../components';
import './index.scss';
import { filmApi } from '../../services';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

import { authApi } from "../../services";
import { useSelector } from 'react-redux';

const FilmDetail = () => {
	const [
		open,
		setOpen
	] = useState(false);

	const { filmId } = useParams();
	const [
		filmDetail,
		setFilmDetail
	] = useState({});

	const [
		rating,
		setRating
	] = useState(filmDetail.rating || 5);

	const [comments, setComments] = useState([]);
	const [comment, setComment] = useState("");
	const { user } = useSelector(state => state.auth);

	useEffect(() => {
		Promise.all([filmApi.getFilmDetail(filmId), filmApi.getComments(filmId, 1, 5)]).then(values => {
			setFilmDetail({ ...values[0].films, rating: values[0].ratingAverage });
			setRating(values[0].ratingAverage);
			setComments(values[1].comments);
		})

	}, []);

	const onHandleRating = (filmId, rating, userid) => {
		authApi.rate(filmId, rating, userid).then(res => {
		});
	}

	const renderPlayer = () => {
		return (
			<div className="player">
				<ReactPlayer
					className="player-video"
					url={filmDetail.linkTrailer}
					width="100%"
					height="100%"
				/>
			</div>
		);
	};

	const renderInfo = () => {
		return (
			<div className="info row">
				<div className="col-2">
					<div className="info-img--wrapper">
						<div
							className="info-img"
							style={{ backgroundImage: `url(${filmDetail.imageUrl}` }}
						/>
					</div>
				</div>
				{!_.isEmpty(filmDetail) && <>
					<div className="col-6">
						<div className="info-description d-flex flex-column">
							<div className="d-flex justify-content-between align-items-center">
								<p className="text-sub-heading">{filmDetail.name}</p>
								<div className="rating d-flex align-items-center" onClick={() => setOpen(true)}>
									<Rating
										name="simple-controlled"
										value={rating}
										precision={0.1}
										readOnly
										size="large"
										emptyIcon={<StarBorder fontSize="inherit" style={{ color: 'white' }} />}
									/>

									<span className="text-sub-heading">{rating}</span>
								</div>
							</div>
							<p className="text-normal">Nội dung</p>
							<p className="text-light">{filmDetail.description}</p>
						</div>
					</div>
					<div className="col-4">
						<div className="info-detail">
							<div className="d-flex">
								<div>Thời lượng</div>
								<div>95 phút</div>
							</div>
							<div className="d-flex">
								<div>Đạo diễn </div>
								<div>{filmDetail.director?.full_name}</div>
							</div>
							<div className="d-flex">
								<div>Diễn viên</div>
								<div>{filmDetail.cast}</div>
							</div>
							<div className="d-flex">
								<div>Quốc gia</div>
								<div>Nhật Bản</div>
							</div>
							<div className="d-flex">
								<div>Thể loại</div>
								<div>{filmDetail.categories.map(category => <span key={category.category._id}>{category.category.name + ", "}</span>)}</div>
							</div>
						</div>
					</div>
				</>}
			</div>
		);
	};

	const onHandleComment = () => {
		authApi.comment(comment, filmDetail._id, user._id).then(res => {
			setComments([{ id: comments.length, user: user, content: comment, avatar: 'U' }, ...comments])
			setComment("");
		})
	}

	const renderComments = () => {
		return (
			<div className="comments">
				<p className="text-sub-heading">Bình luận</p>

				<div className="d-flex flex-column comment-wrapper">
					<div className="comment-item d-flex flex-wrap">
						<div className="col-2 d-flex justify-content-center align-items-center">
							<div className="avt-comment" style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: 'white' }}></div></div>
						<div className="col-8">
							<Form.Group>
								<Form.Label></Form.Label>
								<Form.Control
									as="textarea"
									placeholder=""
									rows={3}
									value={comment}
									onChange={(e) => setComment(e.target.value)}

								/>
							</Form.Group>
						</div>

						<div className="d-flex justify-content-center align-items-center">
							<div className='btn-comment' style={{
								fontSize: '32px', color: 'white', cursor: 'pointer'
							}}
								onClick={() => onHandleComment()}>
								<FontAwesomeIcon icon={faChevronCircleRight} />
							</div> </div>

					</div>
					{comments.map((comment) => (
						<li className="comment-item" key={comment.id}>
							<Comment comment={comment} />
						</li>
					))}
				</div>
			</div>
		);
	};

	// if (_.isEmpty(filmDetail)) {
	// 	return <div className="film-detail">
	// 		<div className="container d-flex flex-wrap">
	// 			<Skeleton.FilmDetailSkeleton />
	// 		</div>
	// 	</div>
	// }

	return (
		<div className="film-detail">
			<div className="container d-flex flex-wrap">
				{renderPlayer()}
				{renderInfo()}
				{renderComments()}
				<RatingDialog open={open} handleClose={() => setOpen(false)} rating={rating} setRating={(rating) => onHandleRating(filmDetail._id, rating, user._id)} />
			</div>
		</div>
	);
};

export default FilmDetail;
