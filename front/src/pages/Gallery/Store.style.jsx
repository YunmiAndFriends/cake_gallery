import styled from 'styled-components';
import profile from '../../assets/storeProfile.jpg';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;
const Header = styled.div`
	display: flex;
	height: 10%;
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
	border-top: 3px solid #434d43ac;
	margin-top: 16px;
	padding-top: 32px;
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const StoreIntro = styled.div`
	display: flex;
	justify-content: space-evenly;
	/* justify-content: space-around; */
	margin-bottom: 20px;
`;

const StoreInfopage = styled.div`
	width: -webkit-fill-available;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	margin-left: 80px;
`;

const StoreInfoImage = styled.div`
	background-image: ${props => {
		return `url(${props.profile})`;
	}};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	width: 280px;
	height: 280px;
	border-radius: 70%;
	overflow: hidden;
`;

const StoreInfo = styled.div`
	display: flex;
	margin-left: 100px;
	color: #c15f5bda;
`;

const StoreMenuButton = styled.div``;

const MenuButton = styled.button`
	width: 100px;
	height: 40px;
	margin-bottom: 50px;
`;

const MenuButton2 = styled.button`
	width: 100px;
	height: 40px;
`;

const SelectButton = styled.div`
	display: flex;
	justify-content: space-evenly;
	/* margin: 20px; */
	border: 3px solid #434d43ac;
	border-radius: 4px;
	cursor: pointer;
	color: #434d43ac;
	font-weight: bold;
	align-items: center;
`;
const GalleryIcon = styled.div`
	width: -webkit-fill-available;
	display: flex;
	justify-content: center;
	padding-left: 32px;
`;

const ReviewIcon = styled.div`
	width: -webkit-fill-available;
	display: flex;
	justify-content: center;
	padding-right: 32px;
`;

const GrGallery = styled.button``;

const StoreGalleryReview = styled.div`
	display: flex;
	height: 100vh;
`;

export {
	Container,
	Header,
	Content,
	Logo,
	Menu,
	Mypage,
	Login,
	StoreIntro,
	StoreGalleryReview,
	StoreInfoImage,
	StoreInfo,
	GrGallery,
	SelectButton,
	GalleryIcon,
	ReviewIcon,
	StoreInfopage,
	StoreMenuButton,
	MenuButton,
	MenuButton2,
};
