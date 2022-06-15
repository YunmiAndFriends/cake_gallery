import React from 'react';
import { Content, Header, Menu, Button } from '../Main/cover_style';
import { Body, Input, Input2, Frame, T1 } from './review_write_style';
import { Link } from 'react-router-dom';

const click = () => {
	document.location.href('/mypage');
};
const click2 = () => {
	document.location.href('/login');
};
const onChange = () => {};

const review_write = () => {
	return (
		<Content>
			<Header>
				<Menu>
					<Link to="/mypage">
						<Button onClick={click}>Mypage</Button>
					</Link>
					<Link to="/login">
						<Button onClick={click2}>Login</Button>
					</Link>
				</Menu>
			</Header>
			<Body>
				<Frame>
					게시글 작성
					<T1>
						제목입력
						<Input type="text" placeholder="제목~" />
					</T1>
					<T1>
						<Input type="file" accept="*" onChange={onChange} />
					</T1>
					<T1>
						내용입력
						<Input type="text" placeholder="내용을 입력하세요~!" />
					</T1>
				</Frame>
			</Body>
		</Content>
	);
};

export default review_write;
