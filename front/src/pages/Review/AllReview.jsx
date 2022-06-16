import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const AllReview = () => {
	const [reviewData, setReviewData] = useState([]);
	async function api() {
		const { data } = await sendApi.getAllReviewPost();
		setReviewData(data);
	}

	useEffect(() => {
		api();
	}, []);
	return (
		<Container>
			<HeaderBar />
			<Content>
				<ReviewBanner>Review</ReviewBanner>
				<ReviewContent>
					{reviewData.map(gallery => (
						<AllReviewData
							key={gallery.id}
							title={gallery.title}
							thumbnail={gallery.thumbnail}
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
