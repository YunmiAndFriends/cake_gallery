import React from 'react';
import {
	RandomGalleryWrap,
	ThumbnailImg,
	Storename,
	Storeinfo,
	Store,
} from './style_RandomGalleryData';

const RandomGalleryData = ({ id, name, thumbnail, content }) => {
	return (
		<RandomGalleryWrap>
			<ThumbnailImg src={thumbnail} />
			<Store>
				<Storename>{name}</Storename>
				<Storeinfo>{content}</Storeinfo>
			</Store>
		</RandomGalleryWrap>
	);
};

export default RandomGalleryData;
