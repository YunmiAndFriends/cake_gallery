import React from 'react';
import { ReviewWrap, ThumbnailImg, Storename, Storeinfo, Store } from './style_ReivewData';

const ReviewData = ({ id, name, thumbnail, content }) => {
	return (
		<ReviewWrap>
			<ThumbnailImg src={thumbnail} />
			<Store>
				<Storename>{name}</Storename>
				<Storeinfo>{content}</Storeinfo>
			</Store>
		</ReviewWrap>
	);
};

export default ReviewData;
