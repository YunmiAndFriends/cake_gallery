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
} from './Store.style';
import profile from '../../assets/profile.jpg';
import StoreGallery from './StoreGallery';
import StoreReview from './StoreReview';
import StoreInfoData from './StoreInfoData';
import { GrGallery } from 'react-icons/gr';
import { AiFillEdit } from 'react-icons/ai';

const infoData = [
	{
		id: 0,
		name: '가게명: 졸프의 노예 케이크',
		content: '주소: 경기도 군포시 한세로 30',
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
				</StoreIntro>
				<SelectButton>
					<GrGallery
						className="galleryicon"
						size="50"
						// color="white"
						onClick={() => setViewGallery(true)}
					></GrGallery>
					<AiFillEdit
						className="reviewicon"
						size="50"
						onClick={() => setViewGallery(false)}
					></AiFillEdit>
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
