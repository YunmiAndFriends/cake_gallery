import React from 'react';
import { AllReviewWrap, ThumbnailImg, Storename, Review } from './AllReviewData.style';

const AllReviewData = ({ id, name, thumbnail, content }) => {
	return (
		<AllReviewWrap>
			<ThumbnailImg src={thumbnail} />
			<Storename>{name}</Storename>
			<Review>{content}</Review>
		</AllReviewWrap>
	);
};

export default AllReviewData;
