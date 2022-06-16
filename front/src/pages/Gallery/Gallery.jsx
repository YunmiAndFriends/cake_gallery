import React, { useEffect } from 'react';
import {
	Content,
	Header,
	Store,
	Mypage,
	Login,
	Menu,
	Logo,
	StoreGalleryContainer,
	Container,
	// SelectBoxContainer,
} from './Gallery.style';
import SelectedStoreGallery from './SelectedStoreGallery';
import HeaderBar from '../components/HeaderBar';
import sendApi from '../../apis/sendApi';
import { useState } from 'react';

const Gallery = () => {
	const [galleryData, setGalleryData] = useState([]);

	async function api() {
		const { data } = await sendApi.getAllGallery();
		setGalleryData(data);
		console.log('allgallery', data);
	}

	useEffect(() => {
		api();
	}, []);
	return (
		<Content>
			<HeaderBar />
			<Store>
				<StoreGalleryContainer>
					{/* <SelectBoxContainer>
						<SelectBox option={OPTION} />
					</SelectBoxContainer> */}
					<Container>
						{galleryData.map(gallery => (
							<SelectedStoreGallery
								key={gallery.id}
								name={gallery.name}
								thumbnail={gallery.imgUrl}
								content={gallery.address}
								id={gallery.id}
							/>
						))}
					</Container>
				</StoreGalleryContainer>
			</Store>
		</Content>
	);
};

export default Gallery;
