import styled from 'styled-components';
import coverImage from '../../assets/back_cover.png';

const Content = styled.div`
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	height: 100vh;
	background-color: #f6ede1;
`;

const Header = styled.div`
	display: flex;
	flex-direction: row-reverse;
	height: 20%;
	justify-content: space-between;
`;

const Body = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	text-align: center;
	justify-content: center;
	font-size: 200%;
	background-image: url(${coverImage});
`;

const Menu = styled.div`
	display: flex;
	flex-direction: row;
	/* justify-content: right; */
	margin-right: 8px;
	position: absolute;
	right: 0%;
`;

const Mypage = styled.button`
	margin: 36px;
`;

// const Group = styled.div`
// 	flex-direction: row;
// 	justify-content: center;
// `;

const TextWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 32px;
`;

const Text = styled.div`
	width: fit-content;
	text-align: center;
	color: whitesmoke;
	background-color: #30303078;
	border-radius: 12px;
	padding: 16px;
	margin-bottom: 16px;
`;

const Login = styled.button`
	width: 96px;
	height: 24px;
	margin: auto;
	display: block;
`;

const Button = styled.button`
	background-color: #ffffffa6;
	width: 200px;
	padding: 8px;
	border-radius: 8px;
	color: black;
	border: 1px solid silver;
	font-size: 16px;
	font-weight: bold;
`;

export { Content, Header, Body, Mypage, Login, Menu, Button, Text, TextWrap };
