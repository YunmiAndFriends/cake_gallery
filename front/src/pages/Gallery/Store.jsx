import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Content, Logo, Menu, Mypage, Login, StoreInfo } from './Store.style';

const Store = () => {
	return (
		<Container>
			<Header>
				<Link to="/">
					<Logo>main</Logo>
				</Link>
				<Menu>
					<Mypage>Mypage</Mypage>
					<Login>Login</Login>
				</Menu>
			</Header>
			<Content>
				<StoreInfo></StoreInfo>
				{/* 갤러리랑 후기 컴포넌트  */}
			</Content>
		</Container>
	);
};

export default Store;
