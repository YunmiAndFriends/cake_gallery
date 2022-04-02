import styled from 'styled-components';

const Content = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: #f6ede1;
`;

const Header = styled.div`
	display: flex;
	flex-direction: row-reverse;
	height: 30%;
	justify-content: space-between;
`;

const Body = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	align-items: flex-end;
`;

const Menu = styled.div`
	margin-right: 8px;
`;

const Mypage = styled.button`
	margin: 36px;
`;

const Login = styled.button``;

export { Content, Header, Body, Mypage, Login, Menu };
