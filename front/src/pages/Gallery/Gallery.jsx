import React from 'react';
import { Content, Header, Body, Mypage, Login, Menu } from './Gallery.style';
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
				<Menu>
					<Mypage>Mypage</Mypage>
					<Login>Login</Login>
				</Menu>
				main
			</Header>
			<Body>
				<SelectBox option={OPTION} />
			</Body>
		</Content>
	);
};

export default Gallery;
