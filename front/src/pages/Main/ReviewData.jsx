import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReviewWrap, ThumbnailImg, Storename, Storeinfo, Store } from './style_ReivewData';

const ReviewData = ({ id, name, thumbnail, content }) => {
	const navigate = useNavigate();

	const onClickMovePage = () => {
		navigate(`/ReviewDetailes?selectedId=${id}`);
	};
	return (
		<ReviewWrap onClick={onClickMovePage}>
			<ThumbnailImg src={thumbnail} />
			<Store>
				<Storename>{name}</Storename>
				<Storeinfo>{content}</Storeinfo>
			</Store>
		</ReviewWrap>
	);
};

export default ReviewData;
