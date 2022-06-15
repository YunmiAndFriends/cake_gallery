import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	width: 100vw;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding-top: 200px;
`;

const ContentWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #fcfaf7;
	padding: 24px;
	border-radius: 8px;
`;

const Title = styled.div`
	font-size: 32px;
	margin-left: 8px;
`;

const TitleDivWrap = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 48px;
`;

const ContainerWrap = styled.div`
	display: flex;
	flex-direction: column;
	padding: 11px;
	align-items: flex-start;
`;

const Text = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	font-size: 22px;
	font-weight: 400;
	width: 132px;
	height: 32px;
	text-align: center;
`;

const Image = styled.img`
	display: flex;
	width: 320px;
	margin: 32px 16px 32px 16px;
	justify-content: center;
`;

const ImageDivWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

const MessageInput = styled.div`
	display: flex;
	width: 320px;
	padding: 12px;
`;

const InputDivWrap = styled.div`
	display: flex;
	padding: 8px;
`;

const Input = styled.input`
	width: 320px;
	height: 32px;
	border: none;
	background-color: #ffffff13;
	opacity: 1;
	border-bottom: 1px solid black;
	:focus {
		outline: none;
	}
	margin-left: 16px;
	font-size: 16px;
`;

const SubmitButton = styled.button`
	width: 244px;
	height: 40px;
	font-size: 16px;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	margin-top: 40px;
	background-color: #f7e1d7;
	border-radius: 4px;
	border: 1px solid #f2f0eb;
`;

export {
	Container,
	Title,
	TitleDivWrap,
	ContainerWrap,
	Text,
	Image,
	ImageDivWrap,
	MessageInput,
	InputDivWrap,
	Input,
	SubmitButton,
	ContentWrap,
};
