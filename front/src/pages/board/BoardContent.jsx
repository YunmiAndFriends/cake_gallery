/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
//import sendApi from 'apis/sendApi';

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;

	margin: 8px 0 16px;
	padding: 32px 0 32px;
	border-top: solid black 1px;
	border-bottom: solid black 1px;
`;

const ContentImg = styled.img`
	width: 496px;
	height: 496px;
	background-color: #fafafa;
	border-radius: 4px;
`;

const Summary = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	margin: 0 0 0 24px;
	width: 40%;
`;

const BoardLike = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 16px;
`;

const Storename = styled.div`
	font-size: 24px;
	font-weight: bold;
	margin-left: 8px;
	border-bottom: 2px solid silver;
`;

const ContentDetail = styled.div`
	margin-top: 24px;
	margin-left: 8px;
`;

const ImgWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;
`;

const BoardContent = ({ boardImg, boardContent, storeName }) => {
	return (
		<ContentWrapper>
			<ImgWrap>
				<ContentImg src={boardImg} />
			</ImgWrap>
			<Summary>
				<Storename>{storeName}</Storename>
				<ContentDetail>{boardContent}</ContentDetail>
			</Summary>
		</ContentWrapper>
	);
};

export default BoardContent;
