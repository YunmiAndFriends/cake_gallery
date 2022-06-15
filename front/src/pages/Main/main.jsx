import React, { useEffect, useState } from 'react';
import { Content, Header, Menu, Button } from './cover_style';
import { Gallery, Body, Frame, Frame2, Frame3, R_Text, RR } from './main_style';
import { Img, G_Text } from './main_style';
import banner from '../../assets/banner.png';
import sendApi from '../../apis/sendApi';
import RandomGalleryData from './RandomGalleryData';
import ReviewData from './ReviewData';
import { Link } from 'react-router-dom';

const click = () => {
	document.location.href('/mypage');
};
const click2 = () => {
	document.location.href('/login');
};
const click3 = () => {
	document.location.href('/AllGallery');
};
const click4 = () => {
	document.location.href('/review');
};
const randomGalleryData = [
	{
		id: 0,
		name: '조각이',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSP0u7NCoK9DC0kwCvbPeFn0-0O7CfmtT6Q&usqp=CAU',
		content: 'ㄹㄹㄹㄹㄹㄹㄹㄹㄹ',
	},
	{
		id: 1,
		name: '호리',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSP0u7NCoK9DC0kwCvbPeFn0-0O7CfmtT6Q&usqp=CAU',
		content: '소개글',
	},
	{
		id: 2,
		name: '호리',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSP0u7NCoK9DC0kwCvbPeFn0-0O7CfmtT6Q&usqp=CAU',
		content: '소개글',
	},
];

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
	const [recGalleryData, setRecGalleryData] = useState([]);
	useEffect(async () => {
		const { data } = await sendApi.getRecentlyGallery();
		setRecGalleryData(data);
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
					<Link to="/mypage">
						<Button onClick={click}>Mypage</Button>
					</Link>
					{/* </Mypage> */}
					{/* <Login> */}
					<Link to="/login">
						<Button onClick={click2}>Login</Button>
					</Link>
					{/* </Login> */}
				</Menu>
			</Header>
			<Body>
				<Img src={banner} />
				<Frame>
					<Gallery>
						<G_Text>
							더 많은 갤러리
							<br />
							♥︎구경가기♥︎
						</G_Text>
						<Link to="/AllGallery">
							<Button onClick={click3}>이동</Button>
						</Link>
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
					<R_Text>= = = = 인기 후기글 = = = =</R_Text>
					<Link to="/review">
						<Button onClick={click4}>더보기</Button>
					</Link>
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
