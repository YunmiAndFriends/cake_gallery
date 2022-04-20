import React from 'react';
import {
	Container,
	Title,
	ContainerWrap,
	Text,
	InputDivWrap,
	Input,
} from './customer_signup_style';
import SignUpInfo from './sign_up_info';

function sign_up() {
	return (
		<Container>
			<Title>사장님 회원가입 페이지</Title>
			<ContainerWrap>
				<SignUpInfo text="이름" />
				<SignUpInfo text="전화번호" />
				<SignUpInfo text="이메일" />
				<InputDivWrap>
					<Text>생일</Text>
					<Input type="date" />
				</InputDivWrap>
				<SignUpInfo text="ID" />
				<SignUpInfo text="비밀번호" />
				<SignUpInfo text="비밀번호 확인" />
			</ContainerWrap>
		</Container>
	);
}

export default sign_up;
