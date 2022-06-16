import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	RandomGalleryWrap,
	ThumbnailImg,
	Storename,
	Storeinfo,
	Store,
} from './style_RandomGalleryData';

const RandomGalleryData = ({ id, name, thumbnail, content }) => {
	const navigate = useNavigate();
	const onClickMovePage = () => {
		navigate(`/store?selectedId=${id}`);
	};
	return (
		<RandomGalleryWrap onClick={onClickMovePage}>
			<ThumbnailImg src={thumbnail} />
			<Store>
				<Storename>{name}</Storename>
				<Storeinfo>{content}</Storeinfo>
			</Store>
		</RandomGalleryWrap>
	);
};

export default RandomGalleryData;
