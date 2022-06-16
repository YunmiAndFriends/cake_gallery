/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Content, Header, Menu, Button } from './cover_style';
import {
	Gallery,
	Body,
	Frame,
	Frame2,
	Frame3,
	RText,
	RR,
	Img,
	GText,
	MoveButton,
} from './main_style';
import banner from '../../assets/banner.png';
import HeaderBar from '../components/HeaderBar';
import sendApi from '../../apis/sendApi';
import RandomGalleryData from './RandomGalleryData';
import ReviewData from './ReviewData';
import { useNavigate } from 'react-router-dom';

function Main() {
	const navigate = useNavigate();
	const [recGalleryData, setRecGalleryData] = useState([]);
	const [recPostData, setRecPostData] = useState([]);

	const click = () => {
		navigate('/mypage');
	};
	const click2 = () => {
		navigate('/login');
	};

	const click3 = () => {
		navigate('/AllGallery');
	};

	const click4 = () => {
		navigate('/AllReview');
	};

	const apidData = async () => {
		const recGalleryValue = await sendApi.getRecentlyGallery();
		setRecGalleryData(recGalleryValue.data);

		const recPostValue = await sendApi.getRecentlyReviewPost();
		setRecPostData(recPostValue.data);
	};

	useEffect(() => {
		apidData();
	}, []);

	return (
		<Content>
			<HeaderBar />
			<Body>
				<Img src={banner} />
				<Frame>
					<Gallery>
						<GText>
							더 많은 갤러리를 살펴보세요
							<br />
							<br />
							♥︎구경가기♥︎
						</GText>
						<Button onClick={click3}>이동</Button>
					</Gallery>
					<Frame2>
						{recGalleryData.map(gallery => (
							<RandomGalleryData
								key={gallery.id}
								name={gallery.name}
								thumbnail={gallery.imgUrl}
								content={gallery.introduction}
								id={gallery.id}
							/>
						))}
					</Frame2>
				</Frame>
				<RR>
					<RText>
						• • • • • 최신 후기글
						<MoveButton onClick={click4}>+</MoveButton>• • • • •
					</RText>
				</RR>

				<Frame3>
					{recPostData.map(gallery => (
						<ReviewData
							key={gallery.id}
							name={gallery.title}
							thumbnail={gallery.imgUrl}
							content={gallery.writer}
							id={gallery.id}
						/>
					))}
				</Frame3>
			</Body>
		</Content>
	);
}

export default Main;
