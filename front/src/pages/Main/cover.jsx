/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Content, Header, Menu, Mypage, Login, Body, Button, Text, TextWrap } from './cover_style';
import { Link, useNavigate } from 'react-router-dom';

const cover = () => {
	const navigate = useNavigate();
	const click = () => {
		navigate('/main');
	};
	const click2 = () => {
		navigate('/login');
	};
	return (
		<Content>
			{/* <Header>
				<Menu>
					<Mypage>Mypage</Mypage>
					<Login>Login</Login>
				</Menu>
			</Header> */}
			<Body>
				<TextWrap>
					<Text>특별한 날 소중함을 더해주는 </Text>
					<Text>하나뿐인 케이크</Text>
				</TextWrap>
				<Link to="/main">
					<Button onClick={click}>구경하러 가기</Button>
				</Link>
				<Link to="/login">
					<Button onClick={click2}>Login</Button>
				</Link>
			</Body>
		</Content>
	);
};

export default cover;
