import React, { useState, useEffect } from 'react';
import {
	Container,
	Header,
	Logo,
	Menu,
	Mypage,
	Login,
	Banner,
	Content,
	ReviewContent,
	Writer,
	WriteTime,
	TitleData,
	ContentData,
	ThumbnailData,
	ReviewContentData,
} from './ReviewDetails.style';
import { Link } from 'react-router-dom';
import ReviewDetailesData from './ReviewDetailesData';
import sendApi from '../../apis/sendApi';
import HeaderBar from '../components/HeaderBar';

// const reviewDetailesData = [
// 	{
// 		id: 0,
// 		title: '<케이크 맛집 후기>',
// 		thumbnail:
// 			'data:image/jpeg;base64,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',
// 		content: '윤미가 만든 케이크 역시 꿀맛이에용',
// 		storename: '윤미네 케이크',
// 		address: '경기도 군포시 한세로 30',
// 	},
// ];

const ReviewDetails = () => {
	const [reviewDetailesData, setReviewDetailesData] = useState(null);
	async function api(id) {
		const { data } = await sendApi.getReviewDetailes({ selectedId: id });
		setReviewDetailesData(data);
		console.log('reviewdetailes', data);
	}

	useEffect(() => {
		const idData = window.location.href.split('=');
		api(idData[1]);
	}, []);
	if (reviewDetailesData) {
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
					<Banner>
						<Writer>작성자: 정윤미</Writer>
						<WriteTime>게시글 작성 시간: 2022.06.15 19:07</WriteTime>
					</Banner>
					<ReviewContent>
						<ReviewDetailesData
							key={reviewDetailesData.id}
							thumbnail={reviewDetailesData.thumbnail}
							title={reviewDetailesData.title}
							content={reviewDetailesData.content}
							storename={reviewDetailesData.storename}
							address={reviewDetailesData.address}
							id={reviewDetailesData.id}
						/>
					</ReviewContent>
				</Content>
			</Container>
		);
	}
};

export default ReviewDetails;
