import React from 'react';
import { StoreGalleryWrap, ThumbnailImg, Storename, Storeinfo } from './StoreGallery.style';

const StoreGallery = ({ id, name, thumbnail, content }) => {
	return (
		<StoreGalleryWrap>
			<ThumbnailImg src={thumbnail} />
			<Storename>{name}</Storename>
			<Storeinfo>{content}</Storeinfo>
		</StoreGalleryWrap>
	);
};

export default StoreGallery;
