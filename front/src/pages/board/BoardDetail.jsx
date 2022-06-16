import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sendApi from '../../apis/sendApi';
import moment from 'moment';
import BoardContent from './BoardContent';
import { useNavigate } from 'react-router-dom';

const DetailWrapper = styled.div`
	background-color: white;
	width: 80%;
	margin-top: 48px;
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

const BoardDetail = () => {
	const navigate = useNavigate();
	const back = () => {
		navigate('/AllReview');
	};

	const [storeReviewData, setStoreReviewData] = useState(null);
	async function api(id) {
		const { data } = await sendApi.getReviewDetailes({ selectedId: id });
		setStoreReviewData(data);
		console.log('store', data);
	}

	useEffect(() => {
		const idData = window.location.href.split('=');
		api(idData[1]);
	}, []);

	if (storeReviewData !== null) {
		return (
			<DetailWrapper>
				<Information>
					<Writer>{storeReviewData.writer}</Writer>
					<CreatedDate>
						게시글 작성 시간 {moment(storeReviewData.createdAt).format('YYYY.MM.DD')}
					</CreatedDate>
				</Information>
				<BoardTitle>{storeReviewData.title}</BoardTitle>
				<BoardContent
					boardImg={storeReviewData.imgUrl}
					boardContent={storeReviewData.content}
					storeName={storeReviewData.storeName}
				/>
				<ButtonWrap>
					<SendButton onClick={() => back()}>목록보기</SendButton>
				</ButtonWrap>
			</DetailWrapper>
		);
	}
};

export default BoardDetail;
