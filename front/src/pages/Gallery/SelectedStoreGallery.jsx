import React from 'react';
import {
	SelectedStoreGalleryWrap,
	ThumbnailImg,
	Storename,
	Storearea,
} from './SelectedStoreGallery.style';
import { useNavigate } from 'react-router-dom';

const SelectedStoreGallery = ({ id, name, thumbnail, content }) => {
	const navigate = useNavigate();

	const onClickMovePage = () => {
		navigate(`/store?selectedId=${id}`);
	};
	return (
		<SelectedStoreGalleryWrap onClick={onClickMovePage}>
			<ThumbnailImg src={thumbnail} />
			<Storename>{name}</Storename>
			<Storearea>{content}</Storearea>
		</SelectedStoreGalleryWrap>
	);
};

export default SelectedStoreGallery;
