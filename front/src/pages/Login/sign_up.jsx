import React from 'react';
import {
	Container,
	Title,
	TitleDivWrap,
	ContentWrap,
	IconDivWrap,
	ContainerWrap,
	Text,
	InputDivWrap,
	Input,
	SubmitButton,
} from './sign_up_style';
import SignUpInfo from './sign_up_info';
import { SiCodechef } from 'react-icons/si';
import { useState } from 'react';

function sign_up() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [userInfo, setUserInfo] = useState({
		userName: '',
		hp: '',
		email: '',
		birthday: new Date(),
		id: '',
		pw: '',
	});

	const onChangeUserInfo = e => {
		if (e.target.name === 'hp') {
			let stValue = e.target.value;
			for (let i = 0; i < stValue.length; i++) {
				const num = Number(stValue[i]);
				if (!Number.isInteger(num)) {
					alert('숫자만 입력 가능합니다.');
					return;
				}
			}
		}
		if (e.target.name === 'email') {
			let onClickAtCheck = e.target.value;
			if (onClickAtCheck.indexOf('@') === -1) {
				console.log('@이가 빠짐');
			}
			let onClickDotCheck = e.target.value;
			if (onClickDotCheck.indexOf('.') === -1) {
				console.log('점이 빠짐');
			}
			if (onClickAtCheck.indexOf('.') > onClickDotCheck.indexOf('@')) {
				console.log('error!');
			}
		}

		setUserInfo({
			...userInfo,
			[e.target.name]: e.target.value,
		});
		console.log('변경된 값 확인', e.target.name, userInfo[e.target.name]);
	};

	return (
		<Container>
			<ContentWrap>
				<TitleDivWrap>
					<IconDivWrap>
						<SiCodechef size={24} />
					</IconDivWrap>
					<Title>사장님 회원가입 페이지</Title>
				</TitleDivWrap>
				<ContainerWrap>
					<SignUpInfo
						text="이름"
						name="userName"
						data={userInfo.userName}
						onChangefunc={onChangeUserInfo}
					/>
					<SignUpInfo
						text="전화번호"
						name="hp"
						data={userInfo.hp}
						onChangefunc={onChangeUserInfo}
					/>
					<SignUpInfo
						text="이메일"
						name="email"
						data={userInfo.email}
						onChangefunc={onChangeUserInfo}
					/>
					<InputDivWrap>
						<Text>생일</Text>
						<Input type="date" name="birthday" onChange={onChangeUserInfo} max="2015-06-01" />
					</InputDivWrap>
					<SignUpInfo text="ID" name="id" data={userInfo.id} onChangefunc={onChangeUserInfo} />
					<SignUpInfo
						text="비밀번호"
						name="pw"
						data={userInfo.pw}
						onChangefunc={onChangeUserInfo}
					/>
					<SignUpInfo text="비밀번호 확인" />
				</ContainerWrap>
				<SubmitButton>회원가입</SubmitButton>
			</ContentWrap>
		</Container>
	);
}

export default sign_up;
