import React from 'react';
import { Card } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const PosterSkeleton = () => {
	return (
		<div style={{ padding: '30px 100px' }}>
			<Card>
				<div className="d-flex flex-wrap p-2">
					<Skeleton animation="wave" className="col-3" height={300} variant="rect" />
					<div className="col-9 d-flex flex-column justify-content-between">
						<div>
							<Skeleton animation="wave" width={300} height={60} variant="text" />
							<Skeleton animation="wave" width={100} height={30} variant="text" />
						</div>
						<Skeleton animation="wave" width={100} height={40} variant="rect" />
					</div>
				</div>
			</Card>
		</div>
	);
};

const FilmSkeleton = () => {
	return (
		<div className="px-2">
			<Card>
				<Skeleton width="100%" height={300} variant="rect" animation="wave" />
				<Skeleton width="100%" height={40} variant="text" animation="wave" />
			</Card>
		</div>
	);
};

const CommentSkeleton = () => {
	return (
		<div className="d-flex flex-wrap my-4">
			<div className="col-1">
				<Card>
					<Skeleton width="100%" height={50} variant="rect" />
				</Card>
			</div>
			<div className="col-10 ml-3">
				<Card>
					<Skeleton width="60%" height={30} variant="text" />
					<Skeleton width="60%" height={20} variant="text" />
				</Card>
			</div>
		</div>
	);
};

const FilmDetailSkeleton = () => {
	const renderPlayer = () => {
		return (
			<div className="player">
				<Card>
					<Skeleton width="100%" height={500} variant="rect" animation="wave" />
				</Card>
			</div>
		);
	};

	const renderInfo = () => {
		return (
			<Card>
				<div className="info row">
					<div className="col-2">
						<Skeleton width="100%" height="300px" variant="rect" animation="wave" />
					</div>
					<div className="col-6">
						<div className="info-description d-flex flex-column">
							<div className="d-flex justify-content-between align-items-center">
								<Skeleton width="100%" height={40} variant="text" animation="wave" />
								<div className="rating d-flex align-items-center">
									<Skeleton width="100%" height={40} variant="rect" animation="wave" />
									<Skeleton width="100%" height={40} variant="text" animation="wave" />
								</div>
							</div>
							<Skeleton width="100%" height={30} variant="text" animation="wave" />
							<p className="text-normal">Nội dung</p>
							<Skeleton width="100%" height={150} variant="text" animation="wave" />
						</div>
					</div>
					<div className="col-4">
						<div className="info-detail">
							<div className="d-flex">
								<div>Thời lượng</div>
								<Skeleton width="100%" height={30} variant="text" animation="wave" />
							</div>
							<div className="d-flex">
								<div>Đạo diễn </div>
								<Skeleton width="100%" height={30} variant="text" animation="wave" />
							</div>
							<div className="d-flex">
								<div>Diễn viên</div>
								<Skeleton width="100%" height={30} variant="text" animation="wave" />
							</div>
							<div className="d-flex">
								<div>Quốc gia</div>
								<Skeleton width="100%" height={30} variant="text" animation="wave" />
							</div>
							<div className="d-flex">
								<Skeleton width="100%" height={30} variant="text" animation="wave" />
							</div>
						</div>
					</div>
				</div>
			</Card>
		);
	};

	const renderComments = () => {
		const comments = [
			{ id: 1, name: 'Hung dep trai', content: 'Phim hay qua', avatar: 'H' },
			{
				id: 2,
				name: 'Van la Hung dep trai',
				content: 'Phim hay qua',
				avatar: 'V'
			},
			{ id: 3, name: 'Hung dep trai', content: 'Phim kha qua', avatar: 'H' },
			{ id: 4, name: 'Hung dep trai', content: 'Good', avatar: 'K' }
		];

		return (
			<div className="comments">
				<p className="text-sub-heading">Bình luận</p>
				<Card>
					<div className="d-flex flex-column">{comments.map((comment) => <CommentSkeleton />)}</div>
				</Card>
			</div>
		);
	};
	return (
		<div className="film-detail">
			<div className="container d-flex flex-wrap">
				{renderPlayer()}
				{renderInfo()}
				{renderComments()}
			</div>
		</div>
	);
};

export default { PosterSkeleton, FilmSkeleton, CommentSkeleton, FilmDetailSkeleton };
