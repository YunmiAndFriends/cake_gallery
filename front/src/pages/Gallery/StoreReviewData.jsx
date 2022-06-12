import React from 'react';
import { StoreReviewWrap, ThumbnailImg, Storename, Storeinfo } from './StoreReviewData.style';

const StoreReviewData = ({ id, name, thumbnail, content }) => {
	return (
		<StoreReviewWrap>
			<ThumbnailImg src={thumbnail} />
			<Storename>{name}</Storename>
			<Storeinfo>{content}</Storeinfo>
		</StoreReviewWrap>
	);
};

export default StoreReviewData;
