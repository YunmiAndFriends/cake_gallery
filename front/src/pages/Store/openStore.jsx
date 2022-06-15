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

function openStore() {
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

	// eslint-disable-next-line react-hooks/rules-of-hooks
	let navigate = useNavigate();
	function handleClick() {
		navigate('/main');
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
						<Input type="text" />
					</InputDivWrap>
					<InputDivWrap>
						<Text>주소</Text>
						<Input />
					</InputDivWrap>
					<InputDivWrap>
						<Text>가게 소개</Text>
						<Input />
					</InputDivWrap>
					<MessageInput />
					<InputDivWrap>
						<Text>가게 대표 사진</Text>
						<ImageDivWrap>
							<Input type="text" />
							<Image src={galleryInfo.imageurl} />
						</ImageDivWrap>
					</InputDivWrap>
				</ContainerWrap>
				<SubmitButton onClick={handleClick}>가게 등록하기</SubmitButton>
			</ContentWrap>
		</Container>
	);
}
export default openStore;
