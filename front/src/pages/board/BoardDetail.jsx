import React from 'react';
//import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import sendApi from 'apis/sendApi';
import moment from 'moment';
import BoardContent from './BoardContent';

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

const BoardTitle = styled.div`
	margin: 16px 0 8px;
	font-size: 32px;
	font-weight: bold;
`;

const BoardDetail = () => {
	// const [boardDetailData, setBoardDetailData] = useState(null);
	// const presentBoardId = boardId;
	// useEffect(() => {
	// 	const receivedData = async () => {
	// 		try {
	// 			const { data } = await sendApi.getBoardDetail(boardId);
	// 			setBoardDetailData(data.data);
	// 		} catch (e) {
	// 		}
	// 	};
	// 	receivedData();
	// }, []);
	const data = {
		id: 1,
		writer: 'ㅅ믕5971',
		createdAt: '2022-06-16',
		title: '올해 최고의 케이크',
		content: '올해 최고의 케이크라고 자부합니다. 존맛탱 언니가 아주 많이 좋아햇ㅆ어요.',
		imgUrl: 'https://cdn.pixabay.com/photo/2018/09/11/11/47/cake-3669245_960_720.jpg',
		storeName: '마음을 담은 케이크',
	};
	return (
		<DetailWrapper>
			<Information>
				<Writer>{data.writer}</Writer>
				<CreatedDate>게시글 작성 시간 {moment(data.createdAt).format('YYYY.MM.DD')}</CreatedDate>
			</Information>
			<BoardTitle>{data.title}</BoardTitle>
			<BoardContent boardImg={data.imgUrl} boardContent={data.content} storeName={data.storeName} />
		</DetailWrapper>
	);
};

export default BoardDetail;
