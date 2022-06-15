import React from 'react';
import {
	ReviewDetailesWrap,
	Title,
	ThumbnailImg,
	Review,
	Store,
	Address,
	ReviewContent,
	StoreInfo,
	ThumbnailBack,
} from './ReviewDetailesData.style';

const ReviewDetailesData = ({ id, title, thumbnail, content, storename, address }) => {
	return (
		<ReviewDetailesWrap>
			<ThumbnailBack>
				<ThumbnailImg src={thumbnail} />
			</ThumbnailBack>
			<ReviewContent>
				<Title>{title}</Title>
				<Review>{content}</Review>
				<StoreInfo>
					<Store>{storename}</Store>
					<Address>{address}</Address>
				</StoreInfo>
			</ReviewContent>
		</ReviewDetailesWrap>
	);
};

export default ReviewDetailesData;
