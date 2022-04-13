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
`;

const Logo = styled.div`
	display: flex;
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

const SelectBoxContainer = styled.div`
	margin-bottom: 20px;
`;

const Store = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	align-items: flex-end;
`;

const StoreGalleryContainer = styled.div``;

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
};
