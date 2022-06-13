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

const StoreInfoImage = styled.div`
	background-image: url(${profile});
	width: 280px;
	height: 280px;
	border-radius: 70%;
	overflow: hidden;
`;

const StoreInfo = styled.div`
	display: flex;
	/* width: 50vw; */
	/* height: 40vh; */
`;

const SelectButton = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 20px;
	/* height: 40px; */
	.galleryicon {
		/* color=#fad3ebfa; */
		color: white;
	}
	.reviewicon {
	}
`;

const GrGallery = styled.button``;

const ReviewButton = styled.button``;

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
	ReviewButton,
	SelectButton,
};
