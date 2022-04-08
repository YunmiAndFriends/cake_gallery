import React from 'react';
import { StoreGalleryWrap, ThumbnailImg } from './StoreGallery.style';

const StoreGallery = ({ id, name, thumbnail, content }) => {
	return (
		<StoreGalleryWrap>
			<ThumbnailImg src={thumbnail} />
			<p>{name}</p>
			<p>{content}</p>
		</StoreGalleryWrap>
	);
};

export default StoreGallery;
