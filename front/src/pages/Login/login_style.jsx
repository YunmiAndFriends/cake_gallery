import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	width: 100vw;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding-top: 124px;
	overflow: hidden;
`;

const Title = styled.div``;
const Image = styled.img`
	width: 132px;
`;

const Text = styled.div`
	font-size: 32px;
	font-weight: 400;
	color: #00633670;
	margin: -8px 48px 102px 48px;
`;

const InputDivWrap = styled.div`
	margin-bottom: 22px;
`;

const Input = styled.input`
	width: 200px;
	height: 24px;
	border: none;
	border-bottom: 1px solid black;
	:focus {
		outline: none;
	}
	margin-left: 16px;
	font-size: 24px;
	background-color: #ffffff13;
	opacity: 1;
`;

const InputLogin = styled.h2``;
const InputJoin = styled.h2``;

const LoginButton = styled.button`
	width: 244px;
	height: 40px;
	display: block;
	margin-top: 24px;
	margin-bottom: 400px;
	background-color: #ffffff13;
	opacity: 1;
	border-radius: 4px;
`;

const JoinButtonWrap = styled.div`
	position: absolute;
	bottom: 0;
	display: flex;
	bottom: -4px;
	background-color: #ffffff13;
	opacity: 1;
`;

const JoinButton = styled.button`
	width: 244px;
	height: 40px;
	text-decoration: underline;
	display: block;
	border: none;
	font-size: 16px;
	margin-bottom: 16px;
	background: none;
`;

export {
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
};
