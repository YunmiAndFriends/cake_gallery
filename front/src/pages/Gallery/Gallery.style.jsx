import styled from 'styled-components';

const Content = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: #f6ede1;
`;

const Header = styled.div`
	display: flex;
	height: 30%;
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

const Store = styled.div`
	display: flex;
	/* flex-direction: column; */
	height: 100vh;
	/* align-items: flex-end; */
`;

const StoreGalleryContainer = styled.div`
	display: flex;
	/* flex-direction: column; */
	flex-wrap: wrap;
	width: -webkit-fill-available;
	height: fit-content;
	margin: 40px;
	padding: 40px;
	background-color: #ca282818;
	/* align-items: flex-end; */
`;

const SelectBoxContainer = styled.div`
	/* align-items: flex-end; */
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export {
	Content,
	Header,
	Store,
	Mypage,
	Login,
	Menu,
	Logo,
	StoreGalleryContainer,
	SelectBoxContainer,
	Container,
};
