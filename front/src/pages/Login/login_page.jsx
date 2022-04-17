/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Container,
	Title,
	Image,
	Text,
	InputDivWrap,
	Input,
	InputLogin,
	InputJoin,
	LoginButton,
	JoinButton,
} from './login_style';
import LoginLogo from '../../assets/cake-piece.png';
import { BiUser } from 'react-icons/bi';
import { MdPassword } from 'react-icons/md';

function login_page() {
	let navigate = useNavigate();
	function handleClick() {
		navigate('/join_page');
	}
	return (
		<Container>
			<Title>
				<Image src={LoginLogo} />
			</Title>
			<Text>Welcome to Cake Gallery</Text>
			<InputDivWrap>
				<BiUser size={24} />
				<Input />
			</InputDivWrap>
			<InputDivWrap>
				<MdPassword size={24} />
				<Input type="password" />
			</InputDivWrap>
			<LoginButton>Login</LoginButton>
			<JoinButton onClick={handleClick}>회원가입</JoinButton>
		</Container>
	);
}

export default login_page;
