import React from 'react';
import { Content, Header, Menu, Mypage, Login, Button } from './cover_style';
import { Info, Info_Button, Body, Profile, P2, P3 } from './mypage_style';
import { Frame, Frame2, Text, Text2, Text3, Text4, T5, Img, Img2 } from './mypage_style';

import profile from '../../assets/profile.png';
import cake_profile from '../../assets/cake_pf.png';

const mypage = () => {
	return (
		<Content>
			<Header>
				<Menu>
					<Mypage>Mypage</Mypage>
					<Login>Login</Login>
				</Menu>
			</Header>

			<Body>
				<Frame>
					<Img src={profile} />
					<Profile>
						<Info>조각이케이크</Info>
						<Info_Button>회원정보수정</Info_Button>
						<Text>♥︎ 갤러리 사진 ♥︎</Text>
					</Profile>
				</Frame>
				<Text2>예약관리</Text2>
				<Frame2>
					<Img2 src={cake_profile} />
					<P2>
						<Text3>민지민지</Text3>
						<Text4>레터링 케이크</Text4>
					</P2>
					<P3>
						<T5>픽업 : 2022/05/03 17시</T5>
					</P3>
				</Frame2>
				<Text2>메뉴등록</Text2>
			</Body>
		</Content>
	);
};

export default mypage;
