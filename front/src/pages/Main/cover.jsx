import React from 'react';
import {
	Content,
	Header,
	Menu,
	Mypage,
	Login,
	Body,
	Button,
	Img,
	Text,
	Group,
} from './cover_style';
import coverImage from '../../assets/back_cover.png';
import { Link } from 'react-router-dom';

const click = () => {
	document.location.href('/main');
};

const cover = () => {
	return (
		<Content>
			<Header>
				<Menu>
					<Mypage>Mypage</Mypage>
					<Login>Login</Login>
				</Menu>
			</Header>
			<Body>
				<Img src={coverImage} />
				<Group>
					<Text>특별한 날 소중함을 더해주는 하나뿐인 케이크</Text>
					<Link to="/main">
						<Button onClick={click}>구경하러 가기</Button>
					</Link>
				</Group>
			</Body>
		</Content>
	);
};

export default cover;
