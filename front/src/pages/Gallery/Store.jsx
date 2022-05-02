import React from 'react';
import { Link } from 'react-router-dom';
import {
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
	GalleryButton,
	ReviewButton,
	SelectButton,
} from './Store.style';
import profile from '../../assets/profile.png';

const Store = () => {
	return (
		<Container>
			<Header>
				<Link to="/">
					<Logo>main</Logo>
				</Link>
				<Menu>
					<Mypage>Mypage</Mypage>
					<Login>Login</Login>
				</Menu>
			</Header>
			<Content>
				<StoreIntro>
					<StoreInfoImage src={profile} />
					<StoreInfo>가게 이름, 주소, 소개!</StoreInfo>
				</StoreIntro>
				<SelectButton>
					<GalleryButton>갤러리</GalleryButton>
					<ReviewButton>후기</ReviewButton>
				</SelectButton>
				<StoreGalleryReview>사진, 후기 번갈아 나오는 페이지</StoreGalleryReview>
			</Content>
		</Container>
	);
};

export default Store;
