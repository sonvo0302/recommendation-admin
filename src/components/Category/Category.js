import React, { useEffect, useState } from 'react';

import { CSSTransition, Transition } from 'react-transition-group';

import './index.scss';

const Category = (props) => {
	const [
		categories
	] = useState(props.categories || []);

	const [
		open,
		setOpen
	] = useState(false);

	return (
		<div className="category">
			<p className="category-title text-sub-heading" onClick={() => setOpen(!open)}>
				Thể loại
			</p>
			<Transition in={true} timeout={10}>
				{(status) => (
					<ul className={`category-list ${status}`}>
						{categories.map((category, index) => (
							<li key={index} className="category-item">
								<a href={`/categories/${category._id}`} className="item-link">
									{category.name}
								</a>
							</li>
						))}
					</ul>
				)}
			</Transition>
		</div>
	);
};

export default Category;
