import React, { useState, useEffect } from 'react';
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
import HeaderBar from '../components/HeaderBar';
import profile from '../../assets/storeProfile.jpg';
import StoreGallery from './StoreGallery';
import StoreReview from './StoreReview';
import StoreInfoData from './StoreInfoData';
import { BiPhotoAlbum } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';
import sendApi from '../../apis/sendApi';

const gallery = {
	id: 0,
	name: '졸프의 노예 케이크',
	content: '경기도 군포시 한세로 30',
};

const Store = () => {
	const [viewGallery, setViewGallery] = useState(true);
	const [storeGalleryData, setStoreGalleryData] = useState(null);
	async function api(id) {
		const { data } = await sendApi.getStore({ selectedId: id });
		setStoreGalleryData(data);
		console.log('store', data);
	}

	useEffect(() => {
		const idData = window.location.href.split('=');
		api(idData[1]);
	}, []);

	if (storeGalleryData) {
		return (
			<Container>
				<HeaderBar />
				<Content>
					<StoreIntro>
						<StoreInfopage>
							<StoreInfoImage profile={storeGalleryData.imgUrl} />

							<StoreInfo>
								<StoreInfoData
									key={storeGalleryData.id}
									name={storeGalleryData.name}
									intro={storeGalleryData.introduction}
									content={storeGalleryData.address}
									id={storeGalleryData.id}
								/>
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
	}
};

export default Store;
