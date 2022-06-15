import React from 'react';
import {
	ReviewDetailesWrap,
	Title,
	ThumbnailImg,
	Review,
	Store,
	Address,
} from './ReviewDetailesData.style';

const ReviewDetailesData = ({ id, title, thumbnail, content, storename, address }) => {
	return (
		<ReviewDetailesWrap>
			<Title>{title}</Title>
			<ThumbnailImg src={thumbnail} />
			<Review>{content}</Review>
			<Store>{storename}</Store>
			<Address>{address}</Address>
		</ReviewDetailesWrap>
	);
};

export default ReviewDetailesData;
