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
	SelectButton,
	GalleryIcon,
	ReviewIcon,
	StoreInfopage,
	StoreMenuButton,
	MenuButton,
	MenuButton2,
} from './Store.style';
import profile from '../../assets/storeProfile.jpg';
import StoreGallery from './StoreGallery';
import StoreReview from './StoreReview';
import StoreInfoData from './StoreInfoData';
import { BiPhotoAlbum } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';

const infoData = [
	{
		id: 0,
		name: '졸프의 노예 케이크',
		content: '경기도 군포시 한세로 30',
	},
];

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
					<StoreInfopage>
						<StoreInfoImage src={profile} />
						<StoreInfo>
							{infoData.map(gallery => (
								<StoreInfoData
									key={gallery.id}
									name={gallery.name}
									thumbnail={gallery.thumbnail}
									content={gallery.content}
									id={gallery.id}
								/>
							))}
						</StoreInfo>
					</StoreInfopage>
					<StoreMenuButton>
						<MenuButton>❤</MenuButton>
						<MenuButton2>Message</MenuButton2>
					</StoreMenuButton>
				</StoreIntro>
				<SelectButton>
					<GalleryIcon onClick={() => setViewGallery(true)}>
						<BiPhotoAlbum size="50" color="#c15f5bda" />
					</GalleryIcon>
					|
					<ReviewIcon onClick={() => setViewGallery(false)}>
						<AiFillEdit color="#c15f5bda" size="50" />
					</ReviewIcon>
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
