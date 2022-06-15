import React from 'react';
import { AllReviewWrap, ThumbnailImg, Storename, Review } from './AllReviewData.style';
import { Link } from 'react-router-dom';

const AllReviewData = ({ id, title, thumbnail, writer }) => {
	return (
		<Link style={{ textDecoration: 'none', color: 'black' }} to="/ReviewDetailes">
			<AllReviewWrap>
				<ThumbnailImg src={thumbnail} />
				<Storename>{title}</Storename>
				<Review>{writer}</Review>
			</AllReviewWrap>
		</Link>
	);
};

export default AllReviewData;
