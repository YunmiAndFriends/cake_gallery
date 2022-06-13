import React from 'react';
import { Content, Header, Menu, Mypage, Login, Button } from './cover_style';
import {
	Img,
	Img2,
	Img3,
	Gallery,
	Body,
	Frame,
	G_Text,
	G2_Text,
	G_Button,
	R_Text,
	R_Info,
} from './main_style';
import banner from '../../assets/banner.png';
import g_info from '../../assets/gallery_info.png';
import r_info from '../../assets/review_info.png';

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
				<Frame>
					<Gallery>
						<G_Text>새로운 갤러리</G_Text>
						<G2_Text>♥︎유니크한 디자인을 등록해주세요♥︎</G2_Text>
						<G_Button>등록하기</G_Button>
					</Gallery>
					<Img2 src={g_info} />
				</Frame>

				<R_Text>= = = = 인기 후기글 = = = =</R_Text>
				<R_Info>
					<Img3 src={r_info} />
				</R_Info>
			</Body>
		</Content>
	);
};

export default main;
