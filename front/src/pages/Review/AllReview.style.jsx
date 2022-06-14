import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const Header = styled.div`
	display: flex;
	height: 20%;
	justify-content: space-between;
	border-bottom: 3px solid gray;
`;

const Logo = styled.button`
	width: 100px;
	height: 40px;
`;

const Menu = styled.div`
	margin-right: 8px;
`;

const Mypage = styled.button`
	width: 80px;
	margin: 36px;
`;

const Login = styled.button`
	width: 80px;
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;
const ReviewBanner = styled.div`
	display: flex;
	color: #c15f5bda;
	font-size: 40px;
`;

const ReviewContent = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: -webkit-fill-available;
	margin-top: 20px 10px 0px 10px;
	padding: 40px;
	background-color: #ca282818;
	/* justify-content: center; */
`;

export { Container, Header, Mypage, Login, Menu, Logo, Content, ReviewContent, ReviewBanner };
