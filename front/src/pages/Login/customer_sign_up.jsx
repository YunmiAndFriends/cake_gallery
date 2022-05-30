import React from 'react';
import {
	Container,
	Title,
	TitleDivWrap,
	IconDivWrap,
	ContainerWrap,
	Text,
	InputDivWrap,
	Input,
	SubmitButton,
	ContentWrap,
} from './customer_signup_style';
import SignUpInfo from './sign_up_info';
import { IoMdPersonAdd } from 'react-icons/io';

function signup_page() {
	return (
		<Container>
			<ContentWrap>
				<TitleDivWrap>
					<IconDivWrap>
						<IoMdPersonAdd size={24} />
					</IconDivWrap>
					<Title>손님 회원가입 페이지</Title>
				</TitleDivWrap>
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
				<SubmitButton>회원가입</SubmitButton>
			</ContentWrap>
		</Container>
	);
}

export default signup_page;
