/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Content, Header, Menu, Button } from './cover_style';
import { Gallery, Body, Frame, Frame2, Frame3, RText, RR, Img, GText } from './main_style';
import banner from '../../assets/banner.png';
import sendApi from '../../apis/sendApi';
import RandomGalleryData from './RandomGalleryData';
import ReviewData from './ReviewData';
import { useNavigate } from 'react-router-dom';

const reviewData = [
	{
		id: 0,
		name: '조각이',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSP0u7NCoK9DC0kwCvbPeFn0-0O7CfmtT6Q&usqp=CAU',
		content: 'ㄹㄹㄹㄹㄹㄹㄹㄹㄹ',
	},
	{
		id: 1,
		name: '조각이',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSP0u7NCoK9DC0kwCvbPeFn0-0O7CfmtT6Q&usqp=CAU',
		content: 'ㄹㄹㄹㄹㄹㄹㄹㄹㄹ',
	},
	{
		id: 2,
		name: '조각이',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSP0u7NCoK9DC0kwCvbPeFn0-0O7CfmtT6Q&usqp=CAU',
		content: 'ㄹㄹㄹㄹㄹㄹㄹㄹㄹ',
	},
	{
		id: 3,
		name: '조각이',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSP0u7NCoK9DC0kwCvbPeFn0-0O7CfmtT6Q&usqp=CAU',
		content: 'ㄹㄹㄹㄹㄹㄹㄹㄹㄹ',
	},
	{
		id: 4,
		name: '조각이',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSP0u7NCoK9DC0kwCvbPeFn0-0O7CfmtT6Q&usqp=CAU',
		content: 'ㄹㄹㄹㄹㄹㄹㄹㄹㄹ',
	},
];

function Main() {
	const navigate = useNavigate();
	const [recGalleryData, setRecGalleryData] = useState([]);

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
		navigate('/review');
	};

	const apidData = async () => {
		const { data } = await sendApi.getRecentlyGallery();
		setRecGalleryData(data);
	};

	useEffect(() => {
		apidData();
	}, []);

	// let navigate = useNavigate();
	// function click() {
	// 	navigate('/mypage');
	// }

	return (
		<Content>
			<Header>
				<Menu>
					{/* <Mypage> */}
					<Button onClick={click}>Mypage</Button>
					{/* </Mypage> */}
					{/* <Login> */}
					<Button onClick={click2}>Login</Button>
					{/* </Login> */}
				</Menu>
			</Header>
			<Body>
				<Img src={banner} />
				<Frame>
					<Gallery>
						<GText>더 많은 갤러리</GText>
						<br />
						<GText>♥︎구경가기♥︎</GText>
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
					<RText>= = = = 인기 후기글 = = = =</RText>
					<Button onClick={click4}>더보기</Button>
				</RR>

				<Frame3>
					{reviewData.map(gallery => (
						<ReviewData
							key={gallery.id}
							name={gallery.name}
							thumbnail={gallery.thumbnail}
							content={gallery.content}
							id={gallery.id}
						/>
					))}
				</Frame3>
			</Body>
		</Content>
	);
}

export default Main;
