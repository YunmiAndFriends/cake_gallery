import React from 'react';
import { AllReviewWrap, ThumbnailImg, Storename, Review } from './AllReviewData.style';

const AllReviewData = ({ id, title, thumbnail, writer }) => {
	return (
		<AllReviewWrap>
			<ThumbnailImg src={thumbnail} />
			<Storename>{title}</Storename>
			<Review>{writer}</Review>
		</AllReviewWrap>
	);
};

export default AllReviewData;
