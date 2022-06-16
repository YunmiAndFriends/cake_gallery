import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	Container,
	Header,
	Logo,
	Menu,
	Mypage,
	Login,
	Content,
	ReviewContent,
	ReviewBanner,
} from './AllReview.style';
import AllReviewData from './AllReviewData';
import sendApi from '../../apis/sendApi';
import HeaderBar from '../components/HeaderBar';
import { MoveButton } from '../Main/main_style';

const AllReview = () => {
	const navigate = useNavigate();
	const [reviewData, setReviewData] = useState([]);
	async function api() {
		const { data } = await sendApi.getAllReviewPost();
		setReviewData(data);
	}

	const onClickMoveBtn = () => {
		navigate('/reviewPosting');
	};

	useEffect(() => {
		api();
	}, []);
	return (
		<Container>
			<HeaderBar />
			<Content>
				<ReviewBanner>
					Review<MoveButton onClick={onClickMoveBtn}>+</MoveButton>
				</ReviewBanner>
				<ReviewContent>
					{reviewData.map(gallery => (
						<AllReviewData
							key={gallery.id}
							title={gallery.title}
							thumbnail={gallery.imgUrl}
							writer={gallery.writer}
							id={gallery.id}
						/>
					))}
				</ReviewContent>
			</Content>
		</Container>
	);
};

export default AllReview;
