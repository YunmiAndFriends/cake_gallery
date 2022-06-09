import React from 'react';
import { StoreGalleryWrap, ThumbnailImg, Storename, Storeinfo } from './SelectedStoreGallery.style';
import { Link } from 'react-router-dom';

const SelectedStoreGallery = ({ id, name, thumbnail, content }) => {
	return (
		<Link style={{ textDecoration: 'none', color: 'black' }} to="/Store">
			<StoreGalleryWrap>
				<ThumbnailImg src={thumbnail} />
				<Storename>{name}</Storename>
				<Storeinfo>{content}</Storeinfo>
			</StoreGalleryWrap>
		</Link>
	);
};

export default SelectedStoreGallery;
