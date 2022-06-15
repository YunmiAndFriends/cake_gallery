import React from 'react';
import {
	SelectedStoreGalleryWrap,
	ThumbnailImg,
	Storename,
	Storearea,
} from './SelectedStoreGallery.style';
import { Link } from 'react-router-dom';

const SelectedStoreGallery = ({ id, name, thumbnail, content }) => {
	return (
		<Link style={{ textDecoration: 'none', color: 'black' }} to="/Store">
			<SelectedStoreGalleryWrap>
				<ThumbnailImg src={thumbnail} />
				<Storename>{name}</Storename>
				<Storearea>{content}</Storearea>
			</SelectedStoreGalleryWrap>
		</Link>
	);
};

export default SelectedStoreGallery;
