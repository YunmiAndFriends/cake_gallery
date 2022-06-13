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

const ReviewContent = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
`;

export { Container, Header, Mypage, Login, Menu, Logo, ReviewContent };
