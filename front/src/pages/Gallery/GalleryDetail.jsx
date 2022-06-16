import React from 'react';
//import { useState, useEffect } from 'react';
import styled from 'styled-components';
//import sendApi from 'apis/sendApi';
import moment from 'moment';
import GalleryContent from './GalleryContent';
import { useNavigate } from 'react-router-dom';

const DetailWrapper = styled.div`
	background-color: white;
	width: 80%;
	margin-top: 88px;
	border-radius: 24px;
	box-shadow: 6px 8px 4px 0 rgba(0, 0, 0, 0.26);
	padding: 56px;
`;

const Information = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 0 0 24px;
`;

const Writer = styled.div`
	font-size: 16px;
	font-weight: bold;
	margin-left: 8px;
`;

const CreatedDate = styled.div`
	margin-top: 8px;
	font-size: 16px;
	color: #606060;
`;

const GalleryTitle = styled.div`
	margin: 16px 0 8px;
	font-size: 32px;
	font-weight: bold;
	border-radius: 4px;
`;
const ButtonWrap = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const SendButton = styled.button`
	margin-top: 16px;
	margin-left: 16px;
	border: 0;
	background-color: #f6ede1;
	width: 104px;
	padding: 8px;
	border-radius: 48px;
	color: black;
	font-size: 16px;
	font-weight: bold;
	&:hover {
		cursor: pointer;
		border: 1px solid #cfcece;
	}
`;

const GalleryDetail = () => {
	const navigate = useNavigate();
	const back = () => {
		navigate('/AllGallery');
	};

	const data = {
		id: '',
		writer: '',
		createdAt: '',
		title: '',
		content: '',
		imgUrl: '',
	};

	return (
		<DetailWrapper>
			<Information>
				<Writer>{data.writer}</Writer>
				<CreatedDate>게시글 작성 시간 {moment(data.createdAt).format('YYYY.MM.DD')}</CreatedDate>
			</Information>
			<GalleryTitle>{data.title}</GalleryTitle>
			<GalleryContent boardImg={data.imgUrl} boardContent={data.content} />
			<ButtonWrap>
				<SendButton onClick={() => back()}>목록보기</SendButton>
			</ButtonWrap>
		</DetailWrapper>
	);
};

export default GalleryDetail;
