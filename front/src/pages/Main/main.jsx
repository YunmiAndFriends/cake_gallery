import React from 'react';
import { Content, Header, Menu, Mypage, Login, Body, Button } from './cover_style';
import { Img, Gallery, G_Text, G2_Text, G_Button, G_Info, R_Text, R_Info } from './main_style';
import banner from '../../assets/banner.png';

const main = () => {
	return (
		<Content>
			<Header>
				<Menu>
					<Mypage>Mypage</Mypage>
					<Login>Login</Login>
				</Menu>
			</Header>
			<Body>
				<Img src={banner} />

				{/* <Frame> */}
				<Gallery>
					<G_Text>새로운 갤러리</G_Text>
					<G2_Text>유니크한 디자인을 등록해주세요</G2_Text>
					<G_Button>등록하기</G_Button>
				</Gallery>
				<G_Info>사진, 소개글</G_Info>
				{/* </Frame> */}

				<R_Text>= = = = 인기 후기글 = = = =</R_Text>
				<R_Info>사진, 글</R_Info>
			</Body>
		</Content>
	);
};

export default main;