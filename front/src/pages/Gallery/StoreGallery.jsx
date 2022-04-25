import React from 'react';
import { StoreGalleryWrap, ThumbnailImg, Storename, Storeinfo } from './StoreGallery.style';
import { Link } from 'react-router-dom';

const StoreGallery = ({ id, name, thumbnail, content }) => {
	return (
		<Link to="/Store">
			<StoreGalleryWrap>
				<ThumbnailImg src={thumbnail} />
				<Storename>{name}</Storename>
				<Storeinfo>{content}</Storeinfo>
			</StoreGalleryWrap>
		</Link>
	);
};

export default StoreGallery;
