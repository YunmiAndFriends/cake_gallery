import React, { useState } from 'react';
import styled from 'styled-components';
import sendApi from '../../apis/sendApi';
import { IoCameraOutline } from 'react-icons/io5';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	align-items: center;
	justify-content: center;
	height: 400px;
`;

const BoardPhoto = styled.img`
	background-color: white;
	height: 300px;
	width: 380px;
	border: 1px solid white;
	object-fit: cover;
`;
const BoardPhotoNone = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 300px;
	width: 380px;
	background-color: #e2e2e2;
`;

const PhotoAddWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 380px;
	height: 40px;
`;

const InputPhoto = styled.input`
	width: 380px;
	height: 24px;
`;
const NoneLabel = styled.label`
	border-radius: 50px;
	transition: transform 0.5s;
	&:hover {
		cursor: pointer;
		transform: scale(1.4);
		border: none;
	}
`;

const Label = styled.label`
	border-radius: 50px;
	transition: transform 0.5s;
	&:hover {
		cursor: pointer;
		transform: scale(1.4);
		border: none;
	}
`;

const ImgWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const PictureBox = ({ pictureUrl, setPictureUrl }) => {
	return (
		<Wrapper>
			{pictureUrl.length === 0 ? (
				<BoardPhotoNone>사진 URL을 입력하세요.</BoardPhotoNone>
			) : (
				<ImgWrap>
					<BoardPhoto src={pictureUrl} alt="게시글 사진" />
				</ImgWrap>
			)}
			<PhotoAddWrap>
				<InputPhoto name="imgUrl" onChange={setPictureUrl} />
			</PhotoAddWrap>
		</Wrapper>
	);
};

export default PictureBox;
