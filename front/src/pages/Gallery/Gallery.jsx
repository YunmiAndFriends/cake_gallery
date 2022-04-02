import React from 'react';
import { Content, Header, Body } from './Gallery.style';
import SelectBox from './SelectBox';

const OPTION = [
	{ value: 'famous', name: '인기순' },
	{ value: 'cheap', name: '가격 낮은순' },
	{ value: 'expensive', name: '가격 높은순' },
	{ value: 'near', name: '거리 가까운순' },
];

const Gallery = () => {
	return (
		<Content>
			<Header>
				<input type="button" value="Mypage" />
			</Header>
			<Body>
				<SelectBox option={OPTION} />
			</Body>
		</Content>
	);
};

export default Gallery;
