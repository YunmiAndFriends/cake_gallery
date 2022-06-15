import styled from 'styled-components';

const Body = styled.div`
	width: 90%;
	height: 50vh;
	background-color: bisque;
	border: solid;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Frame = styled.div`
	text-align: start;
`;
const Input = styled.input`
	width: 90%;
	height: 64px;
`;

const T1 = styled.div`
	width: 80%;
	text-align: start;
	display: flex;
	flex-direction: column;
`;

export { Body, Input, T1, Frame };
