import React from 'react';
import { StoreGalleryWrap, ThumbnailImg, Storename, Storeinfo } from './SelectedStoreGallery.style';
import { Link } from 'react-router-dom';

const SelectedStoreGallery = ({ id, name, thumbnail, content }) => {
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

export default SelectedStoreGallery;
