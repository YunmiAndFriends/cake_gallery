import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding-top: 320px;
	margin-left: -124px;
`;

const ContainerWrap = styled.div`
	display: flex;
	flex-direction: column;
	padding: 11px;
	align-items: flex-end;
`;

const Text = styled.div`
	font-size: 22px;
	font-weight: 400;
	width: 120px;
	text-align: center;
`;

const InputDivWrap = styled.div`
	display: flex;
	padding: 8px;
`;

const Input = styled.input`
	width: 320px;
	height: 24px;
	border: none;
	border-bottom: 1px solid black;
	:focus {
		outline: none;
	}
	margin-left: 16px;
	font-size: 16px;
`;

export { Container, ContainerWrap, Text, InputDivWrap, Input };
