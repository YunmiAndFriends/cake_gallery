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
	JoinButtonWrap,
	JoinButton,
} from './login_style';
import LoginLogo from '../../assets/cake-piece.png';
import { BiUser } from 'react-icons/bi';
import { MdPassword } from 'react-icons/md';
import { useState } from 'react';

function login_page() {
	const [loginId, setloginId] = useState('');
	const [loginPw, setloginPw] = useState('');

	const onChangeId = e => {
		setloginId(e.target.value);
	};
	const onChangePw = e => {
		setloginPw(e.target.value);
	};

	const onClickLogin = () => {};

	let navigate = useNavigate();
	function handleClick() {
		navigate('/customer_signup');
	}
	function signUpClick() {
		navigate('/sign_up');
	}
	return (
		<Container>
			<Title>
				<Image src={LoginLogo} />
			</Title>
			<Text>Welcome to Cake Gallery</Text>
			<InputDivWrap>
				<BiUser size={24} />
				<Input type="text" onChange={onChangeId} value={loginId} />
			</InputDivWrap>
			<InputDivWrap>
				<MdPassword size={24} />
				<Input type="password" onChange={onChangePw} value={loginPw} />
			</InputDivWrap>
			<LoginButton onClick={onClickLogin}>Login</LoginButton>
			<JoinButtonWrap>
				<JoinButton onClick={handleClick}>손님으로 회원가입</JoinButton>
				<JoinButton onClick={signUpClick}> 사장님으로 회원가입</JoinButton>
			</JoinButtonWrap>
		</Container>
	);
}

export default login_page;
