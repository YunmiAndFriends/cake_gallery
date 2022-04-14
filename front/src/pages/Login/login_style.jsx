import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.div``;
const Text = styled.div`
	font-size: 44px;
	font-weight: 400;
`;
const InputDivWrap = styled.div``;
const Input = styled.div``;
const InputLogin = styled.h2``;
const InputJoin = styled.h2``;
const LoginButton = styled.button`
	width: 28vw;
	height: 4.5vh;
`;
const JoinButton = styled.button`
	width: 4vw;
	height: 4.5vh;
`;

export {
	Container,
	Title,
	Text,
	InputDivWrap,
	Input,
	InputLogin,
	InputJoin,
	LoginButton,
	JoinButton,
};
