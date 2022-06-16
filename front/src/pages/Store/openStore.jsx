/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Container,
	Title,
	TitleDivWrap,
	ContainerWrap,
	Text,
	Image,
	ImageDivWrap,
	MessageInput,
	InputDivWrap,
	Input,
	SubmitButton,
	ContentWrap,
} from './openStore_style';
import { useState } from 'react';
import sendApi from '../../apis/sendApi';

function openStore() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	let navigate = useNavigate();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [galleryInfo, setGalleryInfo] = useState({
		name: '',
		address: '',
		introduction: '',
		imageurl: '',
	});

	const onChangeGalleryInfo = e => {
		setGalleryInfo({
			...galleryInfo,
			[e.target.name]: e.target.value,
		});
		console.log('변경된 값 확인', e.target.name, galleryInfo[e.target.name]);
	};

	async function handleClick() {
		if (
			!(
				galleryInfo.address.length &&
				galleryInfo.imageurl.length &&
				galleryInfo.introduction.length &&
				galleryInfo.name.length
			)
		) {
			alert('모든 필드를 채워주세요.');
		} else {
			const { data } = await sendApi.registerGallery({
				name: galleryInfo.name,
				add: galleryInfo.address,
				intro: galleryInfo.introduction,
				img: galleryInfo.imageurl,
				userKey: localStorage.getItem('userId'),
			});
			if (data === 'ok') {
				navigate('/main');
			} else {
				alert(data);
			}
		}
	}

	return (
		<Container>
			<ContentWrap>
				<TitleDivWrap>
					<Title>가게 등록 페이지</Title>
				</TitleDivWrap>
				<ContainerWrap>
					<InputDivWrap>
						<Text>가게 이름</Text>
						<Input type="text" name="name" onChange={onChangeGalleryInfo} />
					</InputDivWrap>
					<InputDivWrap>
						<Text>주소</Text>
						<Input name="address" onChange={onChangeGalleryInfo} />
					</InputDivWrap>
					<InputDivWrap>
						<Text>가게 소개</Text>
						<Input name="introduction" onChange={onChangeGalleryInfo} />
					</InputDivWrap>
					<MessageInput />
					<InputDivWrap>
						<Text>가게 대표 사진</Text>
						<ImageDivWrap>
							<Input type="text" name="imageurl" onChange={onChangeGalleryInfo} />
							<Image src={galleryInfo.imageurl} />
						</ImageDivWrap>
					</InputDivWrap>
					<InputDivWrap />
				</ContainerWrap>
				<SubmitButton type="submit" onClick={handleClick}>
					가게 등록하기
				</SubmitButton>
			</ContentWrap>
		</Container>
	);
}
export default openStore;
