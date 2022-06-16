import React from 'react';
import { AllReviewWrap, ThumbnailImg, Storename, Review } from './AllReviewData.style';
import { useNavigate } from 'react-router-dom';

const AllReviewData = ({ id, title, thumbnail, writer }) => {
	const navigate = useNavigate();

	const onClickMovePage = () => {
		navigate(`/ReviewDetailes?selectedId=${id}`);
	};
	return (
		<AllReviewWrap onClick={onClickMovePage}>
			<ThumbnailImg src={thumbnail} />
			<Storename>{title}</Storename>
			<Review>{writer}</Review>
		</AllReviewWrap>
	);
};

export default AllReviewData;
