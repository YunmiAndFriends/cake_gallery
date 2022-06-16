import React from 'react';
import {
	Container,
	Title,
	TitleDivWrap,
	ContentWrap,
	IconDivWrap,
	ContainerWrap,
	Text,
	MessageInput,
	InputDivWrap,
	Input,
	SubmitButton,
} from './sign_up_style';
import SignUpInfo from './sign_up_info';
import { SiCodechef } from 'react-icons/si';
import { useState } from 'react';
import sendApi from '../../apis/sendApi';
import { useNavigate } from 'react-router-dom';

function Sign_up() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState({
		userName: '',
		hp: '',
		email: '',
		birthday: new Date(),
		id: '',
		pw: '',
	});

	const onClickSignUp = async () => {
		const { data } = await sendApi.signUp({
			userkey: userInfo.id,
			password: userInfo.pw,
			name: userInfo.userName,
			birthday: userInfo.birthday,
			userType: 'director',
			email: userInfo.email,
			mobile: userInfo.hp,
		});
		if (data === 'ok') {
			navigate('/login');
		} else {
			alert(data);
		}
	};

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
			let onClickAtDotCheck = e.target.value;
			if (onClickAtDotCheck.indexOf('@') === -1) {
				document.getElementById('emailCheckMessage').innerText = '@가 포함되지 않았습니다.';
				console.log('at error!');
			} else if (onClickAtDotCheck.indexOf('.') === -1) {
				document.getElementById('emailCheckMessage').innerText = '.이 포함되지 않았습니다.';
				console.log('dot error!');
			} else if (onClickAtDotCheck.indexOf('.') < onClickAtDotCheck.indexOf('@')) {
				document.getElementById('emailCheckMessage').innerText = '.이 @이 앞에 있습니다.';
				console.log('error!');
			} else {
				document.getElementById('emailCheckMessage').innerText = '올바른 이메일 형식입니다.';
			}
		}

		setUserInfo({
			...userInfo,
			[e.target.name]: e.target.value,
		});
		console.log('변경된 값 확인', e.target.name, userInfo[e.target.name]);
	};

	const checkPassWord = e => {
		if (userInfo.pw !== e.target.value) {
			document.getElementById('pwCheckMessage').innerText = '비밀번호가 다릅니다.';
		} else {
			document.getElementById('pwCheckMessage').innerText = '비밀번호가 같습니다.';
		}
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
					<MessageInput id="emailCheckMessage"> </MessageInput>
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
					<SignUpInfo text="비밀번호 확인" onChangefunc={checkPassWord} />
					<MessageInput id="pwCheckMessage"> </MessageInput>
				</ContainerWrap>
				<SubmitButton onClick={onClickSignUp}>회원가입</SubmitButton>
			</ContentWrap>
		</Container>
	);
}

export default Sign_up;
