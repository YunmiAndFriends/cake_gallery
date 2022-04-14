import styled from 'styled-components';
import coverImage from '../../assets/back_cover.png';

const Content = styled.div`
	display: flex;
	flex-direction: column;
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
`;

const Menu = styled.div`
	margin-right: 8px;
`;

const Mypage = styled.button`
	margin: 36px;
`;
const Img = styled.div`
	background-image: url(${coverImage});
	width: 100%;
	height: 100%;
`;

const Group = styled.div`
	flex-direction: row;
`;

const Text = styled.div`
	text-align: center;
`;

const Login = styled.button``;

const Button = styled.button`
	width: 100px;
	height: 24px;
	margin: auto;
	display: block;
`;

export { Content, Header, Body, Mypage, Login, Menu, Button, Img, Text, Group };
