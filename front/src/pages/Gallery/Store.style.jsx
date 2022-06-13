import styled from 'styled-components';
import profile from '../../assets/profile.jpg';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;
const Header = styled.div`
	display: flex;
	height: 10%;
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

const Content = styled.div`
	margin-top: 60px;
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

// const StoreInfoImage = styled.image`
// 	display: flex;
// 	width: 50vw;
// 	height: 50vh;
// `;

const StoreInfopage = styled.div`
	width: -webkit-fill-available;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-left: 80px;
`;

const StoreInfoImage = styled.div`
	background-image: url(${profile});
	width: 280px;
	height: 280px;
	border-radius: 70%;
	overflow: hidden;
`;

const StoreInfo = styled.div`
	display: flex;
	margin-left: 40px;
`;

const StoreMenuButton = styled.div``;

const MenuButton = styled.button``;

const MenuButton2 = styled.button``;

const SelectButton = styled.div`
	display: flex;
	justify-content: space-evenly;
	/* margin: 20px; */
	border: 3px solid #434d43ac;
	border-radius: 4px;
`;
const GalleryIcon = styled.div``;

const ReviewIcon = styled.div``;

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
