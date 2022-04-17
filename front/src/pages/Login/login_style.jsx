import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding-top: 124px;
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
`;

const InputLogin = styled.h2``;
const InputJoin = styled.h2``;

const LoginButton = styled.button`
	width: 244px;
	height: 40px;
	display: block;
	margin-top: 20px;
`;

const JoinButton = styled.button`
	width: 244px;
	height: 40px;
	text-decoration: underline;
	display: block;
	border: none;
	font-size: 16px;
	position: absolute;
	bottom: 0;
	margin-bottom: 16px;
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
	JoinButton,
};
