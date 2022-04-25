import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;
const Header = styled.div`
	display: flex;
	height: 8%;
	justify-content: space-between;
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

const Content = styled.div``;

const StoreInfo = styled.div``;

export { Container, Header, Content, Logo, Menu, Mypage, Login, StoreInfo };
