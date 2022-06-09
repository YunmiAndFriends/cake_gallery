import React, { useState } from 'react';
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
import profile from '../../assets/profile.jpg';
import StoreGallery from './StoreGallery';
import StoreReview from './StoreReview';

const Store = () => {
	const [viewGallery, setViewGallery] = useState(true);

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
					<GalleryButton onClick={() => setViewGallery(true)}>갤러리</GalleryButton>
					<ReviewButton onClick={() => setViewGallery(false)}>후기</ReviewButton>
				</SelectButton>
				<StoreGalleryReview>
					{' '}
					{viewGallery ? <StoreGallery /> : <StoreReview />}{' '}
				</StoreGalleryReview>
			</Content>
		</Container>
	);
};

export default Store;
