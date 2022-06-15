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

const Text = styled.div`
	text-align: center;
	color: whitesmoke;
`;

const Text2 = styled.div`
	text-align: center;
	color: whitesmoke;
`;

const Login = styled.button`
	width: 96px;
	height: 24px;
	margin: auto;
	display: block;
`;

const Button = styled.button`
	width: 100px;
	height: 24px;
	margin: auto;
	display: block;
	margin-top: 16px;
`;

export { Content, Header, Body, Mypage, Login, Menu, Button, Text, Text2 };
