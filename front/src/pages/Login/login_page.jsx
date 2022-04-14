import React from 'react';
import {
	Container,
	Title,
	Text,
	InputDivWrap,
	Input,
	InputLogin,
	InputJoin,
	LoginButton,
	JoinButton,
} from './login_style';
import { BiUser } from 'react-icons/bi';
import { MdPassword } from 'react-icons/md';

function login_page() {
	return (
		<Container>
			<Title>로그인 페이지</Title>
			<Text>로그인 페이지 입니다.</Text>
			<InputDivWrap>
				<Input>
					<BiUser size={24} />
				</Input>
				<Input>
					<MdPassword size={24} />
				</Input>
			</InputDivWrap>

			<LoginButton>로그인</LoginButton>
			<JoinButton>회원가입</JoinButton>
		</Container>
	);
}

export default login_page;
